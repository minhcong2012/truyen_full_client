import React, { lazy, Suspense } from 'react';

const LazyDetailStory = lazy(() => import('./DetailStory'));

const DetailStory = props => (
  <Suspense fallback={null}>
    <LazyDetailStory {...props} />
  </Suspense>
);

export default DetailStory;
