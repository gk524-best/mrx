import React from 'react';

const ThemeSettingsContext = React.createContext(null);

if (process.env.NODE_ENV !== 'production') {
  ThemeSettingsContext.displayName = 'ThemeSettingsContext';
}

export default ThemeSettingsContext;