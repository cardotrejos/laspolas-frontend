import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

function Beer({ beer }) {
  return (
    <ItemStyles>
      <Image src={beer?.photo?.image?.publicUrlTransformed} alt={beer.name} width={200}
    height={200} />
      <Title>
        <Link href={`/cerveceria/${beer.id}`}>{beer.name}</Link>
      </Title>
    </ItemStyles>
  );
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired,
};

export default Beer;
