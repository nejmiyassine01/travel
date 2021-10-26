import React from 'react';
import Carousel from 'react-elastic-carousel';

import { carouselItems } from '../../data/data';

import {
  CarouselItems,
  CarouselLandingItems,
  CarouselItemContainer,
} from './CarouselLanding.style';

const CarouselLanding = () => {
  return (
    <CarouselLandingItems>
      <Carousel itemsToShow={1}>
        {carouselItems.map((item) => (
          <CarouselItems key={item.id}>
            <img src={item.image} alt={`item-${item.id}`} />
            <CarouselItemContainer>
              <h2>{item.title}</h2>
              <a href='/'>{item.btn}</a>
            </CarouselItemContainer>
          </CarouselItems>
        ))}
      </Carousel>
    </CarouselLandingItems>
  );
};

export default CarouselLanding;
