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
    <div className='votes-container'>
      <button className='vote-button' onClick={flipLikeStatus}>
        {isLiked ? (
          <Favorite color='secondary' aria-label='liked' />
        ) : (
          <FavoriteBorder aria-label='like' />
        )}
      </button>
      <p>{isLiked ? votes + 1 : isDisliked ? votes - 1 : votes}</p>
      <button className='vote-button' onClick={flipDislikeStatus}>
        {isDisliked ? (
          <SentimentVeryDissatisfiedTwoTone
            aria-label='disliked'
            color='primary'
          />
        ) : (
          <SentimentVeryDissatisfiedTwoTone aria-label='dislike' />
        )}
      </button>
      <br />
      {hasErrored && <p>Something went wrong :(</p>}
    </div>
  );
};

export default Votes;
