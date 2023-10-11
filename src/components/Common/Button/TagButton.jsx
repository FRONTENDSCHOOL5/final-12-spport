import React from 'react';
import styled from 'styled-components';
import { NavyButtonStyle } from './Button';

const TagButtonStyle = styled.button`
  ${NavyButtonStyle}
  border-radius: 5px;
  padding: 3px 7px;
`;

export default function TagButton(props) {
  return <TagButtonStyle onClick={props.func}>{props.text}</TagButtonStyle>;
}
