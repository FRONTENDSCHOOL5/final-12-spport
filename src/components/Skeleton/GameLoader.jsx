import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  width: 100%;
`;

const GameItemStyle = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  z-index: -1;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .button {
    min-width: 56px;
    width: 15%;
    margin-left: auto;
  }
`;

function GameItemLoader() {
  return (
    <GameItemStyle>
      <Skeleton width={50} height={50} circle />
      <div className='title'>
        <Skeleton width={120} height={15} />
        <Skeleton width={150} height={15} />
      </div>
      <div className='button'>
        <Skeleton
          style={{ borderRadius: '40px' }}
          containerClassName='flex-1'
          height={30}
        />
      </div>
    </GameItemStyle>
  );
}

export default function GameLoader() {
  const items = [];
  for (let i = 0; i < 12; i++) {
    items.push(<GameItemLoader />);
  }
  return <ContainerStyle>{items.map((item) => item)}</ContainerStyle>;
}
