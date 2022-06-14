import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import type { ButtonPropsInterface } from './props.interface';

type NativeButtonProps = ButtonPropsInterface & TouchableOpacityProps;

export function Button({ onClick, text, ...otherProps }: NativeButtonProps) {
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'orange', padding: 12 }}
      onPress={onClick}
      {...otherProps}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
