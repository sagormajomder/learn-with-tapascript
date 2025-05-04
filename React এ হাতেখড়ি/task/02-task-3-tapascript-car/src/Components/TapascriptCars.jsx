import { useState } from 'react';
import CarList from './CarList.jsx';
import Header from './Header.jsx';
import Searchbar from './Searchbar.jsx';

const CARS = [
  {
    id: 1,
    title: 'Luxury Sedan',
    brand: 'Mercedes',
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: 'Family SUV',
    brand: 'Toyota',
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: 'Sports Car',
    brand: 'Porsche',
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: 'Electric Hatchback',
    brand: 'Nissan',
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: 'Luxury SUV',
    brand: 'BMW',
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

const TapascriptCars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPremium, setShowPremium] = useState(false);

  const carList = [];

  CARS.forEach(car => {
    if (showPremium && !car.isPremium) {
      return;
    }
    carList.push(car);
  });

  return (
    <div className='mx-auto py-4 px-8'>
      <Header />
      <Searchbar
        searchQuery={searchQuery}
        showPremium={showPremium}
        onCarSearch={setSearchQuery}
        onShowPremium={setShowPremium}
      />
      <CarList cars={carList} searchQuery={searchQuery} />
    </div>
  );
};

export default TapascriptCars;
