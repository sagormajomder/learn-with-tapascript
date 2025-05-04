import { useState } from 'react';
import Button from './Button';

function MovieAdd({ onAddMovie }) {
  const [movieData, setMovieData] = useState({
    movieName: '',
    ott: '',
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setMovieData(preMovieData => ({ ...preMovieData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!movieData?.movieName.trim() || !movieData?.ott.trim()) return;
    onAddMovie(movieData);

    setMovieData({
      movieName: '',
      ott: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 justify-center'>
      <input
        type='text'
        name='movieName'
        value={movieData?.movieName}
        onChange={handleOnChange}
        id=''
        className='outline-0 p-2 border rounded-sm basis-1/2'
        placeholder='Enter movie name...'
      />
      <select
        name='ott'
        id=''
        value={movieData?.ott}
        onChange={handleOnChange}
        className='border rounded-sm'>
        <option value=''>Select an OTT</option>
        <option value='Netflix'>Netflix</option>
        <option value='Hotstar'>Hotstar</option>
        <option value='Amazon Prime'>Amazon Prime</option>
      </select>
      <Button type='submit' style='bg-[#ffc078]'>
        Add
      </Button>
    </form>
  );
}

export default MovieAdd;
