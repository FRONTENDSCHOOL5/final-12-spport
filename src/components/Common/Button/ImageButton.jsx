import React from 'react';
import styled from 'styled-components';
import iconimage from '../../../assets/image/icon-image.svg';
import iconimagesmall from '../../../assets/image/icon-image-small.svg';
import btnStart from '../../../assets/image/icon-image.svg';

const ImageButtonStyle = styled.section`
  .btnStart {
    width: 45px;
    height: 45px;

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

// props.func input이 바뀌면 실행할 함수
function ImageButton(props) {
  return (
    <ImageButtonStyle {...props}>
      <label htmlFor='image-btn'>
        <div className='btnStart'>
          <img src={btnStart} alt='이미지 업로드 하기' />
        </div>
      </label>
      <input
        type='file'
        id='image-btn'
        accept='image/*'
        multiple
        onChange={props.func}
      />
    </ImageButtonStyle>
  );
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
