import React from 'react';
import styled from 'styled-components';
import {
  NavyButtonStyle,
  DisabledButtonStyle,
  LimeButtonStyle,
} from './Button';

const LButtonStyle = styled.button`
  ${NavyButtonStyle}
  border-radius: 50px;
  width: 80%;
  padding: 13px 0;
  &:disabled {
    ${DisabledButtonStyle}
    cursor: default;
  }
  &:not(:disabled):hover {
    ${LimeButtonStyle}
  }
`;

export default function LButton(props) {
  return (
    <LButtonStyle onClick={props.func} disabled={props.disabled}>
      {props.text}
    </LButtonStyle>
  );
}
