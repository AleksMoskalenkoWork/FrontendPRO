import FormGroupCmp from '../components/form-group/FormGroup';
import PopularHotels from '../components/popular-hotels/PopularHotels';
import { useSelector } from 'react-redux';
import SearchResult from '../components/search-result/SearchResult';

export default function HomePage() {
  const { search } = useSelector((state) => state.booking);

  return (
    <>
      <FormGroupCmp />
      <PopularHotels />
      <SearchResult />
    </>
  );
}
