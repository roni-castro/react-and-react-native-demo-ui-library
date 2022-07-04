import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import type { ButtonPropsInterface } from './props.interface';

type NativeButtonProps = ButtonPropsInterface & TouchableOpacityProps;

export function Button({
  onClick,
  children,
  ...otherProps
}: NativeButtonProps) {
  const content =
    typeof children === 'string' ? <Text>{children}</Text> : children;

  return (
    <TouchableOpacity
      style={{ backgroundColor: 'orange', padding: 12 }}
      onPress={onClick}
      {...otherProps}
    >
      {content}
    </TouchableOpacity>
  );
}
