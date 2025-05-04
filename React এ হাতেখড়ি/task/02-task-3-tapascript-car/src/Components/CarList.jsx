import PropTypes from 'prop-types';
import Car from './Car.jsx';

const CarList = ({ cars, searchQuery }) => {
  const modifiedCarList = [];

  cars.forEach(car => {
    if (car.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
      return;
    }
    modifiedCarList.push(<Car car={car} key={car.id} />);
  });

  return (
    <ul
      className='grid grid-cols-3
        gap-4'>
      {modifiedCarList}
    </ul>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default CarList;
