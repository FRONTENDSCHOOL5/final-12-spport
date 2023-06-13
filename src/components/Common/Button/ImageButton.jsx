import React from 'react';
import styled from 'styled-components';
import iconimage from '../../../assets/image/icon-image.svg';
import iconimagesmall from '../../../assets/image/icon-image-small.svg';

const ImageButtonStyle = styled.button`
  background: url(${iconimagesmall}) no-repeat;
  background-color: var(--color-maingrey);
  background-position: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

function ImageButton(props) {
  return <ImageButtonStyle onClick={props.func}></ImageButtonStyle>;
}

const UploadButtonStyle = styled.button`
  background: url(${iconimage}) no-repeat;
  background-color: var(--color-navy);
  background-position: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

function UploadButton(props) {
  return <UploadButtonStyle onClick={props.func}></UploadButtonStyle>;
}

export { ImageButton, UploadButton };
