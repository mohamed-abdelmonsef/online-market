import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Cart from "./components/cart"
import Product from "./components/product"
import Contact from './components/contactUs'
import AboutUs from './components/aboutUs'
import MenGallery from './components/menGallery'
import WomenGallery from './components/womenGallery'
import KidsGallery from './components/kidsGallery'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/register' component={Register} exact />
      <Route path='/Login' component={Login} exact />
      <Route path='/cart' component={Cart} exact />
      <Route path='/product' component={Product} exact />
      <Route path='/contact' component={Contact} exact />
      <Route path='/aboutUs' component={AboutUs} exact />
      <Route path='/men' component={MenGallery} exact />
      <Route path='/women' component={WomenGallery} exact />
      <Route path='/kids' component={KidsGallery} exact />
    </Router>
  );
}

export default App;
