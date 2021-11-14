import React from 'react';

export type InputProps = {
  type?: string;
  placeholder?: string;
};

export function Input({ placeholder, type = 'text' }: InputProps) {
  return <input type={type} placeholder={placeholder} />;
}
