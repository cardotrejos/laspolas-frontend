import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 15px;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  margin: 2rem 20rem;
  @media (max-width: 700px) {
    margin: 2rem 1rem;
  }
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
