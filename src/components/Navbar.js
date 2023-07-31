import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WatchIcon from '@mui/icons-material/Watch';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky-top navbar-light" style={{backgroundColor: "white"}}>
    <div class="container-fluid">
      <Link style={{textDecoration: 'none'}} to="/"><a class="navbar-brand"><h3>onE<span><WatchIcon  fontSize="large"/></span>Watch</h3></a></Link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link style={{textDecoration: 'none'}} to="/"><a class="nav-link" aria-current="page">Home</a></Link>
          </li>
          <li class="nav-item">
            <Link style={{textDecoration: 'none'}} to="/all"><a class="nav-link" aria-current="page">Watches</a></Link>
          </li>
          <li class="nav-item">
            <Link style={{textDecoration: 'none'}} to="/about"><a class="nav-link" aria-current="page">About Us</a></Link>
          </li>
          <li class="nav-item">
            <Link style={{textDecoration: 'none'}} to="/terms"><a class="nav-link " aria-current="page">Terms & conditions</a></Link>
          </li>
          <li class="nav-item">
            <Link style={{textDecoration: 'none'}} to="/cart"><a class="nav-link " aria-current="page"><ShoppingCartIcon/> {getCartCount()}</a></Link>
          </li>
        </ul>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
</nav>
  );
};

export default Navbar;
