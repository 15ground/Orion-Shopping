import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Add from "./containers/Add";
import Cart from "./containers/Cart";
import Edit from "./containers/Edit";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Index = () => <Home />;
const AddPage = () => <Add />;
const CartPage = () => <Cart />;
const EditPage = () => <Edit/>
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Route path="/" exact component={Index} />
        <Route path="/add" component={AddPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/edit" component={EditPage} />
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
