import PropTypes from 'prop-types';
const Search = ({ searchQuery, onCarSearch }) => {
  return (
    <form action=''>
      <input
        className='border rounded-sm basis-1/4 py-1 px-2'
        value={searchQuery}
        type='text'
        placeholder='Search cars...'
        onChange={e => onCarSearch(e.target.value)}
      />
    </form>
  );
};

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onCarSearch: PropTypes.func.isRequired,
};

export default Search;
