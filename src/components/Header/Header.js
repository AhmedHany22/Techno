import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-light py-3 bg-white">
       <div class="container">
         <a class="navbar-brand font-weight-bold" href="/">
           <h2>Techno</h2>
         </a>
         <div class="collapse navbar-collapse" id="collapsibleNavId">
           <ul class="navbar-nav m-auto mt-2 mt-lg-0">
             <li class="nav-item">
               <Link class="nav-link mx-4 text-dark myNav font-weight-bold" href="/">Home</Link>
             </li>
             <li class="nav-item">
               <a class="nav-link mx-4 text-dark myNav font-weight-bold" href="/shop">Shop</a>
             </li>
             <li class="nav-item">
               <Link class="nav-link mx-4 text-dark myNav font-weight-bold" href="/about">About</Link>
             </li>
             <li class="nav-item">
               <Link class="nav-link mx-4 text-dark myNav font-weight-bold" href="/contact">Contact</Link>
             </li>
           </ul>
           <div class="d-flex float-right navbar-expand-sm ">
             <ul class="navbar-nav float-right ">
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                   <i class="fas fa-user-circle"></i>
                 </a>
                 <div class="dropdown-menu">
                   <a class="dropdown-item" href="/signin">Sign in</a>
                   <a class="dropdown-item" href="/signup">Sign up</a>
                 </div>
               </li>
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                   <i class="fas fa-shopping-cart"></i>
                 </a>
                 <div class="dropdown-menu">
                   <a class="dropdown-item" href="/shoppingCart">View cart</a>
                   <a class="dropdown-item" href="/checkout">Checkout</a>
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
