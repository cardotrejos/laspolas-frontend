import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import Brand from './Brand';

export const ALL_BRANDS_QUERY = gql`
  query ALL_BRANDS_QUERY($skip: Int = 0) {
    brands(skip: $skip) {
      id
      name
      city
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const BrandsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  place-items: center;
`;

function Brands({ page }) {
  const { data, error, loading } = useQuery(ALL_BRANDS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <BrandsListStyles>
        {data.brands.map((brand) => (
          <Brand key={brand.id} brand={brand} />
        ))}
      </BrandsListStyles>
    </div>
  );
}

Brands.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Brands;
