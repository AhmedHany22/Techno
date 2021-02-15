import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Header/>
      <Login/>
      <Footer/>
    </>
  );
}

export default App;
