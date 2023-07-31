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

  <section class="home py-5" id="home">
			<div class="home-text px-5">
				<h1><span>A healthy leap ahead. </span>Pride is in the air.</h1>
				<p>Enhance your lifestyle and stay connected with the SmartWatch X1, the perfect companion for your active and tech-savvy lifestyle. With its sleek and stylish design, this smartwatch combines functionality with fashion, keeping you ahead of the curve.</p>
				<Link to='/all' class="btn">Explore Now</Link>
			</div>

			<div class="home-img">
				<img src={iwatch} alt="home"/>
			</div>
		</section>

    <section class="container">
			<div class="main-text">
				<h2><span>Features</span></h2>
				<p>Enhance your lifestyle and stay connected with the oneWatchs, the perfect companion for your active and tech-savvy lifestyle.<br/> With its sleek and stylish design, this smartwatch combines functionality with fashion, keeping you ahead of the curve.</p>
			</div><i class="las la-battery-three-quarters"></i>

			<div class="container-box">
				<div class="c-mainbox">
					<div class="container-text">
						<p><WaterIcon className="mx-2" fontSize="large"/> Water-Resistant Design</p>
					</div>
				</div>

        		<div class="c-mainbox">
					<div class="container-text">
						<p><MonitorHeartIcon className="mx-3" fontSize="large"/>Advanced Health Monitoring</p>
					</div>
				</div>

				<div class="c-mainbox">
					<div class="container-text">
						<p><BluetoothConnectedIcon fontSize="large" className="mx-3"/>Seamless Connectivity</p>
					</div>
				</div>

				<div class="c-mainbox">
					<div class="container-text">
						<p><SwipeIcon fontSize="large" className="mx-3"/>Intuitive Touchscreen</p>
					</div>
				</div>

				<div class="c-mainbox">
					<div class="container-text">
						<p><LocationOnIcon fontSize="large" className="mx-3"/>Built-in GPS-Tracking-Call</p>
					</div>
				</div>

				<div class="c-mainbox">
					<div class="container-text">
						<p><QueueMusicIcon fontSize="large" className="mx-3"/>Music and Camera Control</p>
					</div>
				</div>
			</div>
		</section>

    <section class="about" id="about">
			<div class="about-img">
				<img src={watchs} alt=""/>
			</div>

			<div class="about-text">
				<h2>Unlock a world of timekeeping <span>excellence</span> with our <span>remarkable</span> collection of watches<br/></h2>
				<p>Experience the future of wearable technology with the oneWatchs. Stay connected, monitor your health, and elevate your everyday life. Get yours today and make every moment count!</p>
				<Link to='/all' class="btn">Buy Now</Link>
			</div>

		</section>

      <div className="homescreen">
      <h1 className="homescreen__title"><span>Latest Arrival</span></h1>
      <div className="homescreen__products">
        {loading ? (
          <h2 className="text center my-5" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }} ><CircularProgress className="my-5" size={100}/></h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.slice(0,4).map((product) => (
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
	<div class="text-center my-4">
	  <Link to='/all' class="btn">More</Link>
	</div>
    </div>
    </>
  );
};

export default HomeScreen;
