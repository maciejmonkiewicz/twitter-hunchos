/*

  _                      _               
 | |                    | |              
 | |__  _   _ _ __   ___| |__   ___  ___ 
 | '_ \| | | | '_ \ / __| '_ \ / _ \/ __|
 | | | | |_| | | | | (__| | | | (_) \__ \
 |_| |_|\__,_|_| |_|\___|_| |_|\___/|___/
                                         
                                         
 */
import React from 'react';

type PreferencesContextType = {
  theme: 'light' | 'dark';
  rtl: 'left' | 'right';
  toggleTheme: () => void;
  toggleRTL: () => void;
};

export const PreferencesContext = React.createContext<PreferencesContextType>({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
});
