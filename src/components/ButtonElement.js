import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#D4A24E' : '#01BF71')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: #010606;
  font-size: ${({fontBig}) => (fontBig ? '36px' : '24px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    background: ${({primary}) => (primary ? '#01BF71' : '#D4A24E')};
`;