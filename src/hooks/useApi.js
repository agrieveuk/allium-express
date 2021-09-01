import { useEffect, useState } from 'react';
import { getArticleById, getArticles, getComments } from '../utils/app';

export const useArticle = (article_id) => {
  const [article, setArticle] = useState({}); // change with some isLoading
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

  return { comments, isLoading };
};

export const useArticles = (topic) => {
  const [articleList, setArticleList] = useState([]); // change with some isLoading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticles(topic).then((data) => {
      setArticleList(data);
      setIsLoading(false);
    });
  }, [topic]);

  return { articleList, isLoading };
};
