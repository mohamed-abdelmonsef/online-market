import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/register' component={Register} exact />
      <Route path='/Login' component={Login} exact />
      <Route path='/Dashboard' component={Login} exact />
    </Router>
  );
}

export default App;
