import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import About from "./components/About/About";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
function App() {
  return (
    <>
      <Header/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
