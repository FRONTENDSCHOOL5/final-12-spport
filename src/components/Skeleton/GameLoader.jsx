import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  /* padding: 60px 10px; */
`;

const GameItemStyle = styled.div`
  /* padding: 10px; */
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: -1;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

function GameItemLoader() {
  return (
    <GameItemStyle>
      <Skeleton containerClassName='flex-1' width={50} height={50} circle />
      <div className='title'>
        <Skeleton width={120} height={15} />
        <Skeleton width={150} height={15} />
      </div>
      <Skeleton
        style={{ borderRadius: '40px', marginLeft: '76px' }}
        containerClassName='flex-1'
        width={56}
        height={28}
      />
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
