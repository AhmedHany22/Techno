import "./ShoppingCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "../../assets/Product_1.jpg";
const ShoppingCart = () => {

  return (
    <>
     <section className="jumbotron text-white text-center header-section">
     <div className="container col-lg-5 col-md-6 col-sm-8 col-9 py-4 bg-white text-center myBorder">
       <h1 className="mb-3 text-dark">Shopping Cart</h1>
       <div className="msg">
         Missed something ?<a href="/" className="text-secondary">Continue shopping</a>
       </div>
     </div>
   </section>

   <div className="container p-0">
     <div className="row mx-1 my-4 bg-white Cart_Row">
       <div className="col-md-2 col-6 pl-1 border-right">
         <img src={product} className="mt-2 cart_img"/>
       </div>
       <div className="mt-2 col-md-4 col-6 text-left">
         <p>
           <a href="#" className="seller_name">Suspensions</a>
         </p>
         <p>
           <a href="/details" className="product_name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
         </p>
       </div>
       <div className="col-md-6 col-12 row pr-0">
         <div className="mt-2 col-4">
           <p className="item_header">Price</p>
           <p className="price">200$</p>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Quantity</p>
           <div className="quantity"><input type="number" min="1" max="9" step="1" value="1"/></div>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Order amount</p>
           <p className="price">200$</p>
         </div>

         <div className="col-12 row p-0">
           <div className="col-4 p-0">
             <i className="fa fa-star-o" title="5"></i>
             <i className="fa fa-star-o" title="4"></i>
             <i className="fa fa-star-o" title="3"></i>
             <i className="fa fa-star-o" title="2"></i>
             <i className="fa fa-star-o" title="1"></i>
           </div>
           <p className="col-4">
             <span >89</span>reviews</p>
           <p className="col-4 p-0">
             <a href="#" className="text-danger">Remove from cart</a>
           </p>
         </div>
       </div>
     </div>
   </div>

   <div className="container p-0">
     <div className="row mx-1 my-4 bg-white Cart_Row">
       <div className="col-md-2 col-6 pl-1 border-right">
         <img src={product} className="mt-2 cart_img"/>
       </div>
       <div className="mt-2 col-md-4 col-6 text-left">
         <p>
           <a href="#" className="seller_name">Suspensions</a>
         </p>
         <p>
           <a href="/details" className="product_name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
         </p>
       </div>
       <div className="col-md-6 col-12 row pr-0">
         <div className="mt-2 col-4">
           <p className="item_header">Price</p>
           <p className="price">200$</p>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Quantity</p>
           <div className="quantity"><input type="number" min="1" max="9" step="1" value="1"/></div>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Order amount</p>
           <p className="price">200$</p>
         </div>

         <div className="col-12 row p-0">
           <div className="col-4 p-0">
             <i className="fa fa-star-o" title="5"></i>
             <i className="fa fa-star-o" title="4"></i>
             <i className="fa fa-star-o" title="3"></i>
             <i className="fa fa-star-o" title="2"></i>
             <i className="fa fa-star-o" title="1"></i>
           </div>
           <p className="col-4">
             <span >89</span>reviews</p>
           <p className="col-4 p-0">
             <a href="#" className="text-danger">Remove from cart</a>
           </p>
         </div>
       </div>
     </div>
   </div>

   <div className="container p-0">
     <div className="row mx-1 my-4 bg-white Cart_Row">
       <div className="col-md-2 col-6 pl-1 border-right">
         <img src={product} className="mt-2 cart_img"/>
       </div>
       <div className="mt-2 col-md-4 col-6 text-left">
         <p>
           <a href="#" className="seller_name">Suspensions</a>
         </p>
         <p>
           <a href="/details" className="product_name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
         </p>
       </div>
       <div className="col-md-6 col-12 row pr-0">
         <div className="mt-2 col-4">
           <p className="item_header">Price</p>
           <p className="price">200$</p>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Quantity</p>
           <div className="quantity"><input type="number" min="1" max="9" step="1" value="1"/></div>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Order amount</p>
           <p className="price">200$</p>
         </div>

         <div className="col-12 row p-0">
           <div className="col-4 p-0">
             <i className="fa fa-star-o" title="5"></i>
             <i className="fa fa-star-o" title="4"></i>
             <i className="fa fa-star-o" title="3"></i>
             <i className="fa fa-star-o" title="2"></i>
             <i className="fa fa-star-o" title="1"></i>
           </div>
           <p className="col-4">
             <span >89</span>reviews</p>
           <p className="col-4 p-0">
             <a href="#" className="text-danger">Remove from cart</a>
           </p>
         </div>
       </div>
     </div>
   </div>

   <div className="container p-0">
     <div className="row mx-1 my-4 bg-white Cart_Row">
       <div className="col-md-2 col-6 pl-1 border-right">
         <img src={product} className="mt-2 cart_img"/>
       </div>
       <div className="mt-2 col-md-4 col-6 text-left">
         <p>
           <a href="#" className="seller_name">Suspensions</a>
         </p>
         <p>
           <a href="/details" className="product_name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
         </p>
       </div>
       <div className="col-md-6 col-12 row pr-0">
         <div className="mt-2 col-4">
           <p className="item_header">Price</p>
           <p className="price">200$</p>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Quantity</p>
           <div className="quantity"><input type="number" min="1" max="9" step="1" value="1"/></div>
         </div>
         <div className="mt-2 col-4">
           <p className="item_header">Order amount</p>
           <p className="price">200$</p>
         </div>

         <div className="col-12 row p-0">
           <div className="col-4 p-0">
             <i className="fa fa-star-o" title="5"></i>
             <i className="fa fa-star-o" title="4"></i>
             <i className="fa fa-star-o" title="3"></i>
             <i className="fa fa-star-o" title="2"></i>
             <i className="fa fa-star-o" title="1"></i>
           </div>
           <p className="col-4">
             <span >89</span>reviews</p>
           <p className="col-4 p-0">
             <a href="#" className="text-danger">Remove from cart</a>
           </p>
         </div>
       </div>
     </div>
   </div>

   <div className="row discount_section bg-light Cart_Row py-0">
     <div className="col-md-6 pt-3 text-left bg-white">
       <h4>DISCOUNT CODES</h4>
       <p>Enter your coupon code if you have one.</p>
       <div className="form-group">
         <input type="text" placeholder="Apply Coupon *" className="form-control" name="name"/>
         <button className="btn rounded-0 btn-outline-dark mt-2 mr-3" type="button">Apply Coupon</button>
         <button className="btn rounded-0 btn-outline-dark mt-2" type="button">proceed to Checkout</button>
       </div>
     </div>
     <div className="col-md-6 pt-4 bg-dark">
       <div className="row text-white">
         <div className="col-6 py-2">
           <span>Subtotal</span></div>
         <div className="col-6 py-2">
           <span>$241.00</span></div>
         <div className="col-6 py-4">
           <span>Discount</span></div>
         <div className="col-6 py-4">
           <span>$12.00</span></div>
         <div className="col-6 py-2">
           <span>Grand Total</span></div>
         <div className="col-6 py-2">
           <span>$229.00</span></div>
       </div>
     </div>
   </div>
    </>
    )
}
export default ShoppingCart;
