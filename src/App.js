import "./App.css";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";
import All from "./screens/All";
import About from "./screens/About";
import Terms from "./screens/Terms";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/all" component={All} />
          <Route exact path="/about" component={About} />
          <Route exact path="/terms" component={Terms} />
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;