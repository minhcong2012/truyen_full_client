import React, { lazy, Suspense } from 'react';

const LazyRightSideBar = lazy(() => import('./RightSideBar'));

const RightSideBar = props => (
  <Suspense fallback={null}>
    <LazyRightSideBar {...props} />
  </Suspense>
);

export default RightSideBar;
