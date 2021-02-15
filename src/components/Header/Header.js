import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  Dropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
   
      <nav class="navbar navbar-expand-sm navbar-light py-3">
      <div class="container">
        <a class="navbar-brand font-weight-bold" href="../Nancy/home.html">
          <h2>Techno</h2>
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav m-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link mx-4 text-dark" href="../Nancy/home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4 text-dark myNav" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4 text-dark myNav" href="shop.html">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4 text-dark myNav" href="../Eman/contant.html">Contact</a>
            </li>
          </ul>
          <div class="d-flex float-right navbar-expand-sm ">
            <ul class="navbar-nav float-right ">
              <li class="nav-item search">
                <a class="nav-link icon open" id="open" href="#">
                  <i class="fa fa-search"></i>
                </a>
                <div class="search-overlay">
                  <div class="search-input">
                    <input class="form-control" placeholder="Search product"/>
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="../Eman/login.html">Sign in</a>
                  <a class="dropdown-item" href="../Nancy/signup.html">Sign up</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
              </svg>
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="../Ahmed/Shopping-Cart.html">View cart</a>
                  <a class="dropdown-item" href="../Ahmed/Checkout.html">Checkout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  );
};
export default Header;
