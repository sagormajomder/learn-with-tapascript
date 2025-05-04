import PropTypes from 'prop-types';
import CarDetails from './CarDetails.jsx';

const Car = ({ car }) => {
  return (
    <li className=' border p-4 rounded-lg'>
      <CarDetails
        title={car.title}
        brand={car.brand}
        year={car.year}
        price={car.price}
        isPremium={car.isPremium}
      />
    </li>
  );
};

export default Car;

Car.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};
