import React from 'react';
import styled from 'styled-components';
import iconimage from '../../../assets/image/icon-image.svg';
import iconimagesmall from '../../../assets/image/icon-image-small.svg';

// ImageButton
// props.func=실행할 함수
// 36px maingrey
const ImageButtonStyle = styled.section`
  .btn-image-img {
    width: 36px;
    height: 36px;

    background-color: var(--color-maingrey);
    border-radius: 50%;
    position: relative;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }

  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

// props.func input이 바뀌면 실행할 함수
function ImageButton(props) {
  return (
    <ImageButtonStyle {...props}>
      <label htmlFor='btn-image'>
        <div className='btn-image-img'>
          <img src={iconimagesmall} alt='이미지 업로드 하기' />
        </div>
      </label>
      <input
        type='file'
        id='btn-image'
        accept='image/*'
        multiple
        onChange={props.func}
      />
    </ImageButtonStyle>
  );
}

// UploadButton
// props.func=실행할 함수
// 50px navy
const UploadButtonStyle = styled.section`
  .btn-upload-img {
    width: 50px;
    height: 50px;

    background-color: var(--color-navy);
    border-radius: 50%;
    position: relative;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }

  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

function UploadButton(props) {
  return (
    <UploadButtonStyle {...props}>
      <label htmlFor='btn-upload'>
        <div className='btn-upload-img'>
          <img src={iconimage} alt='이미지 업로드 하기' />
        </div>
      </label>
      <input
        type='file'
        id='btn-upload'
        accept='image/*'
        multiple
        onChange={props.func}
      />
    </UploadButtonStyle>
  );
}

export { ImageButton, UploadButton };
