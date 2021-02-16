import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const About = React.lazy(() => import("./components/About/About"));
const Checkout = React.lazy(() => import("./components/Checkout/Checkout"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Home = React.lazy(() => import("./components/Home/Home"));
const ShoppingCart = React.lazy(() =>
  import("./components/ShoppingCart/ShoppingCart")
);
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"));
const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));

const Routes = () => {
  return (
    <Suspense fallback={<p>Loader...</p>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/shoppingCart" exact component={ShoppingCart} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
