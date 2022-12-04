import React from 'react';
import HeaderCarousel from '../UI/home/HeaderCarousel';
import Categories from '../UI/home/Categories';
import BestSeller from '../UI/home/BestSeller';
import NewArivals from '../UI/home/NewArivals';

function Home() {
  return (
    <div>
      <HeaderCarousel />
      <Categories />
      <BestSeller />
      <NewArivals />
    </div>
  )
}

export default Home