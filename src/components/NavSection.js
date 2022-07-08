import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import './NavSection.css';

export default function NavSection() {
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  const skipToLinks = () => {
    setShowMobileMenu((prevState) => (prevState ? !prevState : prevState));
  };

  return (
    <nav className={ShowMobileMenu ? 'navopen' : 'navclose'}>
      <div className={ShowMobileMenu ? 'nav-wrap-open' : 'nav-wrap-close'}>
        <div className={ShowMobileMenu ? 'logo-open' : 'logo-close'}>
          <h1 className="logo">
            Bookstore CMS
          </h1>
        </div>
        <button
          className={ShowMobileMenu ? 'navbtn-open' : 'navbtn-close'}
          type="button"
          onClick={handleMenu}
        >
          {ShowMobileMenu ? <GrClose /> : <FiMenu />}
        </button>
        <ul className={ShowMobileMenu ? 'ul-open' : 'ul-close'}>
          <li className={ShowMobileMenu ? 'title-open' : 'title-close'}>
            <h1>Bookstore CMS Menu</h1>
          </li>

          <li>
            <NavLink onClick={skipToLinks} className={({ isActive }) => (isActive ? 'active' : '')} to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink onClick={skipToLinks} to="/Categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
