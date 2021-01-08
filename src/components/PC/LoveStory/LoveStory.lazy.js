import React, { lazy, Suspense } from 'react';

const LazyLoveStory = lazy(() => import('./LoveStory'));

const LoveStory = props => (
  <Suspense fallback={null}>
    <LazyLoveStory {...props} />
  </Suspense>
);

export default LoveStory;
