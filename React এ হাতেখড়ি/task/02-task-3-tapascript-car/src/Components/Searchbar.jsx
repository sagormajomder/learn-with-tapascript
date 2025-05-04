import PropTypes from 'prop-types';
import Search from './Search.jsx';

const Searchbar = ({
  searchQuery,
  showPremium,
  onCarSearch,
  onShowPremium,
}) => {
  return (
    <div className='flex justify-start items-center mb-4 gap-4'>
      <Search searchQuery={searchQuery} onCarSearch={onCarSearch} />
      <form action=''>
        <label htmlFor='premium'>
          <input
            id='premium'
            type='checkbox'
            checked={showPremium}
            onChange={() => onShowPremium(prev => !prev)}
          />
          Show Premium Only
        </label>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onCarSearch: PropTypes.func.isRequired,
  showPremium: PropTypes.bool.isRequired,
  onShowPremium: PropTypes.func.isRequired,
};

export default Searchbar;
