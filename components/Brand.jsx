import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

function Brand({ brand }) {
  return (
    <ItemStyles>
      <Image src={brand?.photo?.image?.publicUrlTransformed} alt={brand.name} width={400}
    height={400} />
      <Title>
        <Link href={`/cerveceria/${brand.id}`}>{brand.name}</Link>
      </Title>
      <p>{brand.city}</p>
    </ItemStyles>
  );
}

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brand;
