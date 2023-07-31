import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import iwatch from './iwatch.jpg'
import Product from "../components/Product";
import watchs from './watches.jpg'
import { getProducts as listProducts } from "../redux/actions/productActions";
import WaterIcon from '@mui/icons-material/Water';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BluetoothConnectedIcon from '@mui/icons-material/BluetoothConnected';
import SwipeIcon from '@mui/icons-material/Swipe';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { Link } from "react-router-dom";
import All from "./All";
import { CircularProgress } from "@mui/material";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
    <div className="homescreen">
      <h1 className="homescreen__title"><span>Our Collections</span></h1>
      <div className="homescreen__products mb-5">
        {loading ? (
          <h2 className="text center my-5" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }} ><CircularProgress className="my-5" size={100}/></h2>        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
			<>
            <Product 
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
			</>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default HomeScreen;
