import { useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { useArticle } from '../hooks/useApi';
import Comments from './Comments';
import Votes from './Votes';

const FullArticle = ({ user }) => {
  const { article_id } = useParams();
  const [displayComments, setDisplayComments] = useState(false);
  const { article, isLoading, error } = useArticle(article_id);

  const toggleComments = () => {
    setDisplayComments((currDisplayComments) => {
      return !currDisplayComments;
    });
  };

  if (error) return <Redirect to='/404' />;
  if (isLoading) return <h3>Any moment now...</h3>;
  return (
    <main>
      <article>
        <h3>{article.title}</h3>
        <div className='full-article-info'>
          <Link to={`/users/${article.author}`}>
            <p>{article.author}</p>
          </Link>
          <p>{article.topic}</p>
          <p>{`${article.created_at.substr(12, 7)} 
            ${article.created_at.substr(0, 10)}`}</p>
        </div>
        <img
          src='https://picsum.photos/1200/750'
          alt='placeholder article visual'
        />
        <p className='article-content'>{article.body}</p>
        <Votes article_id={article_id} votes={article.votes} />
      </article>
      <button className='animated-button' onClick={toggleComments}>
        <div className='circle' />
        <span>Comments: {article.comment_count}</span>
      </button>
      {displayComments ? (
        <Comments
          article_id={article_id}
          user={user}
          comment_count={article.comment_count}
        />
      ) : null}
    </main>
  );
};

export default FullArticle;
