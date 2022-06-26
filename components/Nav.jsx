import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/cervecerias">Cerverias</Link>
      <Link href="/cervezas">Cervezas</Link>
    </NavStyles>
  );
}
