import React from 'react';
import mainIcon from './main.png';
import style from './header.module.scss';

const Header = () => {
  return (
    <div style={{ width: '100%', height: '70px', backgroundColor: '#cc0000', display: 'flex', alignItems: 'center' }}>
      <img src={mainIcon} alt="site icon" style={{ marginLeft: '10px', width: '50px', height: '50px' }} />
      <h1 style={{ marginLeft: '10px', color: 'white' }}>ZXCmusic</h1>
    </div>
  );
};

export default Header;