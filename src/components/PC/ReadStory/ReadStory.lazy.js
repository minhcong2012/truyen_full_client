import React, { lazy, Suspense } from 'react';

const LazyReadStory = lazy(() => import('./ReadStory'));

const ReadStory = props => (
  <Suspense fallback={null}>
    <LazyReadStory {...props} />
  </Suspense>
);

export default ReadStory;
