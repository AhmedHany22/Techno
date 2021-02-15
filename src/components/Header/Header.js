import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {

  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-light py-3 bg-white">
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
               <a class="nav-link mx-4 text-dark myNav" href="../Nancy/home.html">Home</a>
             </li>
             <li class="nav-item">
               <a class="nav-link mx-4 text-dark myNav" href="../Aisha/about.html">About</a>
             </li>
             <li class="nav-item">
               <a class="nav-link mx-4 text-dark myNav" href="../Aisha/shop.html">Shop</a>
             </li>
             <li class="nav-item">
               <a class="nav-link mx-4 text-dark myNav" href="../Eman/contant.html">Contact</a>
             </li>
           </ul>
           <div class="d-flex float-right navbar-expand-sm ">
             <ul class="navbar-nav float-right ">
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                   <i class="fa fa-user-circle"></i>
                 </a>
                 <div class="dropdown-menu">
                   <a class="dropdown-item" href="../Eman/login.html">Sign in</a>
                   <a class="dropdown-item" href="../Nancy/signup.html">Sign up</a>
                 </div>
               </li>
               <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                   <i class="fa fa-shopping-cart"></i>
                 </a>
                 <div class="dropdown-menu">
                   <a class="dropdown-item" href="Shopping-Cart.html">View cart</a>
                   <a class="dropdown-item" href="Checkout.html">Checkout</a>
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
