import React from 'react';
import { Button } from './button';

const onPress = () => {
  console.log('Hello world');
};

export const BasicButton = () => (
  <Button
    text="hello from Button"
    onPress={onPress}
    styles={{
      padding: 16,
    }}
  />
);
