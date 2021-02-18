import "./ProductDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/4.jpg";
import ProductItem from "../products/product-item/productItem";
import data from '../../data'

const ProductDetail = () => {
  const products = data.products;
  return (
    <div class="section">
      <div class="mycontainer">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div id="custCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div class="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div class="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div class="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div class="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div class="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
              </div>
              <ol class="carousel-indicators">
                <li
                  data-target="#custCarousel"
                  data-slide-to="0"
                  class="active"
                >
                  <img src={image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="1">
                  <img src={image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="2">
                  <img src={image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="3">
                  <img src={image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="4">
                  <img src={image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="5">
                  <img src={image} />
                </li>
              </ol>
            </div>
            <a
              class="left carousel-control"
              href="#custCarousel"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a
              class="right carousel-control"
              href="custCarousel"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="home">
              <div class="head">
                <a href="../Nancy/home.html">Home</a>/
                <a href="../Aisha/shop.html">Sofa Labtops</a>/ Albert Armchair,
                Nubuck White
              </div>
              <h1 class="details">Albert Armchair, Nubuck White</h1>
              <div class="view">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <a href="#">View Reviews</a>
              </div>
              <h2 class="paragraph">$120</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </p>
            </div>
            <div id="addTo">
              <a class="is-minus">-</a>
              <input class="quantity-input" type="text" value="1" />
              <a class="quantity-button is-plus">+</a>
              <a class="btnCard">
                <div>ADD TO CARD</div>
              </a>
            </div>
            <hr />
            <div class="layout">
              <div>
                <h4>SKU</h4>
                <h4>Categories</h4>
                <h4>Tags</h4>
              </div>
              <div class="info">
                82934
                <br />
                <br />
                <a href="../Aisha/shop.html">Armhair</a>,{" "}
                <a href="../Aisha/shop.html">Wooden Leg</a>,{" "}
                <a href="../Aisha/shop.html">Satin</a>
                <br />
                <br />
                <a href="../Aisha/shop.html">Tosca</a>,{" "}
                <a href="../Aisha/shop.html">Living Room</a>,{" "}
                <a href="../Aisha/shop.html">Modern</a>
              </div>
            </div>
            <hr />
            <div class="delivery">
              <a href="" class="fas fa-map-marker-alt">
                {" "}
                Store availability
              </a>
              <a href="" class="fas fa-sync-alt">
                {" "}
                Delivery and return
              </a>
              <a href="contant.html" class="fas fa-comments">
                {" "}
                Ask a question
              </a>
            </div>
            <hr />
            <div class="share">
              <a href="../Ahmed/Shopping-Cart.html" class="far fa-heart">
                &nbsp; Add to wishlist
              </a>
              <div>
                <p class="share">Share</p>
                <a
                  href="https://www.facebook.com/"
                  class="fab fa-facebook-f"
                ></a>
                <a href="https://www.twitter.com/" class="fab fa-twitter"></a>
                <a
                  href="https://www.linkedin.com/"
                  class="fab fa-linkedin-in"
                ></a>
                <a
                  href="https://www.instagram.com/"
                  class="fab fa-instagram"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 description">
            <div class="tabs">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a data-toggle="tab" href="#home">
                    Description
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu1">
                    Additional Information
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu2">
                    Reviews (2)
                  </a>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div id="home" class="tab-pane active">
                <p>
                  Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor. Integer posuere
                  erat a ante venenatis dapibus posuere velit aliquet.
                  Vestibulum id ligula porta felis euismod semper. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                </p>
                <p>
                  Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  Vestibulum id ligula porta felis euismod semper.
                </p>
              </div>
              <div id="menu1" class="tab-pane fade">
                <div class="addInfo">
                  <p>Ram</p>
                  <p>Screen Resolution </p>
                  <p>Storage</p>
                  <p>Battery</p>
                  <p>Color</p>
                </div>
                <div>
                  <p>8G</p>
                  <p>Full HD </p>
                  <p>500G</p>
                  <p>10 Hours</p>
                  <p>Black, seliver, White</p>
                </div>
              </div>
              <div id="menu2" class="tab-pane fade">
                <div class="veiw1">
                  <div class="info">
                    <img src={image} alt="" />
                    <div>
                      <h4>Walter Cook</h4>
                      <p>June 07, 2020</p>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span class="badge badge-light">Verified Buyer</span>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere. Maecenas faucibus mollis
                    interdum.Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Aenean lacinia bibendum
                  </p>
                </div>
                <div class="veiw1">
                  <div class="info">
                    <img src={image} alt="" />
                    <div>
                      <h4>Sacha Kariono</h4>
                      <p>June 27, 2020</p>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <span class="badge badge-light">Verified Buyer</span>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="mycontainer destance ">
        <div class="row rProudt ">
          <h2>Related products</h2>
        </div>
        <div class="row">
          {products.slice(products.length - 4, products.length).map((product, index) => {
            return (
                <div class="c-product-thumb" key={index}>
                <ProductItem product={product} />
              </div>
            )
          })}
        </div>
      </div>

      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <div class="modal-body">
              <div class="container">
                <div class="row d-flex align-items-center" class="first">
                  <div
                    class="col-6 col-sm-12 col-lg-6 justify-content-center"
                    class="second"
                  >
                    <div id="myCarousel" class="carousel slide">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div class="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div class="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div class="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div class="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div class="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                      </div>

                      <ol class="carousel-indicators">
                        <li
                          data-target="#myCarousel"
                          data-slide-to="0"
                          class="active"
                        ></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                      </ol>

                      <a
                        class="carousel-control-prev"
                        href="#myCarousel"
                        role="button"
                        data-slide="prev"
                      >
                        <span class="fas fa-chevron-left"></span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#myCarousel"
                        role="button"
                        data-slide="next"
                      >
                        <span class="fas fa-chevron-right"></span>
                      </a>
                    </div>
                  </div>

                  <div class="sPart col-6 col-sm-12 col-lg-6">
                    <div class="home">
                      <h1 class="icons">Albert Armchair, Nubuck White</h1>
                      <div class="view">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </div>
                      <h2 class="para">$120</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </p>
                    </div>
                    <div id="addTo">
                      <a class="is-minus">-</a>
                      <input class="quantity-input" type="text" value="1" />
                      <a class="quantity-button is-plus">+</a>
                      <a class="btnCard">
                        <div>ADD TO CARD</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
