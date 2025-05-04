import CarDetails from "./CarDetails.jsx";
import PropTypes from "prop-types";

const Car = ({car}) => {
    return (

        <CarDetails title={car.title} brand={car.brand} year={car.year} price={car.price} isPremium={car.isPremium} />

    );
};

export default Car;

Car.propTypes = {
    car: PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            isPremium: PropTypes.bool.isRequired
        }
    ).isRequired
}