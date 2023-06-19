import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  const { type, inputId, title } = props;
  return (
    <>
      <LabelStyle htmlFor={inputId} {...props}>
        {title}
      </LabelStyle>
      <InputStyle type={type ? type : 'text'} id={inputId} {...props} />
    </>
  );
}

const LabelStyle = styled.label`
  font-size: 12px;
  color: var(--color-darkgrey);
  margin-bottom: 8px;
  display: inline-block;
`;

export const InputStyle = styled.input`
  width: 322px;
  padding: 7px 0;
  font-size: 14px;
  border-bottom: ${(props) =>
    props.onError
      ? '1px solid var(--color-red)'
      : '1px solid var(--color-lightgrey)'};
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

  &.hidden {
    display: none;
  }
`;
