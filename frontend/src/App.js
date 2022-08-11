import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pay  from "./components/Pay";
import Products from "./components/Products";
import Success from "./pages/Success";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Payment from './components/Pay'
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser)

  return (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/products">
          <ProductList/>
        </Route>
        <Route exact path="/products/:category">
          <ProductList/>
        </Route>
        <Route exact path="/product/:id">
          <Product/>
        </Route>
        <Route exact path="/success">
          <Success/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/payment">
          <Payment/>
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route exact path="/register">
        {user ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>
  </div>);
}

export default App;