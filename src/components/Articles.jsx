import { Link, Redirect, useParams } from 'react-router-dom';
import { useArticles } from '../hooks/useApi';
import PageButton from './PageButton';
import SortOption from './SortOption';

const Articles = () => {
  const { topic, username } = useParams();
  const {
    articleList,
    isLoading,
    setSortBy,
    sortBy,
    page,
    setPage,
    totalArticles,
    error
  } = useArticles({ topic, author: username });

  if (error) return <Redirect to='/404' />;
  if (isLoading) return <h3>Any moment now...</h3>;
  return (
    <main>
      <SortOption sortBy={sortBy} setSortBy={setSortBy} />
      <PageButton page={page} setPage={setPage} totalArticles={totalArticles} />
      <ul className='article-list'>
        {articleList.map(
          ({ article_id, title, votes, comment_count, created_at }) => {
            return (
              <li key={article_id} className='article-list-item'>
                <Link to={`/articles/${article_id}`}>
                  <h4>{title}</h4>
                  <img
                    className='article-list-item-img'
                    src='https://picsum.photos/400/300'
                    alt='placeholder article visual'
                  />
                  <div className='article-list-item-info'>
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
      <footer>
        <PageButton
          page={page}
          setPage={setPage}
          totalArticles={totalArticles}
        />
      </footer>
    </main>
  );
};

export default Articles;
