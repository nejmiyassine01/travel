import React from 'react';
import CarouselLanding from './components/CarouselLanding/CarouselLanding.component';
import Navbar from './components/Navbar/Navbar.component';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <CarouselLanding />
    </div>
  );
};

export default App;
