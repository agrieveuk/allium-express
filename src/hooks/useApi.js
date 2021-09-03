import { useEffect, useState } from 'react';
import {
  getArticleById,
  getArticles,
  getComments,
  patchArticle,
} from '../utils/app';

export const useArticle = (article_id) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticleById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return { article, isLoading };
};

export const useComments = (article_id) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getComments(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return { comments, isLoading, setComments };
};

export const useArticles = (topic) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(undefined);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    setPage(1);
  }, [topic]);

  useEffect(() => {
    setIsLoading(true);

    getArticles({ topic, sort_by: sortBy, page }).then((data) => {
      setArticleList(data.articles);
      setTotalArticles(+data.total_count);
      setIsLoading(false);
    });
  }, [topic, sortBy, page]);

  return {
    articleList,
    isLoading,
    setSortBy,
    sortBy,
    page,
    setPage,
    totalArticles,
  };
};

export const useVotes = ({ article_id, setHasErrored }) => {
  const [isLiked, setIsLiked] = useState(false);

  const flipLikeStatus = () => {
    setHasErrored(false);
    const inc_votes = isLiked ? -1 : 1;
    setIsLiked((currIsLiked) => !currIsLiked);

    patchArticle(article_id, inc_votes).catch(() => {
      setHasErrored(true);
      setIsLiked((currIsLiked) => !currIsLiked);
    });
  };

  return [isLiked, flipLikeStatus];
};
