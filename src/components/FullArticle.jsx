import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/app';

const FullArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      console.log(data);
      setArticle(data);
    });
  }, [article_id]);

  return (
    <main>
      <article>
        <h3>{article.title}</h3>
        <div className='full-article-info'>
          <p>{article.author}</p>
          <p>{article.topic}</p>
          <p>{`${article.created_at.substr(12, 7)} 
            ${article.created_at.substr(0, 10)}`}</p>
        </div>
        <img
          src='https://picsum.photos/800/500'
          alt='placeholder article visual'
        />
        <p>{article.body}</p>
        <div>
          <p>{article.votes}</p>
        </div>
      </article>
      <button>Comments: {article.comment_count}</button>
    </main>
  );
};

export default FullArticle;
