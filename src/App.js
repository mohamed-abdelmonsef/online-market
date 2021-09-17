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
      <Route path='/' component={Home} exact ignoreScrollBehavior />
      <Route path='/register' component={Register} exact ignoreScrollBehavior />
      <Route path='/Login' component={Login} exact ignoreScrollBehavior />
      <Route path='/cart' component={Cart} exact ignoreScrollBehavior />
      <Route path='/product' component={Product} exact ignoreScrollBehavior />
      <Route path='/contact' component={Contact} exact ignoreScrollBehavior />
      <Route path='/aboutUs' component={AboutUs} exact />
      <Route path='/gallery' component={MenGallery} exact />
      <Route path='/gallery/men' component={MenGallery} exact />
      <Route path='/gallery/women' component={WomenGallery} exact />
      <Route path='/gallery/kids' component={KidsGallery} exact />
    </Router>
  );
}

export default App;
