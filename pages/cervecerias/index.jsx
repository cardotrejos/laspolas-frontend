import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/PaginationBrands';
import Brands from '../../components/Brands';

export default function OrderPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination page={page || 1} />
        <Brands page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
