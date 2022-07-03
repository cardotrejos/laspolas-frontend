import PropTypes from 'prop-types';
import SingleBeer from '../../components/SingleBeer';

export default function SingleBeerPage({ query }) {
  return <SingleBeer id={query.id} />;
}

SingleBeerPage.propTypes = {
  query: PropTypes.object.isRequired,
};
