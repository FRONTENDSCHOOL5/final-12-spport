import React from 'react';
import styled, { css } from 'styled-components';

export default function Input(props) {
  const { type, inputId, title, border, getError, paddingBtm } = props;
  return (
    <>
      <LabelStyle htmlFor={inputId} {...props}>
        {title}
      </LabelStyle>
      <InputStyle
        type={type ? type : 'text'}
        id={inputId}
        border={border}
        getError={getError}
        paddingBtm={paddingBtm}
        {...props}
      />
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
  word-wrap: break-word;
  padding: 7px 0;
  font-size: 14px;
  ${(props) =>
    props.border
      ? css`
          border: ${props.border};
        `
      : css`
          border-bottom: ${(props) =>
            props.getError
              ? '1px solid var(--color-red)'
              : '1px solid var(--color-lightgrey)'};
        `}
  outline: none;
  color: var(--color-navy);
  margin-bottom: 17px;
  display: flex;

  ${(props) =>
    props.paddingBtm &&
    css`
      padding-bottom: ${props.paddingBtm};
    `}

  &::placeholder {
    color: var(--color-lightgrey);
  }

  &:focus {
    border-color: 1px solid var(--color-navy);
  }

  &:not(:focus) {
    border-color: var(--color-lightgrey);
  }

  &.hidden {
    display: none;
  }
`;
