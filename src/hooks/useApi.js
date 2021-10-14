import { useEffect, useState } from 'react';
import {
  getArticleById,
  getArticles,
  getComments,
  patchArticle,
  patchComment,
  getUser
} from '../utils/api';

export const useArticle = (article_id) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  return { article, isLoading, error };
};

export const useComments = (article_id) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    getComments(article_id, page).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id, page]);

  return { comments, isLoading, setComments, setPage, page };
};

export const useArticles = ({ topic, author }) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(undefined);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [topic, author]);

  useEffect(() => {
    setIsLoading(true);

    getArticles({ topic, author, sort_by: sortBy, page })
      .then((data) => {
        setArticleList(data.articles);
        setTotalArticles(+data.total_count);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic, sortBy, page, author]);

  return {
    articleList,
    isLoading,
    setSortBy,
    sortBy,
    page,
    setPage,
    totalArticles,
    error
  };
};

export const useVotes = ({ article_id, comment_id, setHasErrored }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  let inc_votes;

  const flipLikeStatus = () => {
    if (isLiked) {
      inc_votes = -1;
      setIsLiked(false);
    } else if (isDisliked) {
      inc_votes = 2;
      setIsDisliked(false);
      setIsLiked(true);
    } else {
      inc_votes = 1;
      setIsLiked(true);
    }
    updateVotes('like');
  };

  const flipDislikeStatus = () => {
    if (isDisliked) {
      inc_votes = 1;
      setIsDisliked(false);
    } else if (isLiked) {
      inc_votes = -2;
      setIsDisliked(true);
      setIsLiked(false);
    } else {
      inc_votes = -1;
      setIsDisliked(true);
    }
    updateVotes('dislike');
  };

  const updateVotes = (action) => {
    setHasErrored(false);
    const patchComponent = article_id ? patchArticle : patchComment;

    patchComponent({ article_id, comment_id, inc_votes }).catch(() => {
      setHasErrored(true);
      if (action === 'like') {
        setIsLiked((currStatus) => !currStatus);
        if (inc_votes === 2) setIsDisliked(true);
      } else {
        setIsDisliked((currStatus) => !currStatus);
        if (inc_votes === -2) setIsLiked(true);
      }
    });
  };

  return [isLiked, isDisliked, flipLikeStatus, flipDislikeStatus];
};

export const useUser = (username) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser(username)
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [username]);

  return { user, isLoading, error };
};
