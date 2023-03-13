import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import styled from "styled-components";
import DisplayError from "./ErrorMessage";
import Image from "next/legacy/image";

const BrandStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 10%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    beer(where: { id: $id }) {
      name
      description
      abv
      ibu
      srm
      disponibilidad
      temporada
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleBeer({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Cargando...</p>;
  if (error) return <DisplayError error={error} />;
  const { beer } = data;
  return (
    <BrandStyles>
      <Head>
        <title>Las Polas | {beer.name}</title>
      </Head>

      <div>
        <h2>{beer.name}</h2>
        <Image
          src={beer.photo.image.publicUrlTransformed}
          alt={beer.photo.altText}
          width={100}
          height={100}
        />
        <p>{beer.description}</p>
        <p>ABV (% Alcohol): {beer.abv}</p>
        <p>IBU (Amargo): {beer.ibu}</p>
        <p>SRM (Color): {beer.srm}</p>
        {beer.temporada !== null && (
          <p>Cerveza de Temporada: {beer.temporada}</p>
        )}
        {beer.disponibilidad !== null && (
          <p>Disponibilidad: {beer.disponibilidad}</p>
        )}
      </div>
    </BrandStyles>
  );
}

SingleBeer.propTypes = {
  id: PropTypes.string.isRequired,
};
