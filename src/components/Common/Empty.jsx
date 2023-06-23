import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MButton from './Button/MButton';
import logoblue from '../../assets/logo/logo-blue.svg';

const EmptySection = styled.section`
  width: 100%;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .emptyMessage {
    background: url(${logoblue}) no-repeat;
    color: var(--color-steelblue);
    background-position: top;
    padding-top: 115px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export default function Empty({ message, btnText, link }) {
  const navigate = useNavigate();
  return (
    <EmptySection>
      <p className='emptyMessage'>{message}</p>
      <MButton
        text={btnText}
        func={() => {
          navigate(link);
        }}
      />
    </EmptySection>
  );
}
