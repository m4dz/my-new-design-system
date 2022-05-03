import React from 'react';
import { Button } from '../index';

export const btnDefault = () => (
  <>
    <Button onPress={() => alert('Button pressed!')}>Press Me!</Button>
  </>
);

export const btnPrimary = () => (
  <>
    <Button variant="primary">Primary Button</Button>
    <Button variant="primary" disabled>
      Primary Button Disabled
    </Button>
  </>
);

export const btnSecondary = () => (
  <>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="secondary" disabled>
      Secondary Button Disabled
    </Button>
  </>
);
