import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.svg';

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
)

export default Header;