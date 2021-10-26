import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 20000;
  background: rgba(15, 12, 41, 0.7);

  svg {
    display: none;
    color: #fff;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
      display: block;
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

export const NavLinkLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #ffefba;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
    padding: 20px;
    width: 50vw;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    left: -100%;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      left: 0;
      opacity: 1;
      background: rgba(15, 12, 41, 1);
    }
  }
`;
