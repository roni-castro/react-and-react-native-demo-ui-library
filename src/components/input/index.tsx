import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

type NativeInputProps = TextInputProps;

export function Input(props: NativeInputProps) {
  return <TextInput {...props} />;
}
