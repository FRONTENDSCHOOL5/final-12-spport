import React from 'react';
import styled from 'styled-components';
import {
  NavyButtonStyle,
  DisabledButtonStyle,
  LimeButtonStyle,
  ActiveButtonStyle,
} from './Button';

const MButtonStyle = styled.button`
  ${NavyButtonStyle}
  border-radius: 50px;
  min-width: 120px;
  width: 30%;
  padding: 8px 0;
  &:disabled {
    ${DisabledButtonStyle}
    cursor: default;
  }
  &:not(:disabled):hover {
    ${LimeButtonStyle}
  }
  ${(props) => !props.active} {
    ${ActiveButtonStyle}
  }
`;

export default function MButton(props) {
  return (
    <MButtonStyle
      onClick={props.func}
      disabled={props.disabled}
      active={props.active}
    >
      {props.text}
    </MButtonStyle>
  );
}
