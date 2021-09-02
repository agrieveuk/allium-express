import { Link, useParams } from 'react-router-dom';
import { useArticles } from '../hooks/useApi';
import SortOption from './SortOption';

const Articles = () => {
  const { topic } = useParams();
  const { articleList, isLoading, setSortBy, sortBy } = useArticles(topic);

  if (isLoading) return <h3>Any moment now...</h3>;
  return (
    <main>
      <SortOption sortBy={sortBy} setSortBy={setSortBy} />
      <ul className='article-list'>
        {articleList.map(
          ({ article_id, title, votes, comment_count, created_at }) => {
            return (
              <li key={article_id} className='article-list-item'>
                <Link to={`/articles/${article_id}`}>
                  <h5>{title}</h5>
                  <img
                    className='article-list-item-img'
                    src='https://picsum.photos/400/300'
                    alt='placeholder article visual'
                  />
                  <div className='article-info'>
                    <p>votes: {votes}</p>
                    <p>{`${created_at.substr(12, 7)} 
                  ${created_at.substr(0, 10)}`}</p>
                    <p>comments: {comment_count}</p>
                  </div>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
};

export default Articles;
