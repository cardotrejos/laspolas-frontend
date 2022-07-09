import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import Brand from './Brand';
import { Mixpanel } from '../lib/mixpanel';

export const ALL_BRANDS_QUERY = gql`
  query ALL_BRANDS_QUERY($skip: Int = 0, $take: Int = ${perPage}) {
    brands(skip: $skip, take: $take) {
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

function Brands({ page }) {

  useEffect(() => {
    Mixpanel.track("Loaded Brands Page");

  }, []);

  const { data, error, loading } = useQuery(ALL_BRANDS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      take: perPage,
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
