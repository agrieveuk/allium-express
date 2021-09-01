import { useEffect, useState } from 'react';
import { getComments } from '../utils/app';

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
