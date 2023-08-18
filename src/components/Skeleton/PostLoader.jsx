import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  padding: 20px 0;
`;

const DetailContainerStyle = styled.div`
  padding: 70px 0;
`;

const CommentContainerStyle = styled.div`
  border-top: 0.5px solid var(--color-maingrey);
  .profile-wrapper {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

const CommentItemStyle = styled.div`
  margin: 20px 16px;
  @media screen and (min-width: 768px) {
    margin-left: 76px;
  }
  @media screen and (min-width: 1247px) {
    margin-left: 216px;
  }
`;

const CommentInputStyle = styled.div`
  padding: 12px 16px;
  height: 60.5px;
  position: fixed;
  width: 390px;
  bottom: 0;
  border-top: 0.5px solid var(--color-maingrey);
  display: flex;
  gap: 18px;
  align-items: center;
`;

const PostStyle = styled.article`
  width: 500px;
  .post-wrapper {
    margin-left: 52px;
    color: var(--color-navy);
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 10px;
    .post-time {
      color: var(--color-steelblue);
      font-size: 10px;
      text-align: start;
    }
  }
`;

const PostLoaderStyle = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 0 30px 0 20px;
  margin: 0 auto;
  .profile-wrapper {
    display: flex;
    gap: 12px;
    z-index: -1;
    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
    }
  }
  .content-wrapper {
    margin: 10px 0 20px 45px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 10px 0 0;
  }
`;

export function PostLoaderItem() {
  return (
    <PostLoaderStyle>
      <div className='profile-wrapper'>
        <Skeleton containerClassName='flex-1' width={34} height={34} circle />
        <div className='title'>
          <Skeleton width={200} height={12} />
          <Skeleton width={200} height={12} />
        </div>
      </div>
      <div className='content-wrapper'>
        <Skeleton
          width={'100%'}
          height={12}
          count={3}
          style={{ marginBottom: '10px' }}
        />
        <Skeleton
          width={'100%'}
          height={200}
          style={{ marginBottom: '10px' }}
        />
        <Skeleton width={120} height={12} style={{ marginBottom: '6px' }} />
        <Skeleton width={100} height={12} style={{ marginBottom: '10px' }} />
      </div>
    </PostLoaderStyle>
  );
}

function CommentLoader() {
  function CommentItem() {
    return (
      <CommentItemStyle>
        <div className='profile-wrapper'>
          <Skeleton containerClassName='flex-1' width={34} height={34} circle />
          <Skeleton width={100} height={12} />
          <Skeleton width={50} height={12} />
        </div>
        <Skeleton width={300} height={12} style={{ marginLeft: '46px' }} />
      </CommentItemStyle>
    );
  }
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push(<CommentItem />);
  }
  return (
    <>
      <CommentContainerStyle>{items.map((item) => item)}</CommentContainerStyle>
      <CommentInputStyle>
        <Skeleton containerClassName='flex-1' width={34} height={34} circle />
        <Skeleton width={230} height={25} />
        <Skeleton width={50} height={25} />
      </CommentInputStyle>
    </>
  );
}

export function PostDetailLoader() {
  return (
    <DetailContainerStyle>
      <PostLoaderItem />
      <CommentLoader />
    </DetailContainerStyle>
  );
}

export default function PostLoader() {
  const items = [];
  for (let i = 0; i < 2; i++) {
    items.push(<PostLoaderItem />);
  }
  return <ContainerStyle>{items.map((item) => item)}</ContainerStyle>;
}
