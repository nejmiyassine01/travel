import React, { useState } from 'react';
import * as Ai from 'react-icons/ai';
import { Nav, NavLink, NavLinkLogo, NavMenu } from './Navbar.style';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <Nav>
        <NavLinkLogo to='/'>
          <h2>Travel</h2>
        </NavLinkLogo>
        <NavMenu className={!clicked ? 'active' : null}>
          <NavLink to='/about' activeStyle>
            About US
          </NavLink>
          <NavLink to='/offers' activeStyle>
            Offers
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/booking' activeStyle>
            Booking
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        {clicked ? (
          <Ai.AiOutlineMenu onClick={handleClick} />
        ) : (
          <Ai.AiOutlineClose onClick={handleClick} />
        )}
      </Nav>
    </div>
  );
};

export default Navbar;
