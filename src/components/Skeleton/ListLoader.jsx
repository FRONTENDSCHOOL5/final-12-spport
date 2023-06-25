import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  padding: 60px 10px;
`;

const ListLoaderStyle = styled.div`
  padding: 10px;
  display: flex;
  gap: 12px;
  z-index: -1;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

function ListLoaderItem() {
  return (
    <ListLoaderStyle>
      <Skeleton containerClassName='flex-1' width={50} height={50} circle />
      <div className='title'>
        <Skeleton width={285} height={15} />
        <Skeleton width={285} height={15} />
      </div>
    </ListLoaderStyle>
  );
}

export default function ListLoader() {
  const items = [];
  for (let i = 0; i < 12; i++) {
    items.push(<ListLoaderItem />);
  }
  return <ContainerStyle>{items.map((item) => item)}</ContainerStyle>;
}
