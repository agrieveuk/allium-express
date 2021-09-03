import { useComments } from '../hooks/useApi';
import NewComment from './NewComment';
import Votes from './Votes';

const Comments = ({ article_id, user }) => {
  const { comments, isLoading, setComments } = useComments(article_id);

  if (isLoading) return <h3>Any moment now...</h3>;
  return (
    <section>
      <NewComment
        article_id={article_id}
        user={user}
        setComments={setComments}
      />
      <ul>
        {comments.map(({ comment_id, votes, created_at, author, body }) => {
          return (
            <li key={comment_id}>
              <p>{author}</p>
              <p>{`${created_at.substr(12, 7)} 
                  ${created_at.substr(0, 10)}`}</p>
              <p>{body}</p>
              <Votes comment_id={comment_id} votes={votes} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
