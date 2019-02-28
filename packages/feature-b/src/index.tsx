import React from 'react';
import { add } from '@co/shared';

export function Feature() {
  return (
    <div>This is Feature B using a shared package. Result is {add(1, 2)}</div>
  );
}
