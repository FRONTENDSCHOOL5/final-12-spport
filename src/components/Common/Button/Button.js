import { css } from 'styled-components';

//버튼 사용법
// props.text은 버튼에 들어가는 텍스트
// props.func은 버튼 누르면 실행될 함수
// props.disable=true disable됨
// LButton은 80%
// MButton은 30%
// MsButton은 20%
// SButton은 15%

const NavyButtonStyle = css`
  border-radius: 50px;
  color: var(--color-lime);
  background-color: var(--color-navy);
`;

const DisabledButtonStyle = css`
  color: var(--color-maingrey);
  background-color: var(--color-steelblue);
  cursor: default;
`;

const LimeButtonStyle = css`
  background-color: var(--color-lime);
  color: var(--color-navy);
`;

const ActiveButtonStyle = css`
  background-color: #fff;
  color: var(--color-steelblue);
  box-shadow: inset 0 0 0 1px var(--color-steelblue);
`;

export {
  NavyButtonStyle,
  DisabledButtonStyle,
  LimeButtonStyle,
  ActiveButtonStyle,
};
