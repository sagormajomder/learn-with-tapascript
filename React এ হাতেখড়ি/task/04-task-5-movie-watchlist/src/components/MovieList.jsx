import MovieItem from './MovieItem';

function MovieList({ movieList, onDeleteMovie, onWatchedMovie, onRateMovie }) {
  return (
    <>
      {movieList.length === 0 ? (
        <p className='text-center'>No movies in your watchList. Add some 😊 </p>
      ) : (
        <ul className='flex flex-col gap-2'>
          {movieList.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onDeleteMovie={onDeleteMovie}
              onWatchedMovie={onWatchedMovie}
              onRateMovie={onRateMovie}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieList;
