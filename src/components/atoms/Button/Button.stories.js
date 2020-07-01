import React from 'react';
import Button from './Button';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

export default { title: 'Button' };
export const button = () => {
  return <Button>Shuffle play</Button>;
};
// Knobs as dynamic variables.
