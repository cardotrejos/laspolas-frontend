import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import styled from "styled-components";
import DisplayError from "./ErrorMessage";
import Image from "next/image";
import Link from "next/link";

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
  h3 {
    font-size: 3rem;
    line-height: 1.5;
    font-family: "radnika_next", sans-serif;
    background: #b68d40;
    color: white;
    box-shadow: var(--bs);
    text-align: center;
  }
  article {
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
  }
  h4 {
    font-size: 2rem;
    text-align: center;
  }
  .beer-container {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const BeerListStyles = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
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
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <article>{brand.description}</article>
        <p>Ciudad: {brand.city}</p>
        <p>Instagram: {brand.instagram}</p>
      </div>

      <BeerListStyles>
        <h3>Cervezas</h3>
        <div className="container">
          {brand?.beers.map((beer) => (
            <Link href={`/cerveza/${beer?.id}`} key={beer.id} legacyBehavior>
              <div key={beer.id} className="beer-container">
                <Image
                  src={beer.photo.image.publicUrlTransformed}
                  alt={beer.photo.altText}
                  width={150}
                  height={150}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <h4>{beer.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </BeerListStyles>
    </BrandStyles>
  );
}

SingleBrand.propTypes = {
  id: PropTypes.string.isRequired,
};
