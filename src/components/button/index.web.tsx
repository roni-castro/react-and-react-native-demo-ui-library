import React from 'react';
import type { ButtonPropsInterface } from './props.interface';

export function Button(props: ButtonPropsInterface) {
  return (
    <button
      style={{ backgroundColor: 'blue', color: 'white' }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
