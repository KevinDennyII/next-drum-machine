import React from 'react';

import Header from '../components/Header';

import './styles.css';
import SoundEnabledProvider from "../components/SoundEnabledProvider";

function RootLayout({ children }) {
  return (
    <html lang="en">
    <SoundEnabledProvider>
      <body>
        <Header />
        {children}
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </SoundEnabledProvider>
    </html>
  );
}

export default RootLayout;
