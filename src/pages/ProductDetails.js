import { BackLink } from 'components/BackLink';
import { getProductById } from 'fakeApi';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  // !
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  return (
    <>
      <BackLink to={backLinkHref}> Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {productId}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
