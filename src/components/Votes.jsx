import { useState } from 'react';
import { useVotes } from '../hooks/useApi';

const Votes = ({ article_id, comment_id, votes }) => {
  const [hasErrored, setHasErrored] = useState(false);
  const [isLiked, flipLikeStatus] = useVotes({
    article_id,
    comment_id,
    setHasErrored,
  });

  return (
    <div>
      <button className='vote-button' onClick={flipLikeStatus}>
        {isLiked ? <p aria-label='liked'>🫀</p> : <p aria-label='unliked'>🤍</p>}
      </button>
      <p>{isLiked ? votes + 1 : votes}</p>
      <br />
      {hasErrored && <p>Something went wrong :(</p>}
    </div>
  );
};

export default Votes;
