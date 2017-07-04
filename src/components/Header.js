import React from 'react';
import InterestEventLineChartForAll
  from '../containers/InterestEventLineChartForAll';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#bbeeee',
    border: '6px solid #eeffff',
    'border-radius': '10px',
    margin: '30px 0',
    padding: '30px 24px 20px 24px'
  }
});

const Header = () => {
  return (
    <header className={css(styles.Header)}>
      <InterestEventLineChartForAll numDays={92} />
    </header>
  );
};

export default Header;
