import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Outlet, NavLink } from "react-router-dom";
const Layout = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderActive, setHeaderActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(prev => !prev);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
        <div className="container">
          <NavLink to="/" className="logo">
            <img src="../img/logo.png" width={62} height={50} alt="EduWeb logo" />
          </NavLink>
          <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
            <div className="wrapper">
              <NavLink to="/" className="logo">
                <img src="./img/logo.png" width={162} height={50} alt="EduWeb logo" />
              </NavLink>
              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
                onClick={closeNavbar}
              >
                <ion-icon name="close-outline" aria-hidden="true" />
              </button>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>Scholarship Test</a>
              </li>
              <li className="navbar-item">
                <NavLink to="/about" className="navbar-link" data-nav-link>UPSC-CSE/IAS</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/course" className="navbar-link" data-nav-link>Courses</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/blog" className="navbar-link" data-nav-link>Blog</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/signin" className="navbar-link" data-nav-link>Login/Registration</NavLink>
                
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="header-action-btn" aria-label="cart" title="Cart">
              <ion-icon name="cart-outline" aria-hidden="true" />
              <span className="btn-badge">0</span>
            </button>
            <a href="#" className="btn has-before">
              <span className="span">
              Live Classes
              </span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true" />
            </a>
            <button
              className="header-action-btn"
              aria-label="open menu"
              data-nav-toggler
              onClick={toggleNavbar}
            >
              <ion-icon name="menu-outline" aria-hidden="true" />
            </button>
          </div>
          <div
            className={`overlay ${isNavbarActive ? 'active' : ''}`}
            data-nav-toggler
            data-overlay
          />
        </div>
      </header>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;
