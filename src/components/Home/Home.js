import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductItem from "../products/product-item/productItem";
import data from "../../data";

const Home = () => {
  const products = data.products;
  return (
    <>
      <div class="section position-relative border-top-bottom-light myBackground">
        <div class="bg-section img-pattern"></div>
        <div class="container position-relative">
          <div class="col lg-12">
            <div class="w-layout-grid c-grid1x2">
              <a id="w-node-65e3e86b6009-47e5635f" href="#" class="link-block w-inline-block">
                <div class="c-gridgallery1__content style2"></div>
                <div class="c-gridgallery1__image adjus"></div>
              </a>
              <a data-w-id="0a231ed8-5fe2-b26e-23bc-3273827aff7e"href="#"class="link-block w-inline-block">
                <div class="c-gridgallery1__content style2">
                  <div class="text-medium is-heading-color weight-is-medium">
                    Spruce time starts!
                  </div>
                  <div class="flexh-align-center">
                    <div class="text-small is-heading-color margin-right-small">
                      Browse collection
                    </div>
                    <div class="iconfont is-11px is-heading-color">
                      <em class="iconfont__no-italize"></em>
                    </div>
                  </div>
                </div>
                <div class="c-gridgallery1__image adjus"></div>
              </a>
              <a data-w-id="b8cbde19-d8ab-99ce-dfb3-64b94bb6dc16"href="#"class="link-block w-inline-block">
                <div class="c-gridgallery1__content style2">
                  <div class="text-medium is-heading-color weight-is-medium">
                    Elegant accessories
                  </div>
                  <div class="flexh-align-center">
                    <div class="text-small is-heading-color margin-right-small">
                      Shop accessories{" "}
                    </div>
                    <div class="iconfont is-11px is-heading-color">
                      <em class="iconfont__no-italize"></em>
                    </div>
                  </div>
                </div>
                <div class="c-gridgallery1__image img2"></div>
              </a>
            </div>
          </div>
        </div>
        <div class="container position-relative">
          <div class="col lg-12">
            <div class="c-ghost-panel">
              <div class="flex-horizontal md-is-wrapping">
                <div class="col lg-4 xs-12">
                  <div class="flexh-align-top md-is-wrapping">
                    <img src="http://detheme.com/templates/rylee/images/chair.png"width="150"alt=""
                      class="margin-right md-margin-bottom"/>
                    <div>
                      <div class="size-h4 margin-bottom">Pressback chairs</div>
                      <ul class="c-checklist margin-bottom">
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Acapulco</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Adirondak</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Aeron</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Beach</a></li>
                      </ul>
                      <a href="#" class="cta-link xs-margin-bottom">
                        <span class="margin-right">View all</span>
                        <span class="fas c-cta1_arrow-hovered"></span>{" "}
                        <span class="fas c-cta1__arrow-normal"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col lg-4 xs-12">
                  <div class="flexh-align-top md-is-wrapping">
                    <img src="http://detheme.com/templates/rylee/images/9409.png"
                      width="136"alt=""class="margin-right md-margin-bottom"/>
                    <div>
                      <div class="size-h4 margin-bottom">Comfy chairs</div>
                      <ul class="c-checklist margin-bottom">
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Bergere</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Bofinger</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Caquetoire</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Chaise</a></li>
                      </ul>
                      <a href="#" class="cta-link xs-margin-bottom">
                        <span class="margin-right">View all</span>
                        <span class="fas c-cta1_arrow-hovered"></span>{" "}
                        <span class="fas c-cta1__arrow-normal"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col lg-4 xs-12">
                  <div class="flex-horizontal flexh-align-top md-is-wrapping">
                    <img src="http://detheme.com/templates/rylee/images/9886.png"
                      width="150"alt=""class="margin-right md-margin-bottom"/>
                    <div>
                      <div class="size-h4 margin-bottom">Startup chairs</div>
                      <ul class="c-checklist margin-bottom">
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Brewster</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Cantilever</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Moris</a></li>
                        <li class="c-checklist__chevron"><a href="#" class="is-body-text-color">Muskoka</a></li>
                      </ul>
                      <a href="#" class="cta-link">
                        <span class="margin-right">View all</span>
                        <span class="fas c-cta1_arrow-hovered"></span>{" "}
                        <span class="fas c-cta1__arrow-normal"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section position-relative">
        <div class="container">
          <div class="col block-centered text-align-center lg-6 md-12">
            <h2>New arrivals</h2>
            <div class="low-text-contrast">
              Our latest armchair collections have been crafted by some of the
              best interior, woodcrafter and also designers in the world
            </div>
          </div>
        </div>
        <div class="container">
          <div class="col lg-12">
            <div class="w-layout-grid c-grid1x5">
              {products.slice(products.length - 4, products.length).map((product, index) => {
                  return (
                    <div class="c-product-thumb" key={index}>
                      <ProductItem product={product} />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
      <div class="section no-padding-top">
        <div class="container">
          <div class="col lg-12">
            <div class="c-lookbook">
              <div class="container container-nested">
                <div class="col lg-1"></div>
                <div class="col lg-6">
                  <div class="pre-title on-dark">The new way to design your home</div>
                  <div class="size-h1 on-dark margin-bottom-double">
                    Checkout our 2019 collections lookbook{" "}
                  </div>
                  <div class="iconfont is-64px on-dark margin-bottom-double">
                    <em class="iconfont__no-italize"></em>
                  </div>
                  <a href="#" class="cta-link on-dark">
                    <span class="margin-right">See all videos</span>{" "}
                    <span class="fas c-cta1_arrow-hovered"></span>{" "}
                    <span class="fas c-cta1__arrow-normal"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section position-relative border-top-bottom-light myBackground">
        <div class="bg-section img-pattern"></div>
        <div class="container position-relative">
          <div class="col block-centered text-align-center lg-6 md-12">
            <h2>Our collection</h2>
            <div>
              Our latest armchair collections have been crafted by some of the
              best interior, woodcrafter and also designers in the world
            </div>
          </div>
        </div>
        <div class="container position-relative">
          <div class="col lg-12">
            <div class="w-layout-grid c-grid2x4">
              <a id="w-node-54979027d4fd-47e5635f"data-w-id="bcca06e4-208c-f58d-c2c1-54979027d4fd"
                href="#"class="link-block w-inline-block">
                <div class="c-gridgallery1__content">
                  <div class="on-dark text-medium weight-is-medium">Furniture to make your home yours</div>
                  <div class="flexh-align-center">
                    <div class="on-dark margin-right-small text-small">Browse furnitures</div>
                    <div class="iconfont on-dark is-11px"><em class="iconfont__no-italize"></em></div>
                  </div>
                </div>
                <div class="c-gridgallery1__image img3"></div>
              </a>
              <a id="w-node-f6dc254893d3-47e5635f"data-w-id="9a215ac5-7e5d-5a84-e2f6-f6dc254893d3"
                href="#"class="link-block w-inline-block">
                <div class="c-gridgallery1__content">
                  <div class="on-dark text-medium weight-is-medium">Bohemian &amp; electic style</div>
                  <div class="flexh-align-center">
                    <div class="on-dark margin-right-small text-small">  View collections</div>
                    <div class="iconfont on-dark is-11px"><em class="iconfont__no-italize"></em></div>
                  </div>
                </div>
                <div class="c-gridgallery1__image img4"></div>
              </a>
              <a id="w-node-05c4d82475fd-47e5635f"data-w-id="0122bd8d-5dc0-da1e-d149-05c4d82475fd"
                href="#"class="link-block w-inline-block">
                <div class="c-gridgallery1__content">
                  <div class="on-dark text-medium weight-is-medium">
                    The finishing touch you&#x27;ve been looking for
                  </div>
                  <div class="flexh-align-center">
                    <div class="on-dark margin-right-small text-small">Shop accessories{" "}</div>
                    <div class="iconfont on-dark is-11px"><em class="iconfont__no-italize"></em></div>
                  </div>
                </div>
                <div class="c-gridgallery1__image img6"></div>
              </a>
              <a id="w-node-9977055c535b-47e5635f"data-w-id="dad733d8-03e7-7ed7-76b0-9977055c535b"
                href="#"class="link-block w-inline-block">
                <div class="c-gridgallery1__content">
                  <div class="on-dark text-medium weight-is-medium">Living room decorations</div>
                  <div class="flexh-align-center">
                    <div class="on-dark margin-right-small text-small">Shop decorations{" "}</div>
                    <div class="iconfont on-dark is-11px"><em class="iconfont__no-italize"></em></div>
                  </div>
                </div>
                <div class="c-gridgallery1__image img5"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="col block-centered text-align-center lg-6 md-12">
            <h2>Special discount products</h2>
          </div>
        </div>
        <div class="container">
          <div class="col lg-12">
            <div class="w-layout-grid c-grid1x4">
              {products.slice(1, 5).map((product, index) => {
                return (
                  <div class="c-product-thumb" key={index}>
                    <ProductItem product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
