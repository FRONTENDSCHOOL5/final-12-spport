import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';
import GameLoader from './GameLoader';

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--color-bg);
  @media screen and (min-width: 768px) and (max-width: 1247px) {
    margin-left: 60px;
  }
`;
const CommonStyle = styled.section`
  display: grid;
  width: 100%;
  height: 300.5px;
  grid-template-areas:
    'followers profileImage followings'
    'description description description'
    'follow follow follow';
  place-items: center;
  background-color: #fff;
  grid-template-columns: 1fr 200px 1fr;
  border-bottom: 0.5px solid var(--color-maingrey);
  .followers {
    grid-area: followers;
    justify-self: end;
  }
  .imgProfile {
    grid-area: profileImage;
    padding: 30px 0px 16px;
  }
  .followings {
    grid-area: followings;
    justify-self: start;
    width: 43px;
    height: 43px;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
    button {
      width: 100%;
      height: 100%;
    }
  }
  .followers,
  .followings {
    strong {
      font-size: 18px;
    }
    p {
      font-size: 10px;
      margin-top: 6px;
      color: #586c9d;
    }
  }

  .description {
    grid-area: description;
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    align-items: center;
    .tag-container {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
      justify-content: center;
      width: 200px;
    }
  }
  .follow {
    grid-area: follow;
    display: flex;
    align-items: center;
    margin: 26px 0;
    button {
      margin: 0 6px;
    }
    button img {
      vertical-align: top;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1247px) {
    width: calc(100% - 60px);
  }
`;

const SectionGameStyle = styled.section`
  background: white;
  padding-bottom: 50px;
  h2 {
    border-bottom: 0.5px solid var(--color-maingrey);
    padding: 12px 20px;
  }
  & > div {
    padding: 20px 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1247px) {
    width: calc(100% - 60px);
  }
`;

const BtnPlayer = styled.button`
  background-color: #fff;
  padding: 12px 0;
  border-top: 1px solid var(--color-maingrey);
  border-bottom: 1px solid var(--color-maingrey);
  &:not(:disabled):hover {
    background-color: var(--color-lime);
    color: var(--color-navy);
  }
  @media screen and (min-width: 768px) and (max-width: 1247px) {
    width: calc(100% - 60px);
  }
`;

export default function TeamProfileLoader() {
  return (
    <ContainerStyle>
      <CommonStyle>
        <div className='followers'>
          <strong>
            <Skeleton />
          </strong>
          <p>followers</p>
        </div>
        <div className='imgProfile'>
          <Skeleton width={110} height={110} circle />
        </div>
        <div className='followings'>
          <Skeleton width={43} height={43} circle />
        </div>
        <div className='description'>
          <Skeleton width={100} height={15} />
          <Skeleton width={100} height={12} />
          <div className='tag-container'>
            <Skeleton width={37} height={22} />
            <Skeleton width={37} height={22} />
            <Skeleton width={37} height={22} />
          </div>
        </div>
        <div className='follow'>
          <Skeleton width={200} height={32} />
        </div>
      </CommonStyle>
      <BtnPlayer>선수보러가기</BtnPlayer>
      <SectionGameStyle className='section-game'>
        <h2>경기 일정</h2>
        <GameLoader />
      </SectionGameStyle>
    </ContainerStyle>
  );
}
