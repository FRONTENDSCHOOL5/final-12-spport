import styled from 'styled-components';
import IconImageLayer from '../../assets/image/icon-img-layers.svg';

// UserProfile, MyProfile styled components

// 피드 게시글 없을 때 스타일
const NoPostStyle = styled.section`
  position: relative;
  background: white;
  height: 390px;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    img {
      vertical-align: top;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 20px;
      font-weight: bolder;
    }
    button {
      margin-top: 20px;
    }
  }
`;

// 직관 일정 스타일
const LikedGameStyle = styled.section`
  position: relative;
  background: white;
  border-top: 0.5px solid var(--color-maingrey);
  border-bottom: 0.5px solid var(--color-maingrey);
  height: 205px;
  h2 {
    padding: 20px 20px 0;
    a {
      margin-left: 240px;
      font-size: 12px;
      color: var(--color-steelblue);
    }
  }
  ul {
    overflow-x: scroll;
  }

  /* 직관일정 없을 때 */
  & > div {
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    p {
      font-size: 17px;
      font-weight: bold;
    }
    img {
      vertical-align: top;
      margin-bottom: 10px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--color-bg);
`;

// 피드 스타일
const SectionFeed = styled.section`
  background-color: #fff;
`;

// 앨범형 피드
const AlbumFeed = styled.ul`
  display: flex;
  gap: 8px;
  padding: 16px;
  flex-wrap: wrap;
  li {
    display: inline-block;
    width: 114px;
    height: 114px;
    border: 0.5px solid #c4c4c4;
    button {
      position: relative;
      .albumThumbnail {
        display: block;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
      }
      div {
        position: absolute;
        top: 3px;
        right: 3px;
        width: 20px;
        height: 20px;
        background-image: url(${IconImageLayer});
      }
    }
  }
`;

export { NoPostStyle, LikedGameStyle, Container, SectionFeed, AlbumFeed };
