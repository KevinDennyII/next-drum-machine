'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import {useSoundEnabled} from '../SoundEnabledProvider';
import styles from './Header.module.css';

function Header() {
  const id = React.useId();
  // TODO: Global state?
  const { isSoundEnabled, setIsSoundEnabled } = useSoundEnabled();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            // TODO: flip `soundEnabled`
            setIsSoundEnabled(!isSoundEnabled);
          }}
        >
          {isSoundEnabled ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {isSoundEnabled
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
