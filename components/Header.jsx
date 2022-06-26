import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import BeerLogo from '../public/beer.svg';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: #B68D40;
  padding: 0.25rem 2rem;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Las polas</Link>
          <BeerLogo src="../public/beer.svg" width={50} height={50} alt="beer-logo" />
        </Logo>
        <Nav />
      </div>
    </HeaderStyles>
  );
}