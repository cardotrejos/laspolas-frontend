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
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 10%;
    object-fit: contain;
  }
  p {
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
    background: #B68D40;
    font-family: "Roboto", sans-serif;
  }
`;

const BeerListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2%;
  place-items: center;
  height: 50vh;
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    brand(where: { id: $id }) {
      name
      description
      city
      instagram
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
      beers {
        id
        name
        photo {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleBrand({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Cargando...</p>;
  if (error) return <DisplayError error={error} />;
  const { brand } = data;
  return (
    <BrandStyles>
      <Head>
        <title>Las Polas | {brand.name}</title>
      </Head>

      <div>
        <h2>{brand.name}</h2>
        <Image
          src={brand.photo.image.publicUrlTransformed}
          alt={brand.photo.altText}
          width={100}
          height={100}
        />
        <p>{brand.description}</p>
        <p>Ciudad: {brand.city}</p>
        <p>Instagram: {brand.instagram}</p>
      </div>
      <BeerListStyles>
        <h3>Cervezas</h3>
      {brand?.beers.map((beer) => (
        <div key={beer.id}>
          <Image
            src={beer.photo.image.publicUrlTransformed}
            alt={beer.photo.altText}
            width={100}
            height={100}
          />
          <p>{beer.name}</p>
        </div>
      ))}
      </BeerListStyles>
    </BrandStyles>
  );
}

SingleBrand.propTypes = {
  id: PropTypes.string.isRequired,
};
