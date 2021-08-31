import { useEffect, useState } from 'react';
import { getArticles } from '../utils/app';
import { Link, useParams } from 'react-router-dom';

const Articles = () => {
  const { topic } = useParams();
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticles(topic).then((data) => {
      setArticleList(data);
    });
  }, [topic]);

  return (
    <main>
      <ul className='article-list'>
        {articleList.map(
          ({ article_id, title, votes, comment_count, created_at }) => {
            return (
              <li key={article_id} className='article-list-item'>
                <Link to={`/articles/${article_id}`}>
                  <h4>{title}</h4>
                  <img
                    src='https://picsum.photos/400/300'
                    alt='placeholder article image'
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
