import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import './config/firebase';
import RootNavigation from './navigation';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
