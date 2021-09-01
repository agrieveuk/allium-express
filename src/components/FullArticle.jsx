import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/app';
import Comments from './Comments';

const FullArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [displayComments, setDisplayComments] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data);
    });
  }, [article_id]);

  const toggleComments = () => {
    setDisplayComments((currDisplayComments) => {
      return !currDisplayComments;
    });
  };

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
      <button onClick={toggleComments}>
        Comments: {article.comment_count}
      </button>
      {displayComments ? <Comments article_id={article_id} /> : null}
    </main>
  );
};

export default FullArticle;
