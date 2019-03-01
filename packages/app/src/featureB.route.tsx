import React, { Suspense } from 'react';
import { delay } from '@co/shared';

const LazyFeature = React.lazy(async () => {
  const { Feature } = await import('@co/feature-b');

  await delay(1000);

  return { default: () => <Feature /> };
});

export function FeatureBComponent() {
  return (
    <Suspense fallback={'Loading Feature B'}>
      <LazyFeature />
    </Suspense>
  );
}
