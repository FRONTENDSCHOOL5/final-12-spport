import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  display: grid;
  padding: 50px 0 60px;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;

const LikedGameStyle = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

function CardItemLoader() {
  return (
    <LikedGameStyle>
      <Skeleton width={'100%'} height={90} style={{ borderRadius: '8px' }} />
      <Skeleton width={100} height={18} />
      <Skeleton width={120} height={16} />
    </LikedGameStyle>
  );
}

export default function CardLoader() {
  const items = [];
  for (let i = 0; i < 24; i++) {
    items.push(<CardItemLoader />);
  }
  return <ContainerStyle>{items.map((item) => item)}</ContainerStyle>;
}
