import { useState } from 'react';
import Header from './Header';
import MovieAdd from './MovieAdd';
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';

// const InitialList = [
//   {
//     id: crypto.randomUUID(),
//     movieName: 'DDLG',
//     ott: 'Netflix',
//     rating: null,
//     isWatched: true,
//   },
//   {
//     id: crypto.randomUUID(),
//     movieName: 'Ajnabi',
//     ott: 'Amazon Prime',
//     rating: 2.5,
//     isWatched: false,
//   },
// ];

function MovieWatchlist() {
  const [movieList, setMovieList] = useState(
    JSON.parse(localStorage.getItem('movieList')) || []
  );
  const [filterBy, setFilterBy] = useState('all');
  let filteredMovieList = [];

  function handleLocalStorage(movieList) {
    localStorage.setItem('movieList', JSON.stringify(movieList));

    return movieList;
  }

  function handleAddMovie({ movieName, ott }) {
    const newMovie = {
      id: crypto.randomUUID(),
      movieName,
      ott,
      rating: null,
      isWatched: false,
    };

    setMovieList(currMovieList => {
      const newMovieList = [...currMovieList, newMovie];
      return handleLocalStorage(newMovieList);
    });
  }

  function handleFiteredMovie(filter) {
    setFilterBy(filter);
  }

  function handleWatchedMovie(id) {
    setMovieList(currMovieList => {
      const newMovieList = currMovieList.map(movie =>
        movie.id === id ? { ...movie, isWatched: !movie.isWatched } : movie
      );

      return handleLocalStorage(newMovieList);
    });
  }

  function handleDeleteMovie(id) {
    setMovieList(currMovieList => {
      const newMovieList = currMovieList.filter(m => m.id !== id);
      return handleLocalStorage(newMovieList);
    });
  }

  function handleRateMovie(id, newRating) {
    setMovieList(currMovieList => {
      const newMovieList = currMovieList.map(movie =>
        movie.id === id ? { ...movie, rating: newRating } : movie
      );

      return handleLocalStorage(newMovieList);
    });
  }

  if (filterBy === 'all') {
    filteredMovieList = movieList;
  } else if (filterBy === 'watched') {
    filteredMovieList = movieList.filter(movie => movie.isWatched);
  } else if (filterBy === 'unwatch') {
    filteredMovieList = movieList.filter(movie => !movie.isWatched);
  }

  return (
    <>
      <Header />
      <main className='flex flex-col gap-4 px-6 md:max-w-2/3 pb-3 pt-0 mx-auto'>
        <MovieAdd onAddMovie={handleAddMovie} />
        <MovieFilter onFilteredMovie={handleFiteredMovie} />
        <p className='text-center'>
          Active Filter:&nbsp; <strong> {filterBy.toUpperCase()}</strong>
        </p>
        <MovieList
          movieList={filteredMovieList}
          onDeleteMovie={handleDeleteMovie}
          onWatchedMovie={handleWatchedMovie}
          onRateMovie={handleRateMovie}
        />
      </main>
    </>
  );
}

export default MovieWatchlist;
