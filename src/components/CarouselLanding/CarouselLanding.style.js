import styled from 'styled-components';

export const CarouselLandingItems = styled.div`
  position: relative;

  .rec.rec-slider-container {
    margin: 0;
  }

  .rec.rec-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 10px;
    color: #fff;
  }

  .rec.rec-arrow:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec.rec-arrow.rec-arrow-left {
    left: 0;
  }

  .rec.rec-arrow.rec-arrow-right {
    right: 0;
  }

  .rec.rec-pagination {
    position: absolute;
    bottom: 20px;
  }

  .rec.rec-dot {
    background-color: rgba(255, 255, 255, 0.9);
    height: 15px;
    width: 15px;
  }

  .rec.rec-dot_active,
  .rec.rec-dot:hover {
    box-shadow: 0 0 1px 3px rgb(255 255 200);
  }
`;

export const CarouselItems = styled.div`
  position: relative;
  height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(15, 12, 41, 0.5),
      rgba(48, 43, 99, 0.5),
      rgba(36, 36, 62, 0.5)
    );
  }

  img {
    position: relative;
    object-fit: cover;
    z-index: -1;
  }
`;

export const CarouselItemContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 400px;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2,
  a {
    text-transform: uppercase;
    color: #fff;
  }

  h2 {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    padding-bottom: 30px;
    letter-spacing: 5px;
  }

  a {
    font-weight: 500;
    position: relative;
    text-decoration: none;
    border: 2px solid #fff;
    padding: 10px 15px;
    font-size: 16px;
    transition: color linear 0.3s;

    &:hover {
      color: #000;

      &::before {
        transform: scaleX(1);
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      transition: transform 0.5s;
      transform-origin: 0 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: scaleX(0);
      z-index: -1;
    }
  }
`;
