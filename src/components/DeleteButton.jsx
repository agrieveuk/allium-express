import { useState } from 'react';
import { deleteComment } from '../utils/api';
import { Delete } from '@material-ui/icons';

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
        <Delete aria-label='delete' />
      </button>
      {hasErrored && <p>Something went wrong :(</p>}
    </>
  );
};

export default DeleteButton;
