import React from 'react';
import styles from './App.less';

console.log(styles);

function App() {
  return (
    <div className={styles.container}>
      App
      <div className={styles.test}>Test</div>
    </div>
  );
}

export default App;
