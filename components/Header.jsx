import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import BeerLogo from '../public/beer.svg';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  background: #B68D40;
  padding: 0.25rem 2rem;
  text-align: center;
  padding: 0.5rem 1rem;
  margin: 2rem 5rem;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.div`
    border-bottom: 10px solid var(--black, black);
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px) {
      flex-direction: column;
    }
`;

export default function Header() {
  return (
    <HeaderStyles>
        <Logo>
          <Link href="/">Las polas</Link>
          <BeerLogo src="../public/beer.svg" width={50} height={50} alt="beer-logo" />
        </Logo>
        <Nav />
    </HeaderStyles>
  );
}