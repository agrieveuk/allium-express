import { useState } from 'react';
import { deleteComment } from '../utils/app';

const DeleteButton = ({ comment_id, setComments }) => {
  const [hasErrored, setHasErrored] = useState(false);

  const handleDelete = (comment_id) => {
    deleteComment(comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
      })
      .catch(() => setHasErrored(true));
  };

  return (
    <>
      <button
        className='delete-button'
        onClick={() => handleDelete(comment_id)}
      >
        Bin It
      </button>
      {hasErrored && <p>Something went wrong :(</p>}
    </>
  );
};

export default DeleteButton;
