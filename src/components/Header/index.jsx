import React from 'react';

import logo from '../../assets/header/cryptopunk-logo.png';
import searchIcon from '../../assets/header/search.png';
import themeSwitchIcon from '../../assets/header/theme-switch.png';
import './index.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Collection, item or user ..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="themeSwitchIcon" />
        </div>
      </div>

      <button className="loginButton">GET IN</button>
    </div>
  );
};

export default Header;
