import Image from "next/image";
import PropTypes from 'prop-types';
import Link from 'next/link';
import BeerItemStyles from './styles/BeerItemStyles';
import Title from './styles/Title';

function Beer({ beer }) {
  return (
    <BeerItemStyles>
      <Image
        src={beer?.photo?.image?.publicUrlTransformed}
        alt={beer?.name}
        width={100}
        height={200}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Title>
        <Link href={`/cerveza/${beer?.id}`} legacyBehavior>{beer?.name}</Link>
      </Title>
    </BeerItemStyles>
  );
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired,
};

export default Beer;
