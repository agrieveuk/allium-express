import moment from 'moment';
import { Link } from 'react-router-dom';
import { useComments } from '../hooks/useApi';
import DeleteButton from './DeleteButton';
import NewComment from './NewComment';
import PageButton from './PageButton';
import Votes from './Votes';

const Comments = ({ article_id, user, comment_count }) => {
  const { comments, isLoading, setComments, setPage, page } =
    useComments(article_id);

  if (isLoading) return <h3>Any moment now...</h3>;
  return (
    <section className='comment-section'>
      <NewComment
        article_id={article_id}
        user={user}
        setComments={setComments}
      />
      <ul className='comment-section-list'>
        {comments.map(({ comment_id, votes, created_at, author, body }) => {
          return (
            <li className='comment' key={comment_id}>
              <div className='comment-body'>
                <Link to={`/users/${author}`}>
                  <p>{author}</p>
                </Link>
                <p
                  className='comment-date'
                  title={moment(created_at).format('LT, ddd D MMM YYYY')}
                >{`${moment(created_at).fromNow()}`}</p>
                <p>{body}</p>
              </div>
              <Votes comment_id={comment_id} votes={votes} />
              {author === user.username && (
                <DeleteButton
                  comment_id={comment_id}
                  setComments={setComments}
                />
              )}
            </li>
          );
        })}
      </ul>
      <PageButton page={page} setPage={setPage} totalComments={comment_count} />
    </section>
  );
};

export default Comments;
