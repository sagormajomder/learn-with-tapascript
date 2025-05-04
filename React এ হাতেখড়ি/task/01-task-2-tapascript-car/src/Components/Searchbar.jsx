import Search from './Search.jsx';

const Searchbar = () => {
  return (
    <div className='flex justify-start items-center mb-4 gap-4'>
      <Search />
      <label htmlFor='premium'>
        <input id='premium' type='checkbox' /> Show Premium Only
      </label>
    </div>
  );
};

export default Searchbar;
