import { useEffect } from "react";
import Image from "next/image";
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import { Mixpanel } from '../lib/mixpanel';

function Brand({ brand }) {

  useEffect(() => {
    Mixpanel.track("Loaded Brand");
    Mixpanel.track_links(`#nav a`, "Nav link clicked");
  }, []);

  return (
    <ItemStyles>
      <Image
        src={brand?.photo?.image?.publicUrlTransformed}
        alt={brand.name}
        width={200}
        height={200}
        style={{
          maxWidth: "90%",
          height: "auto"
        }} />
      <Title>
        <Link href={`/cerveceria/${brand.id}`} legacyBehavior>{brand.name}</Link>
      </Title>
      <p>{brand.city}</p>
    </ItemStyles>
  );
}

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brand;
