import React from 'react';
import styled from 'styled-components';
import { NavyButtonStyle, LimeButtonStyle, ActiveButtonStyle } from './Button';

const SButtonStyle = styled.button`
  ${NavyButtonStyle}
  border-radius: 50px;
  min-width: 56px;
  width: 15%;
  padding: 7px 0;
  /* font-size: 12px; */
  ${(props) => !props.active} {
    ${ActiveButtonStyle}
  }
  &:not(:disabled):hover {
    ${LimeButtonStyle}
  }
`;

export default function SButton(props) {
  return (
    <SButtonStyle
      onClick={props.func}
      disabled={props.disabled}
      active={props.active}
    >
      {props.text}
    </SButtonStyle>
  );
}
