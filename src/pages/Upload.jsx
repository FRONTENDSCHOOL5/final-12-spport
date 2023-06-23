import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { ProfileImage36 } from '../components/Common/ProfileImage';
import { ImageButton } from '../components/Common/Button/ImageButton';
import { POST_API } from '../api/CommonAPI';
import { useNavigate } from 'react-router-dom';

const USection = styled.section`
  padding: 70px 20px;

  .form-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
  }

  form {
    position: relative;
    width: 100%;
  }

  textarea {
    width: 100%;
    padding: 10px;
    border: none;
    resize: none;
    outline-color: var(--color-navy);
  }

  .upload-images-wrapper {
    margin-top: 10px;
    display: flex;
    gap: 40px;
    padding-left: 60px;
    overflow: scroll;
  }

  .image-wrapper {
    position: relative;
  }
  .upload-image {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
  }

  .delete-button {
    width: 50px;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  img {
    border: 1px solid black;
    border-radius: 20px;
  }
`;

const StyledProfileImage36 = styled(ProfileImage36)`
  flex-shrink: 0;
`;

const StyledImageButton = styled(ImageButton)`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export default function Upload() {
  // 테스트 토큰
  // 나중에 props로 받아오도록 바꾸기
  const test_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkyNWZmYjJjYjIwNTY2MzMzY2Y4MyIsImV4cCI6MTY5MTg5NDU0MCwiaWF0IjoxNjg2NzEwNTQwfQ.CMVKaojlNSWLjmtbZ_AY6shkkStQgp1DHP3z87oIPe8';

  // 요청에 사용하는 url
  const url = '/post';

  //useState들
  // 업로드할 게시물 텍스트
  const [text, setText] = useState('');
  // 업로드할 게시물 이미지 한개
  const [image, setImage] = useState(null);
  //업로드할 게시물 이미지 여러개
  const [images, setImages] = useState([]);
  //업로드할 게시물 이미지 서버주소
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate();

  //게시글 내용
  // textarea가 바뀌면 내용을 가져와서 setText()로 text에 넣어줌
  // 문제 : 자음모음 하나하나 바뀔 때 마다 동작함
  const postContent = (e) => {
    // console.log('내용 바뀜');
    // console.log(e.target.value);
    setText(e.target.value);
  };
  // postContent 끝

  // 이미지를 삭제하는 함수
  // setImage()로 image를 null
  // 문제 : 이미지가 이미 이미지서버에 올라가있음
  // 문제 : image가 null이라 엑박뜸
  const imageDelete = () => {
    console.log('이미지 삭제');
    setImage(null);
  };
  // imageDelete 끝

  // 이미지를 삭제하는 함수
  // setImage()로 image를 null
  const imageDelete2 = (e) => {
    console.log('이미지 삭제');
    console.log(e);
    console.log(e.target);
    setImage(null);
    const deleteImage = document.querySelector('');
  };
  // imageDelete 끝

  // 게시글 내용을 서버에 업로드 하는 함수 1
  // 이미지 하나일 때
  // 원범님 코드 그대로 가져옴
  const handleSubmit = async () => {
    console.log('업로드');
    const bodyData = {
      'post': {
        'content': text,
        'image': image,
      },
    };
    const data = await POST_API(test_token, url, bodyData);
    console.log(data);
  };
  // handleSubmit 끝

  // 이미지를 서버에 업로드 하는 함수 1
  // 이미지 하나일 때
  const imageUpload = async (e) => {
    //input이 변경되면 변경된 요소를 가져온다
    const imageFile = e.target.files[0];

    //폼데이터를 만들고 내 데이터를 추가
    const formData = new FormData();
    formData.append('image', imageFile);

    //요청
    const res = await fetch(
      'https://api.mandarin.weniv.co.kr/image/uploadfile',
      {
        method: 'POST',
        body: formData,
      },
    );

    //데이터를 json으로 받아오기
    const json = await res.json();

    // useState를 사용하기 위해 받아온 데이터를 setImage에 넣어서 image 변경
    setImage('https://api.mandarin.weniv.co.kr/' + json.filename);

    // 주소 틀리면 CORB 오류
  };
  // imageUpload 끝

  //콘솔에서 이미지 확인
  console.log(image);

  // 게시글 내용을 서버에 업로드 하는 함수 2
  // 이미지 여러개일 때
  const handleSubmit2 = async () => {
    const bodyData = {
      'post': {
        'content': text,
        'image': imageUrl,
      },
    };
    const data = await POST_API(test_token, url, bodyData);
    console.log(data);

    navigate('/home');
  };
  // handleSubmit2 끝

  const imageUpload2 = async (e) => {
    //input이 변경되면 변경된 요소를 가져온다
    const imageFile = e.target.files;

    // 사진 갯수 제한
    if (imageFile.length > 3) {
      alert('사진은 3장까지만 가능합니다');
      return;
    }
    console.log(imageFile);

    //폼데이터를 만들고 내 데이터를 추가
    const formData = new FormData();
    for (let i = 0; i < imageFile.length; i++) {
      formData.append('image', imageFile[i]);
    }

    //요청
    const res = await fetch(
      'https://api.mandarin.weniv.co.kr/image/uploadfiles',
      {
        method: 'POST',
        body: formData,
      },
    );

    //데이터를 json으로 받아오기
    const json = await res.json();
    console.log(json);

    const fileUrl = json.map((img) => {
      return 'https://api.mandarin.weniv.co.kr/' + img.filename;
    });

    console.log(fileUrl);
    setImages(fileUrl);
  };
  // imageUpload2 끝

  // 이미지 전송을 위해 이미지 주소 이어 붙이기
  const iurl = images.join(',');
  console.log(iurl);

  // iurl이 바뀔때만 setImageUrl로 imageUrl 변경
  useEffect(() => {
    setImageUrl(iurl);
  }, [iurl]);

  console.log(images);
  console.log(imageUrl);

  // textarea의 길이를 들어오는 게시글에 따라서 조정되게 하는 함수
  const autoResizeTextarea = () => {
    let textarea = document.querySelector('.text-area');

    if (textarea) {
      textarea.style.height = 'auto';
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 8}px`;
    }
  };
  // autoResizeTextarea 끝

  //////////
  //렌더링
  return (
    <>
      <Header upload onUploadClick={handleSubmit} />
      <USection>
        <section className='form-wrapper'>
          {/* <ProfileImage36 /> */}
          <StyledProfileImage36 />
          <form>
            <textarea
              className='text-area'
              placeholder='게시글 입력하기...'
              // rows={1}
              onKeyDown={autoResizeTextarea}
              onKeyUp={autoResizeTextarea}
              onChange={postContent}
            ></textarea>
            {/* 버튼을 누르면 포스트가 올라가고 끝인데 새로고침을 해야하는지 다른 페이지로 이동해야 하는지 */}
            <StyledImageButton func={imageUpload} />
          </form>
        </section>
        <section className='upload-images-wrapper'>
          {/* image가 null이면 렌더링 되지 않게 */}
          {images &&
            images.map((image) => {
              return (
                <article className='image-wrapper' key={image}>
                  <button className='delete-button' onClick={imageDelete}>
                    삭제버튼
                  </button>
                  <img className='upload-image' width={'100%'} src={image} />
                </article>
              );
            })}
        </section>
      </USection>
    </>
  );
}
