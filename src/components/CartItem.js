import "./CartItem.css";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <>
  <div class="container bcontent ">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <Link to={`/product/${item.product}`}><img class="card-img rounded" src={item.imageUrl} alt={item.name}/></Link>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h4 class="card-title">{item.name}</h4>
                        <h6 class="card-text">Price: ${item.price}</h6>
                                <select
                                  value={item.qty}
                                  onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                                  className="cartItem__select mx-1 my-1"
                                >
                                  {[...Array(item.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  ))}
                                </select>
                                <DeleteIcon className="mx-5" style={{cursor:'pointer'}} onClick={() => removeHandler(item.product)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default CartItem;
