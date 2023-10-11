import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';
import { PostLoaderItem } from './PostLoader';
import FeedHeader from '../Profile/FeedHeader';

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media screen and (min-width: 768px) and (max-width: 1247px) {
    margin-left: 60px;
  }
  background: var(--color-bg);
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
`;

const LikedGameStyle = styled.section`
  background: white;
  border-top: 0.5px solid var(--color-maingrey);
  border-bottom: 0.5px solid var(--color-maingrey);
  height: 205px;
  overflow: hidden;
  h2 {
    padding: 20px 20px 0;
  }
  .game-wrapper {
    padding: 20px;
    display: flex;
    gap: 10px;
  }
  .game-item {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`;

const PostStyle = styled.section`
  background: white;
  & > div:nth-child(2) {
    padding: 20px 0;
  }
`;

export default function UserProfileLoader() {
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
          <button type='button'>
            <strong>
              <Skeleton />
            </strong>
            <p>followings</p>
          </button>
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
      <LikedGameStyle className='section-game'>
        <h2>직관 일정</h2>
        <div className='game-wrapper'>
          <div className='game-item'>
            <Skeleton width={140} height={90} style={{ borderRadius: '8px' }} />
            <Skeleton width={100} height={18} />
            <Skeleton width={120} height={16} />
          </div>
          <div className='game-item'>
            <Skeleton width={140} height={90} style={{ borderRadius: '8px' }} />
            <Skeleton width={100} height={18} />
            <Skeleton width={120} height={16} />
          </div>
          <div className='game-item'>
            <Skeleton width={140} height={90} style={{ borderRadius: '8px' }} />
            <Skeleton width={100} height={18} />
            <Skeleton width={120} height={16} />
          </div>
        </div>
      </LikedGameStyle>
      <PostStyle>
        <FeedHeader />
        <PostLoaderItem />
      </PostStyle>
    </ContainerStyle>
  );
}
