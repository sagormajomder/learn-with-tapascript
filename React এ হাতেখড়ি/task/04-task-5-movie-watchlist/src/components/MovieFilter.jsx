import Button from './Button';

function MovieFilter({ onFilteredMovie }) {
  return (
    <div className='flex justify-center gap-2'>
      <Button
        type='button'
        style='bg-[#748ffc]'
        onClick={() => onFilteredMovie('all')}>
        ALL
      </Button>
      <Button
        type='button'
        style='bg-[#51cf66]'
        onClick={() => onFilteredMovie('watched')}>
        Watched
      </Button>
      <Button
        type='button'
        style='bg-[#ffc078]'
        onClick={() => onFilteredMovie('unwatch')}>
        Unwatched
      </Button>
    </div>
  );
}

export default MovieFilter;
