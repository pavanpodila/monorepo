import React, { Suspense } from 'react';

const LazyFeature = React.lazy(async () => {
  const { Feature } = await import('@co/feature-a');

  return { default: () => <Feature message={'Hello World'} /> };
});

export function FeatureAComponent() {
  return (
    <Suspense fallback={'Loading Feature A'}>
      <LazyFeature />
    </Suspense>
  );
}
