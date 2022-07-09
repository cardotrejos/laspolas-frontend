import styled from 'styled-components';

const BeerItemStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGrey);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGrey);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default BeerItemStyles;