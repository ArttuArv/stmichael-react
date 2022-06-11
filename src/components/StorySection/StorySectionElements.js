import styled from 'styled-components';

export const StoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  widht: 100%;
  height: 100%;
`;

export const StoryPageGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
`;

export const StoryPageImageWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  // background-image: url(${props => props.image});
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  @media (min-width: 1024px) {
    grid-auto-columns: 1fr;
`;

export const StoryPageColumn2SpanRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-row: span 2;
`;

export const StoryPageColumn2spanColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-column: span 2;
`;

export const StoryPageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-bottom: 3px solid #D4A24E;
  border-top: 3px solid #D4A24E;
  border-collapse: collapse;
`;

