import React from 'react';
import { Button } from '@bmdev/scope.ui.button';
import { Input } from '@bmdev/scope.ui.input';

export type FormProps = {
  text: string;
};

export function Form({ text }: FormProps) {
  return (
    <form>
      <h1>{text}</h1>
      <Input placeholder="Enter username" /> <br />
      <br />
      <Input placeholder="Password" type="password" /> <br />
      <br />
      <Button
        text="Login"
        onPress={() => {
          alert('Logged in');
        }}
      />
    </form>
  );
}
