import styled from 'styled-components';
import { animated } from 'react-spring';

export const SPContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  padding: 20px 0;
  background-color: #010606;

  ::-webkit-scrollbar {
    height: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: #010606;
  }

  ::-webkit-scrollbar-thumb {
    background: #F5BD30;
    border-radius: 10px;
  }
`;

export const SPCard = styled(animated.div)`
  flex-shrink: 0;
  width: 500px;
  height: 400px;
  border-radius: 10px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const SPCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const SPCardH1 = styled.h1`
  color: #F5BD30;
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  padding: 10px;

`;