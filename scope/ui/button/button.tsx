import React from 'react';

export type ButtonProps = {
  onPress: () => any;
  styles?: any;
  text: string;
};

export function Button({ text, styles, onPress }: ButtonProps) {
  return (
    <button
      onClick={() => {
        onPress && onPress();
      }}
      style={{
        background: 'red',
        border: 'none',
        borderRadius: 5,
        padding: 16,
        cursor: 'pointer',
        ...styles,
      }}
    >
      {text}
    </button>
  );
}
