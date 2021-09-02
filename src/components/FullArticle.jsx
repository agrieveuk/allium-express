import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useArticle } from '../hooks/useApi';
import Comments from './Comments';
import Votes from './Votes';

const FullArticle = ({ user }) => {
  const { article_id } = useParams();
  const [displayComments, setDisplayComments] = useState(false);
  const { article, isLoading } = useArticle(article_id);

  const toggleComments = () => {
    setDisplayComments((currDisplayComments) => {
      return !currDisplayComments;
    });
  };

  if (isLoading) return <h3>Any moment now...</h3>;
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
        <Votes article_id={article_id} votes={article.votes} />
      </article>
      <button onClick={toggleComments}>
        Comments: {article.comment_count}
      </button>
      {displayComments ? (
        <Comments article_id={article_id} user={user} />
      ) : null}
    </main>
  );
};

export default FullArticle;
