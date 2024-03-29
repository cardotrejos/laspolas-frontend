import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import styled from "styled-components";
import DisplayError from "./ErrorMessage";
import Image from "next/image";

const BrandStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .beer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 30%;
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
        <div className="beer-container">
          <Image
            src={beer.photo.image.publicUrlTransformed}
            alt={beer.photo.altText}
            width={500}
            height={500}
          />
        </div>
        <p>{beer.description}</p>
        <p>ABV (% Alcohol): {beer.abv}</p>
        {
          beer.ibu !== null && (
            <p>IBU (Amargo): {beer.ibu}</p>
          )
        }
        {
          beer.srm !== null && (
            <p>SRM (Color): {beer.srm}</p>
          )
        }
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
