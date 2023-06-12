import React from 'react';
import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 322px;
  border-bottom: 1px solid var(--color-lightgrey);
  padding: 8px 0;
  outline: none;
  color: var(--color-navy);
  margin-bottom: 17px;
  display: flex;

  &::placeholder {
    font-size: 14px;
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
      <label htmlFor={inputId}>{title}</label>
      <InputStyle type={type} id={inputId} placeholder={placeholder} required />
    </>
  );
}
