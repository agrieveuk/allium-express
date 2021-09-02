import { useState } from 'react';
import { postComment } from '../utils/app';

const NewComment = ({ article_id, setComments, user: { username } }) => {
  const [newComment, setNewComment] = useState('');

  const writeComment = ({ target }) => {
    setNewComment(target.value);
  };

  const submitComment = async (event) => {
    event.preventDefault();
    postComment(article_id, username, newComment).then((comment) => {
      setNewComment('');
      setComments((currComments) => {
        return [comment, ...currComments];
      });
    });
  };

  return (
    <div>
      <form onSubmit={submitComment}>
        <label htmlFor='new-comment'>{`
          Throw your opinion into the ring! ${username}:`}</label>
        <textarea
          id='new-comment'
          value={newComment}
          onChange={writeComment}
        ></textarea>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

export default NewComment;
