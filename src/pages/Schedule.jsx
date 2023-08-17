import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar';
import styled from 'styled-components';
import Empty from '../components/Common/Empty';
import GameGrid from '../components/List/CardGrid';
import { useParams } from 'react-router-dom';
import CardLoader from '../components/Skeleton/CardLoader';
import { useProductQuery } from '../hook/useProduct';
import { Helmet } from 'react-helmet-async';

const MainStyle = styled.main`
  padding: 50px 0 60px;
  .section-header {
    border-bottom: 0.5px solid var(--color-maingrey);
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    background: white;
    gap: 10px;
  }
  .section-game {
    padding: 60px 16px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin-left: 60px;
  }

  @media screen and (min-width: 1247px) {
    margin-left: 200px;
  }
`;

export default function Schedule() {
  const { id } = useParams();
  const { product, isProductLoading, isProductError } = useProductQuery(
    id,
    true,
  );

  return (
    <>
      <Helmet>
        <title>직관 일정 • Spport</title>
      </Helmet>
      <h1 className='a11y-hidden'>직관일정 전체보기</h1>
      <Header text />
      <MainStyle>
        <section className='section-header'>
          <h2>직관 일정</h2>
        </section>
        <section className='section-game'>
          {isProductError && (
            <Empty
              message='정보를 가져오는데 실패했습니다.'
              btnText='새로고침'
              link={`/schedule/${id}`}
            />
          )}
          {!isProductLoading && product.length === 0 && (
            <Empty
              message='직관 일정을 추가해보세요'
              btnText='추가하기'
              link='/addgame'
            />
          )}
          {isProductLoading ? <CardLoader /> : <GameGrid games={product} />}
        </section>
      </MainStyle>
      <NavBar />
    </>
  );
}
