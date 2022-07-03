import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/PaginationBeers';
import Beers from '../../components/Beers';

export default function OrderPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination page={page || 1} />
        <Beers page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
