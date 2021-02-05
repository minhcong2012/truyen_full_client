import React, { lazy, Suspense } from 'react';

const LazyNavBarHead = lazy(() => import('./NavBarHead'));

const NavBar = props => (
  <Suspense fallback={null}>
    <LazyNavBarHead {...props} />
  </Suspense>
);

export default NavBar;
