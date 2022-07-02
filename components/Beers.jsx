import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import Beer from './Beer';

export const ALL_BEERS_QUERY = gql`
  query ALL_BEERS_QUERY($skip: Int = 0) {
    beers(skip: $skip) {
      name
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const BeersListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2%;
  place-items: center;
  height: 50vh;
`;

function Beers({ page }) {
  const { data, error, loading } = useQuery(ALL_BEERS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <BeersListStyles>
        {data.beers.map((beer) => (
          <Beer key={beer.id} brand={beer} />
        ))}
      </BeersListStyles>
    </div>
  );
}

Beers.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Beers;
