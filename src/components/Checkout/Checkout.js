import "./Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "../../assets/Product_1.jpg";

const Checkout = () => {

  return (
    <>
    <section class="jumbotron text-white text-center header-section">
    <div class="container col-lg-5 col-md-6 col-sm-8 col-9 py-4 bg-white text-center myBorder">
      <h1 class="mb-3 text-dark">Checkout</h1>
      <div class="msg">
        Missed something ?<a href="../Aisha/shop.html" class="text-secondary">Continue shopping</a>
      </div>
    </div>
  </section>

  <section class="my-5">
    <div class="row adjustRow">

      <div class="col-lg-8 col-md-12 mt-4 bg-white">
        <nav class="text-secondary text-uppercase">
          <ul class="nav nav-tabs nav-justified h5">
            <li class="nav-item text-center">
              <a data-toggle="tab" href="#Billing" class="nav-link custmizeAnchor titles active">Billing Address</a>
            </li>
            <li class="nav-item text-center">
              <a data-toggle="tab" href="#Shipping" class="nav-link custmizeAnchor titles">Shipping Method</a>
            </li>
            <li class="nav-item text-center">
              <a data-toggle="tab" href="#Payment" class="nav-link custmizeAnchor titles">Payment Method</a>
            </li>
            <li class="nav-item text-center">
              <a data-toggle="tab" href="#Orders" class="nav-link custmizeAnchor titles">Orders Review</a>
            </li>
          </ul>
        </nav>
        <div class="tab-content text-left text-secondary">
          <div class="tab-pane active" id="Billing">
            <h4>Billing Details</h4>
            <hr/>
            <form role="form" method="post" action="#">
              <div class="row">
                <div class="col-lg-6 col-md-12 cust-billing">
                  <div class="form-group">
                    <label for="inputFirstName" class="control-label">First Name:<span class="text-error">*</span></label>
                    <div>
                      <input type="text" class="form-control" id="inputFirstName"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputLastName" class="control-label">Last Name:<span class="text-error">*</span></label>
                    <div>
                      <input type="text" class="form-control" id="inputLastName"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEMail" class="control-label">E-Mail:<span class="text-error">*</span></label>
                    <div>
                      <input type="email" class="form-control" id="inputEMail"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPhone" class="control-label">Phone:</label>
                    <div>
                      <input type="text" class="form-control" id="inputPhone"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputFax" class="control-label">Fax:</label>
                    <div>
                      <input type="text" class="form-control" id="inputFax"/>
                    </div>
                  </div>

                </div>
                <div class="col-lg-6 col-md-12 cust-billing">
                  <div class="form-group">
                    <label for="inputCompany" class="control-label">Company:</label>
                    <div>
                      <input type="text" class="form-control" id="inputCompany"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAdress1" class="control-label">Address /1:<span class="text-error">*</span></label>
                    <div>
                      <input type="text" class="form-control" id="inputAdress1"/>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="inputCity" class="control-label">City:<span class="text-error">*</span></label>
                    <div>
                      <input type="text" class="form-control" id="inputCity"/>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="inputPostCode" class="control-label">Post Code:<span class="text-error">*</span></label>
                    <div>
                      <input type="text" class="form-control" id="inputPostCode"/>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label">Contury:<span class="text-error">*</span></label>
                        <div>
                          <select name="inputContury" class="form-control">
                            <option value="#">-Conturies-</option>
                            <option value="#">Contury1</option>
                            <option value="#">Contury2</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label">Region:
                          <span class="text-error">*</span></label>
                        <div>
                          <select name="inputRegion" class="form-control">
                            <option value="#">-Regions-</option>
                            <option value="#">Region1</option>
                            <option value="#">Region2</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <hr/>
            <a href="Shopping-Cart.html" class="btn rounded-0 btn-outline-dark">Back</a>
            <a href="#" class="btn rounded-0 btn-outline-dark active">Next</a>
            <br/>
            <br/>
          </div>

          <div class="tab-pane" id="Shipping">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <h4>Free</h4>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                <div class="radio">
                  <label>
                    <input type="radio" name="shipping" value="0"/>
                    Free
                  </label>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <h4>Standart</h4>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                <div class="radio">
                  <label>
                    <input type="radio" name="shipping" value="0"/>
                    $5 Rate
                  </label>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <h4>Speed</h4>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                <div class="radio">
                  <label>
                    <input type="radio" name="shipping" value="0"/>
                    $15 Rate
                  </label>
                </div>
              </div>
            </div>
            <hr/>
            <a href="Shopping-Cart.html" class="btn rounded-0 btn-outline-dark">Back</a>
            <a href="#" class="btn rounded-0 btn-outline-dark active">Next</a>
            <br/>
            <br/>
          </div>

          <div class="tab-pane" id="Payment">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <h4>Pay Pal</h4>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                <div class="radio">
                  <label class="color-active">
                    <input type="radio" name="payment" id="payment1" value="0"/>
                    Pay Pal
                  </label>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <h4>Visa Card</h4>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                <div class="radio">
                  <label class="color-active">
                    <input type="radio" name="payment" id="payment2" value="0"/>
                    Visa Card
                  </label>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <h4>Stripe</h4>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                <div class="radio">
                  <label class="color-active">
                    <input type="radio" name="payment" id="payment3" value="0"/>
                    Stripe
                  </label>
                </div>
              </div>
            </div>
            <hr/>
            <a href="Shopping-Cart.html" class="btn rounded-0 btn-outline-dark">Back</a>
            <a href="#" class="btn rounded-0 btn-outline-dark active">Next</a>
            <br/>
            <br/>
          </div>

          <div class="tab-pane" id="Orders">
            <h4 class="reviewTitle">Review</h4>
            <div class="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th class="hide">Image</th>
                    <th class="hide">Product Name</th>
                    <th class="hide">Model</th>
                    <th class="hide">Quantity</th>
                    <th class="hide">Unit Price</th>
                    <th class="hide">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="../Eman/products.html"><img alt="Product Name" src={product}/></a>
                    </td>
                    <td>
                      <a href="../Eman/products.html">Product Name</a>
                    </td>
                    <td>Pro 1</td>
                    <td>
                      <div class="quantity"><input type="number" min="1" max="9" step="1" value="1"/></div>
                    </td>
                    <td>$77.00</td>
                    <td>$77.00</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="../Eman/products.html"><img alt="Product Name" src={product}/></a>
                    </td>
                    <td>
                      <a href="../Eman/products.html">Product Name</a>
                    </td>
                    <td>Pro 2</td>
                    <td>
                      <div class="quantity"><input type="number" min="1" max="9" step="1" value="1"/></div>
                    </td>
                    <td>$777.00</td>
                    <td>$777.00</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="../Eman/products.html"><img alt="Product Name" src={product}/></a>
                    </td>
                    <td>
                      <a href="../Eman/products.html">Product Name</a>
                    </td>
                    <td>Pro 3</td>
                    <td>
                      <div class="quantity"><input type="number" min="1" max="9" step="1" value="1"/></div>
                    </td>
                    <td>$7.00</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr/>
            <a href="Shopping-Cart.html" class="btn rounded-0 btn-outline-dark">Back</a>
            <a href="#" class="btn rounded-0 btn-outline-dark active">Next</a>
            <br/>
            <br/>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 mt-4 pt-4 bg-white text-left text-uppercase bill">
        <div class="block-form block-order-total visible" data-wow-duration="1s" >
          <h3 class="">Total</h3>
          <hr/>
          <ul class="list-unstyled">
            <li>Sub Total :
              <strong class="float-right">$500.00</strong>
            </li>
            <li>Pricing Sharge :
              <strong class="float-right">$10.00</strong>
            </li>
            <li>Promotion Discound :
              <strong class="float-right">$5.00</strong>
            </li>
            <li>VAT :
              <strong class="float-right">$10.00</strong>
            </li>
            <li><hr/></li>
            <li class="color-active">
              <b>Total :</b>
              <strong class="float-right">$520.00</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div class="bg-white py-5">
    <div class="container text-left">
      <div class="row">
        <div class="col-md-4">
          <div class="d-flex">
            <div class="px-3">
              <i class="fa fa-sync-alt text-primary"></i>
            </div>
            <div>
              <p>Easy return</p>
              <p class="text-muted">30 day return window without any question asked, just peace of mind.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex">
            <div class="px-3">
              <i class="fa fa-globe-africa text-primary"></i>
            </div>
            <div>
              <p>Global shipping</p>
              <p class="text-muted">We accept order around the globe and deliver to 120 countries.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex">
            <div class="px-3">
              <i class="fa fa-credit-card text-primary"></i>
            </div>
            <div>
              <p>Secure payment</p>
              <p class="text-muted">Encryption of standard SSL with 128-bit symmetric key</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
    )
  }
  export default Checkout;

