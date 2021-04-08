import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeUpdate = () => {
  return useContext(ThemeContextUpdate);
};

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    setDark((prevDark) => !prevDark);
  }
  return (
    <ThemeContext.Provider value={dark}>
      <ThemeContextUpdate.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
}
