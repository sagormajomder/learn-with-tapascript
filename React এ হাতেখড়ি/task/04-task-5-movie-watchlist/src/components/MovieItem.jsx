import ReactStars from 'react-stars';

import Button from './Button';

function MovieItem({ movie, onDeleteMovie, onWatchedMovie, onRateMovie }) {
  const { id, movieName, ott, rating, isWatched } = movie;
  function ratingChanged(newRating) {
    onRateMovie(id, newRating);
  }
  return (
    <li className='flex gap-2 justify-center items-center'>
      <p
        className={`basis-1/3 ${
          isWatched ? 'line-through text-gray-400' : ''
        }`}>
        {movieName} on {ott} {rating && `⭐ ${rating}/5`}
      </p>

      <ReactStars
        count={5}
        size={24}
        value={movie?.rating}
        color2={'#ffd700'}
        onChange={ratingChanged}
      />

      <Button
        type='button'
        style='bg-[#51cf66]'
        onClick={() => onWatchedMovie(id)}>
        {isWatched ? 'Unwatch' : 'Watched'}
      </Button>
      <Button
        type='button'
        style='bg-[#ff6b6b]'
        onClick={() => onDeleteMovie(id)}>
        Remove
      </Button>
    </li>
  );
}

export default MovieItem;
