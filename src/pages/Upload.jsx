import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Common/Header/Header';
import styled from 'styled-components';
import { ProfileImage42 } from '../components/Common/ProfileImage';
import {
  ImageButton,
  UploadButton,
} from '../components/Common/Button/ImageButton';
import { POST_API } from '../api/CommonAPI';
import { useNavigate } from 'react-router-dom';
import { userToken, userimage } from '../atom/loginAtom';
import { useRecoilState } from 'recoil';
import { isModalOpen, modalItems } from '../atom/modalAtom';
import iconClose from '../assets/image/icon-close.svg';

const USection = styled.section`
  padding: 70px 20px;
  position: relative;

  .form-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
  }

  form {
    position: relative;
    width: calc(100% - 52px);
  }

  textarea {
    width: 100%;
    padding: 10px;
    border: none;
    resize: none;
    outline-color: var(--color-navy);
  }

  .upload-images-wrapper {
    margin-left: 60px;
    display: flex;
    gap: 20px;
    padding: 20px;
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
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .upload-image {
    border: 1px solid var(--color-bg);
    border-radius: 20px;
  }
`;

const StyledUploadButton = styled(UploadButton)`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export default function Upload(props) {
  const [token, setToken] = useRecoilState(userToken);
  const [userImage, setUserImage] = useRecoilState(userimage);
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
  const [isReady, setIsReady] = useState(false);

  const [isModal, setIsModal] = useRecoilState(isModalOpen);
  const [modalItem, setModalItem] = useRecoilState(modalItems);

  const navigate = useNavigate();

  useEffect(() => {
    if (text === '' && images.length === 0) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [text, images]);

  //게시글 내용
  // textarea가 바뀌면 내용을 가져와서 setText()로 text에 넣어줌
  // 문제 : 자음모음 하나하나 바뀔 때 마다 동작함
  const postContent = (e) => {
    setText(e.target.value);
  };
  // postContent 끝

  // 이미지를 삭제하는 함수
  // setImage()로 image를 null
  // 문제 : 이미지가 이미 이미지서버에 올라가있음
  // 문제 : image가 null이라 엑박뜸
  const imageDelete = () => {
    setImage(null);
  };
  // imageDelete 끝

  // 이미지를 삭제하는 함수
  // setImage()로 image를 null
  const imageDelete2 = (e) => {
    setImage(null);
    const deleteImage = document.querySelector('');
  };
  // imageDelete2 끝

  const imageDelete3 = (e) => {
    // 누른 버튼의 아이디값(키와 동일)을 가져옴
    const deleteImage = e.currentTarget.getAttribute('id');

    // 선택한 키값의 이미지가 없는 새로운 배열 만들기
    const modify = images.filter((image) => image !== deleteImage);
    console.log(modify);

    // setImages로 새로운 이미지 넣기
    setImages(modify);
    // setImage([]);
  };
  // imageDelete3 끝

  const imageDeleteAll = (e) => {
    console.log('이미지 전체 삭제');
    // console.log(e.getAttribute('id'));
    console.log(e);
    // alert(e.target);
    // setImages([]);
  };

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
    const data = await POST_API(token, url, bodyData);
    console.log(data);

    navigate('/home');
  };
  // handleSubmit 끝

  // 게시글 내용을 서버에 업로드 하는 함수 2
  // 이미지 여러개일 때
  const handleSubmit2 = async () => {
    setIsModal(true);
    const uploadPost = async () => {
      const bodyData = {
        'post': {
          'content': text,
          'image': imageUrl,
        },
      };
      const data = await POST_API(token, url, bodyData);
      console.log(data);

      navigate(`/post/${data.post.id}`);
    };
    setModalItem(['게시물을 업로드하시겠습니까?', '업로드', uploadPost]);
  };
  // handleSubmit2 끝

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

  // 이미지 여러개를 한번에 선택해서 올림 (업로드 버튼 클릭 한번)
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
    console.log(formData);

    //요청
    const res = await fetch(
      'https://api.mandarin.weniv.co.kr/image/uploadfiles',
      {
        method: 'POST',
        body: formData,
      },
    );

    // //데이터를 json으로 받아오기
    const json = await res.json();
    console.log(json);

    const fileUrl = json.map((img) => {
      return 'https://api.mandarin.weniv.co.kr/' + img.filename;
    });
    console.log(fileUrl);

    // console.log(fileUrl);
    setImages(fileUrl);
  };
  // imageUpload2 끝

  // 이미지 여러개를 하나씩 선택해서 올림 (업로드 버튼 클릭 여러번)
  const imageUpload3 = async (e) => {
    //input이 변경되면 변경된 요소를 가져온다
    const imageFile = e.target.files[0];

    // 사진 갯수 제한
    if (images.length > 2) {
      alert('사진은 3장까지만 가능합니다');
      return;
    }
    if (imageFile.length > 2) {
      alert('사진은 3장까지만 가능합니다');
      return;
    }
    console.log(imageFile);

    //폼데이터를 만들고 내 데이터를 추가
    const formData = new FormData();
    // for (let i = 0; i < imageFile.length; i++) {
    //   formData.append('image', imageFile[i]);
    // }
    formData.append('image', imageFile);
    console.log(formData);

    //요청
    const res = await fetch(
      'https://api.mandarin.weniv.co.kr/image/uploadfiles',
      {
        method: 'POST',
        body: formData,
      },
    );

    // //데이터를 json으로 받아오기
    const json = await res.json();
    console.log(json);

    const fileUrl = json.map((img) => {
      return 'https://api.mandarin.weniv.co.kr/' + img.filename;
    });

    setImages([...images, ...fileUrl]);
    // console.log(fileUrl);

    console.log(images);
    // console.log(fileUrl);
    // setImages(fileUrl);
  };
  // imageUpload3 끝

  // 이미지 전송을 위해 이미지 주소 이어 붙이기
  const iurl = images.join(',');

  // iurl이 바뀔때만 setImageUrl로 imageUrl 변경
  useEffect(() => {
    setImageUrl(iurl);
  }, [iurl]);

  // console.log(images);
  // console.log(imageUrl);

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
      <Header upload onUploadClick={handleSubmit2} disabled={isReady} />
      <USection>
        <section className='form-wrapper'>
          <ProfileImage42 image={userImage} />
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
            <StyledUploadButton func={imageUpload3} />
          </form>
        </section>
        <section className='upload-images-wrapper'>
          {/* image가 null이면 렌더링 되지 않게 */}
          {/* 이미지 하나일때 */}
          {image && (
            <article className='image-wrapper' key={image}>
              <button className='delete-button' onClick={imageDelete3}>
                삭제버튼
              </button>
              <img className='upload-image' width={'100%'} src={image} />
            </article>
          )}
          {/* 이미지 여러개일때 */}
          {images &&
            images.map((image) => {
              return (
                <article className='image-wrapper' key={image}>
                  {/* 버튼에 키와 같은 아이디를 넣어서 버튼 선택 시 이미지를 선택할 수 있도록 하는데 맘에 안듬 ??????? */}
                  <button
                    className='delete-button'
                    id={image}
                    onClick={imageDelete3}
                  >
                    <img src={iconClose} alt='이미지 삭제' />
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
