import React from 'react';

import styles from './index.module.scss';

import Home from './home';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Home></Home>
    </div>
  );
}

export default Index;
