import React, { useState } from 'react';
import mainIcon from './main.png';
import style from './header.module.scss';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#cc0000' : '#4a1457',
  };

  return (
    <div
      className={`${style.header} ${theme === 'dark' ? style.darkTheme : ''}`}
      style={headerStyle}
    >
      <img
        src={mainIcon}
        alt="site icon"
        style={{ marginLeft: '10px', width: '50px', height: '50px' }}
      />
      <h1 style={{ marginLeft: '10px' }}>ZXCmusic</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;