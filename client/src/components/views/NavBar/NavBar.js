import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './NavBar.module.scss';

import clsx from 'clsx';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <p>Mariana Rivas Maal ArtShop@</p>
      </div>
      <div>
        <NavLink to="/"><img alt="logo" src="/images/home/logo.png" /></NavLink>
      </div>
      <div className={styles.navLinks}>
        <ul className={clsx(isNavExpanded && styles.isExpanded)}>
          <li><NavLink to="/category/Home" className={({ isActive }) => isActive? styles.active : styles.inActive}>Home</NavLink></li>
          <li><NavLink to="/category/Ceramique" className={({ isActive }) => isActive? styles.active : styles.inActive}>Ceramique</NavLink></li>
          <li><NavLink to="/category/Art" className={({ isActive }) => isActive? styles.active : styles.inActive}>Art</NavLink></li>
          <li><NavLink to="/category/Paints" className={({ isActive }) => isActive? styles.active : styles.inActive}>Paint</NavLink></li>
          <li><NavLink to="/category/Books" className={({ isActive }) => isActive? styles.active : styles.inActive}>Books</NavLink></li>
          <li><NavLink to="/category/About" className={({ isActive }) => isActive ? styles.active : styles.inActive}>About</NavLink></li>
          <li><NavLink to="category/Contact" className={({ isActive }) => isActive? styles.active : styles.inActive}>Contact</NavLink></li>
        </ul>
        <Link to="/cart"><button className={styles.button}><FontAwesomeIcon icon={faCartShopping} /></button></Link>
        <button className={styles.button}><FontAwesomeIcon icon={faUser} /></button>
        <button className={clsx(styles.button, styles.hamburger)} onClick={() => setIsNavExpanded(!isNavExpanded)}><FontAwesomeIcon icon={faBars} /></button>
      </div>
    </div>
  );
};

export default Navbar;