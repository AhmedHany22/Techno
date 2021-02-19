import "./ProductDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/4.jpg";
import ProductItem from "../products/product-item/productItem";
import data from '../../data'

const ProductDetail = () => {
  const products = data.products;
  return (
    <div className="section">
      <div className="mycontainer">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div id="custCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={image} />{" "}
                </div>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#custCarousel"
                  data-slide-to="0"
                  className="active"
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
              className="left carousel-control"
              href="#custCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a
              className="right carousel-control"
              href="custCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="home">
              <div className="head">
                <a href="../Nancy/home.html">Home</a>/
                <a href="../Aisha/shop.html">Sofa Labtops</a>/ Albert Armchair,
                Nubuck White
              </div>
              <h1 className="details">Albert Armchair, Nubuck White</h1>
              <div className="view">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <a href="#">View Reviews</a>
              </div>
              <h2 className="paragraph">$120</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </p>
            </div>
            <div id="addTo">
              <a className="is-minus">-</a>
              <input className="quantity-input" type="text" value="1" />
              <a className="quantity-button is-plus">+</a>
              <a className="btnCard">
                <div>ADD TO CARD</div>
              </a>
            </div>
            <hr />
            <div className="layout">
              <div>
                <h4>SKU</h4>
                <h4>Categories</h4>
                <h4>Tags</h4>
              </div>
              <div className="info">
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
            <div className="delivery">
              <a href="" className="fas fa-map-marker-alt">
                {" "}
                Store availability
              </a>
              <a href="" className="fas fa-sync-alt">
                {" "}
                Delivery and return
              </a>
              <a href="contant.html" className="fas fa-comments">
                {" "}
                Ask a question
              </a>
            </div>
            <hr />
            <div className="share">
              <a href="../Ahmed/Shopping-Cart.html" className="far fa-heart">
                &nbsp; Add to wishlist
              </a>
              <div>
                <p className="share">Share</p>
                <a
                  href="https://www.facebook.com/"
                  className="fab fa-facebook-f"
                ></a>
                <a href="https://www.twitter.com/" className="fab fa-twitter"></a>
                <a
                  href="https://www.linkedin.com/"
                  className="fab fa-linkedin-in"
                ></a>
                <a
                  href="https://www.instagram.com/"
                  className="fab fa-instagram"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 description">
            <div className="tabs">
              <ul className="nav nav-tabs">
                <li className="active">
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
            <div className="tab-content">
              <div id="home" className="tab-pane active">
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
              <div id="menu1" className="tab-pane fade">
                <div className="addInfo">
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
              <div id="menu2" className="tab-pane fade">
                <div className="veiw1">
                  <div className="info">
                    <img src={image} alt="" />
                    <div>
                      <h4>Walter Cook</h4>
                      <p>June 07, 2020</p>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="badge badge-light">Verified Buyer</span>
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
                <div className="veiw1">
                  <div className="info">
                    <img src={image} alt="" />
                    <div>
                      <h4>Sacha Kariono</h4>
                      <p>June 27, 2020</p>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="badge badge-light">Verified Buyer</span>
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
      <div className="mycontainer destance ">
        <div className="row rProudt ">
          <h2>Related products</h2>
        </div>
        <div className="row">
          {products.slice(products.length - 4, products.length).map((product, index) => {
            return (
                <div className="c-product-thumb" key={index}>
                <ProductItem product={product} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="modal-body">
              <div className="container">
                <div className="row d-flex align-items-center" className="first">
                  <div
                    className="col-6 col-sm-12 col-lg-6 justify-content-center"
                    className="second"
                  >
                    <div id="myCarousel" className="carousel slide">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                      </div>

                      <ol className="carousel-indicators">
                        <li
                          data-target="#myCarousel"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                      </ol>

                      <a
                        className="carousel-control-prev"
                        href="#myCarousel"
                        role="button"
                        data-slide="prev"
                      >
                        <span className="fas fa-chevron-left"></span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#myCarousel"
                        role="button"
                        data-slide="next"
                      >
                        <span className="fas fa-chevron-right"></span>
                      </a>
                    </div>
                  </div>

                  <div className="sPart col-6 col-sm-12 col-lg-6">
                    <div className="home">
                      <h1 className="icons">Albert Armchair, Nubuck White</h1>
                      <div className="view">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <h2 className="para">$120</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </p>
                    </div>
                    <div id="addTo">
                      <a className="is-minus">-</a>
                      <input className="quantity-input" type="text" value="1" />
                      <a className="quantity-button is-plus">+</a>
                      <a className="btnCard">
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
