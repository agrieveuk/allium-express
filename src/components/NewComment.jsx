import { useState } from 'react';
import { postComment } from '../utils/api';

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
    <div className='new-comment-form-container'>
      <form onSubmit={submitComment}>
        <label htmlFor='new-comment'>
          Throw your opinion into the ring! <br />
          <br />
          <span>{username}:</span>
        </label>
        <textarea
          id='new-comment'
          required
          value={newComment}
          onChange={writeComment}
        ></textarea>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

export default NewComment;
