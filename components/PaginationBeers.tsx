import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
   beersCount
  }
`;

export default function Pagination({ page }: { page: number }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Cargando...';
  if (error) return <DisplayError error={error} />;
  const { beersCount } = data;
  const pageCount = Math.ceil(beersCount / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>Las Polas</title>
      </Head>
      <Link href={`/cervezas/${page - 1}`} aria-disabled={page <= 1}>
        ← Anterior
      </Link>
      <p>
        Página {page} de {pageCount}
      </p>
      <p>Total cervezas: {beersCount} </p>
      <Link href={`/cervezas/${page + 1}`} aria-disabled={page >= pageCount}>
        Siguiente →
      </Link>
    </PaginationStyles>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
};
