import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext.js';

export default function Context() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? 'black' : 'grey',
    color: darkTheme ? 'grey' : 'white',
  };
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1 style={themeStyles}>shira meirovitz</h1>
    </div>
  );
}
