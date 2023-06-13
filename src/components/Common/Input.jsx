import React from 'react';
import styled from 'styled-components';

const LabelStyle = styled.label`
  font-size: 12px;
  color: var(--color-darkgrey);
  margin-bottom: 8px;
  display: inline-block;
`;

export const InputStyle = styled.input`
  width: 322px;
  font-size: 14px;
  border-bottom: 1px solid var(--color-lightgrey);
  padding: 8px 0;
  outline: none;
  color: var(--color-navy);
  margin-bottom: 17px;
  display: flex;

  &::placeholder {
    color: var(--color-lightgrey);
  }

  &:focus {
    border-color: 1px solid var(--color-navy);
  }

  &.warning {
    border-bottom: 1px solid var(--color-red);
  }

  &.hidden {
    display: none;
  }
`;

export default function Input({ title, type, inputId, placeholder }) {
  return (
    <>
      <LabelStyle htmlFor={inputId}>{title}</LabelStyle>
      <InputStyle type={type} id={inputId} placeholder={placeholder} required />
    </>
  );
}
