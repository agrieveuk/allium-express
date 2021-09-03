import { useState } from 'react';
import { useVotes } from '../hooks/useApi';
import {
  SentimentVeryDissatisfiedTwoTone,
  FavoriteBorder,
  Favorite,
} from '@material-ui/icons';

const Votes = ({ article_id, comment_id, votes }) => {
  const [hasErrored, setHasErrored] = useState(false);
  const [isLiked, isDisliked, flipLikeStatus, flipDislikeStatus] = useVotes({
    article_id,
    comment_id,
    setHasErrored,
  });

  return (
    <div>
      <button className='vote-button' onClick={flipLikeStatus}>
        {isLiked ? <Favorite color='secondary' /> : <FavoriteBorder />}
      </button>
      <p>{isLiked ? votes + 1 : isDisliked ? votes - 1 : votes}</p>
      <button className='vote-button' onClick={flipDislikeStatus}>
        {isDisliked ? (
          <SentimentVeryDissatisfiedTwoTone color='primary' />
        ) : (
          <SentimentVeryDissatisfiedTwoTone />
        )}
      </button>
      <br />
      {hasErrored && <p>Something went wrong :(</p>}
    </div>
  );
};

export default Votes;
