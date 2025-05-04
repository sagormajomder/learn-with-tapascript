import CarList from './CarList.jsx';
import Header from './Header.jsx';
import Searchbar from './Searchbar.jsx';

const TapascriptCars = () => {
  return (
    <div className='mx-auto py-4 px-8'>
      <Header />
      <Searchbar />
      <CarList />
    </div>
  );
};

export default TapascriptCars;
