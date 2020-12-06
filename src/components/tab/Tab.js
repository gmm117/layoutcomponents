import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Link, Route, Switch } from 'react-router-dom';
import styles from './Tab.module.scss';

const TabItem = ({ children }) => {
  return <li className={cx(styles.tabitem)}>{children}</li>;
};

TabItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const Tab = () => {
  return (
    <div className={cx(styles.tabinfo)}>
      <ul className={cx(styles.tab)}>
        <TabItem>
          <Link to="/tab1">tab1</Link>
        </TabItem>
        <TabItem>
          <Link to="/tab2">tab2</Link>
        </TabItem>
        <TabItem>
          <Link to="/tab3">tab3</Link>
        </TabItem>
        <TabItem>
          <Link to="/tab4">tab4</Link>
        </TabItem>
      </ul>
      <div className={cx(styles.content)}>
        <Switch>
          <Route exact path="/tab1" component={() => <div>tab1 page</div>} />
          <Route path="/tab2" component={() => <div>tab2 page</div>} />
          <Route path="/tab3" component={() => <div>tab3 page</div>} />
          <Route path="/tab4" component={() => <div>tab4 page</div>} />
        </Switch>
      </div>
      <div className={cx(styles.footer)}>footer</div>
    </div>
  );
};

export default Tab;
