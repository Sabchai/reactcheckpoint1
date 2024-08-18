
import product from './Product';

const Image = ({ style }) => {
  return <img src={product.image} alt={product.name} style={{ width: '150x', height: '375px' }} />;
};

export default Image;