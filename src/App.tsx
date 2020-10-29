import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Add from "./containers/Add";
import Cart from "./containers/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Index = () => <Home />;
const AddPage = () => <Add />;
const CartPage = () => <Cart />;

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/add" component={AddPage} />
        <Route path="/cart" component={CartPage} />
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
