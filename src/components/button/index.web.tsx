import React from 'react';
import type { ButtonPropsInterface } from './props.interface';

export function Button({ children, ...restProps }: ButtonPropsInterface) {
  return (
    <button style={{ backgroundColor: 'blue', color: 'white' }} {...restProps}>
      {children}
    </button>
  );
}
