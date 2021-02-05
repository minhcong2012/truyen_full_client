import React, { lazy, Suspense } from 'react';

const LazyModalLogin = lazy(() => import('./ModalLogin'));

const ModalLogin = props => (
  <Suspense fallback={null}>
    <LazyModalLogin {...props} />
  </Suspense>
);

export default ModalLogin;
