import { useSearchParams } from 'react-router-dom';
import { getProducts } from 'fakeApi';
import { ProductList } from 'components/ProductList';
import { SearchBox } from 'components/SearchBox';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const products = getProducts();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const onChangeSearch = value => {
    setSearchParams(value !== '' ? { name: value } : {});
  };

  return (
    <>
      <SearchBox value={productName} onChange={onChangeSearch} />
      <ProductList products={visibleProducts} />
    </>
  );
};

export default Products;
