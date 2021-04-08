import React from 'react';
import Context from './contextTheme/Context.js';
import { ThemeProvider } from './contextTheme/ThemeContext.js';

export default function Profile() {
  return (
    <ThemeProvider>
      <Context />
    </ThemeProvider>
  );
}
