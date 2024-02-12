
import React from 'react';
import { useTheme } from './ThemeContext';
import './Styles.css'

//using context
const ThemeSwitcher = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <button className="theme-button" onClick={switchTheme}>
        Switch Theme ({theme})
      </button>
      <h1 className="heading">Theme Switcher</h1>
    </div>
  );
};

export default ThemeSwitcher;
