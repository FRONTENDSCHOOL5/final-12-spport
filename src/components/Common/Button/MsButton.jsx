import React from 'react';
import styled from 'styled-components';
import {
  NavyButtonStyle,
  DisabledButtonStyle,
  LimeButtonStyle,
} from './Button';

const MsButtonStyle = styled.button`
  ${LimeButtonStyle}
  border-radius: 50px;
  width: 20%;
  padding: 7px 0;
  &:disabled {
    ${DisabledButtonStyle}
    cursor: default;
  }
`;

export default function MsButton(props) {
  return (
    <MsButtonStyle onClick={props.func} disabled={props.disabled}>
      {props.text}
    </MsButtonStyle>
  );
}
