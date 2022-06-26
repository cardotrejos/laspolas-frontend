import PropTypes from 'prop-types';
import SingleBrand from '../../components/SingleBrand';

export default function SingleBrandPage({ query }) {
  return <SingleBrand id={query.id} />;
}

SingleBrandPage.propTypes = {
  query: PropTypes.object.isRequired,
};
