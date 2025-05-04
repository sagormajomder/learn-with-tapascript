import PropTypes from "prop-types";

const CarDetails = ({title,brand,year,price,isPremium}) => {
    return (
        <div>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
            <ul>
                <li><span className="font-semibold" >Brand:</span> {brand}</li>
                <li><span className="font-semibold">Year:</span> {year}</li>
                <li><span className="font-semibold">Price:</span> ${price}</li>
                <li><span className="font-semibold">Premium:</span> {isPremium ? "Yes" : "No"}</li>

            </ul>

        </div>
    );
};

export default CarDetails;

CarDetails.propTypes = {
    title: PropTypes.string,
    brand: PropTypes.string,
    year: PropTypes.number,
    price: PropTypes.number,
    isPremium: PropTypes.bool,
}