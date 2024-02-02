import React from 'react';
import mainIcon from './main.png';
import style from './header.module.scss';
import { IconButton } from "@mui/material";
import { DarkModeIcon, LightModeIcon } from '@mui/icons-material/DarkMode';
import { light } from '@mui/material/styles/createPalette';

const Header = () => {

  return (
    <div className={style.header}>
      <img src={mainIcon} alt="site icon" style={{ marginLeft: '10px', width: '50px', height: '50px' }} />
      <h1 style={{ marginLeft: '10px', color: 'white' }}>ZXCmusic</h1>
    </div>
  );
};

export default Header;