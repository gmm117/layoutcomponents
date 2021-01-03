import React from 'react';
import cx from 'classnames';
import styles from './Horizontal.module.scss';

function Horizontal() {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.grid}>
        <div className={cx(styles.griditem, styles.a)}>a</div>
        <div className={cx(styles.griditem, styles.b)}>b</div>
        <div className={cx(styles.griditem, styles.c)}>c</div>
        ypgab
      </div> */}
      {/* <div className={styles.gridfloat}>
        <div className={cx(styles.griditemfloat, styles.a)}>a</div>
        <div className={cx(styles.griditemfloat, styles.b)}>b</div>
        <div className={cx(styles.griditemfloat, styles.c)}>c</div>
      </div>
      <div className={cx(styles.contents)}>123</div> */}
      <div className={styles.gridcomp}>
        <div className={cx(styles.griditemcomp, styles.a)}>a</div>
        <div className={cx(styles.griditemcomp, styles.b)}>b</div>
        <div className={cx(styles.griditemcomp, styles.c)}>c</div>
      </div>
    </div>
  );
}

export default Horizontal;
