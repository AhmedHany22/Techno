import './About.css';
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";

const About = () => {
  return (
    <>
      <div class="d-flex justify-content-center align-items-center flex-column mb-5 section">
        <div class="container">
          <div class="my-5 text-center text-white">
            <h1>About our company</h1>
            <p>Filling the home with the beautiful creation of armchairs</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="experience my-5">
              <p class="pre-title m-0 small-text text-muted">30 years of excellent</p>
              <h2>Beaufitul craftmanship</h2>
              <div class="details">
                <p class="detail ml-0 mr-3 my-4">Founded in 1984 in Surabaya, Indonesia, Superly Furniture today is one of the most respected and admired home furnishings companies in the world.</p>
                <p class="detail ml-0 mr-3 my-4">Our dining, bedroom, home entertainment, home office and accent furniture is distinguished by beautiful quality craftsmanship and functional features to make your life easier. During over 30 years of operation, our
                  priority has always been to maintain strong relationships with employees, customers, sales representatives and suppliers.</p>
                <p class="detail ml-0 mr-3 my-4">Inspired by the company's core values - Integrity, Caring, Listening, Innovation, Service, Responsibility, Citizenship and Honesty - Superly Furniture gives back to the communities in which we live and work through
                  foundations, active community service and socially and environmentally responsible initiatives.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="experience-image px-4">
              <img class="img-fluid" src={img1}/>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio py-5">
        <div class="container my-5">
          <div class="row my-4">
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal1">
                <img class="img-fluid" src={img1}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img2}/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal2">
                <img class="img-fluid" src={img2}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img3}/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal3">
                <img class="img-fluid" src={img3}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img4}/>
              </div>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal4">
                <img class="img-fluid" src={img4}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img5}/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal5">
                <img class="img-fluid" src={img5}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img6}/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="portfolio-image m-2 m-2" data-toggle="modal" data-target="#modal6">
                <img class="img-fluid" src={img6}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img7}/>
              </div>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal7">
                <img class="img-fluid" src={img7}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal7" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img10}/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal8">
                <img class="img-fluid" src={img10}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal8" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img9}/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="portfolio-image m-2" data-toggle="modal" data-target="#modal9">
                <img class="img-fluid" src={img9}/>
                <div class="image-container d-flex justify-content-center align-items-center">
                  <i class="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal9" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <button type="button" class="close text-white" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-dialog modal-dialog-centered">
                <img class="img-fluid" src={img8}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="founder-details my-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="experience-image pr-5">
                <img class="img-fluid pr-5" src={img8}/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="experience ml-2 pl-2 my-2">
                <p class="pre-title ml-2 small-text text-muted">30 years of excellent</p>
                <h2>Beaufitul craftmanship</h2>
                <div class="details">
                  <p class="detail mr-0 ml-3 my-4">Founded in 1984 in Surabaya, Indonesia, Superly Furniture today is one of the most respected and admired home furnishings companies in the world.</p>
                  <p class="detail mr-0 ml-3 my-4">Our dining, bedroom, home entertainment, home office and accent furniture is distinguished by beautiful quality craftsmanship and functional features to make your life easier. During over 30 years of operation, our
                    priority has always been to maintain strong relationships with employees, customers, sales representatives and suppliers.</p>
                  <p class="detail mr-0 ml-3 my-4">Inspired by the company's core values - Integrity, Caring, Listening, Innovation, Service, Responsibility, Citizenship and Honesty - Superly Furniture gives back to the communities in which we live and work through
                    foundations, active community service and socially and environmentally responsible initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
