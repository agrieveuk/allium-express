import { useComments } from '../hooks/useApi';

const Comments = ({ article_id }) => {
  const { comments, isLoading } = useComments(article_id);

  if (isLoading) return <h3>Any moment now...</h3>;
  return (
    <section>
      <ul>
        {comments.map(({ comment_id, votes, created_at, author, body }) => {
          return (
            <li key={comment_id}>
              <p>{author}</p>
              <p>{`${created_at.substr(12, 7)} 
                  ${created_at.substr(0, 10)}`}</p>
              <p>{body}</p>
              <p>{votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
