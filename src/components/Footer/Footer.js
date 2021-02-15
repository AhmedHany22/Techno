import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import appleImg from "../../assets/apple.png";
import googleImg from "../../assets/google.png";
import { Button, Form } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer class="container bg-white pt-5 mt-5">
        <div class="p-5 mb-5 First_Section">
          <h3 class="text-center pt-5 pb-3">
            Subscribe to our Newsletter and get 40% off on all products
          </h3>
          <div class="text-center pb-5">
            <Form>
              <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter your email address" className="w-50 d-inline"/>
                <Button variant="primary" type="submit" className="ml-3">Subscribe</Button>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div class="row py-3">
          <div class="col-md-4 d-flex">
            <div class="pr-3">
              <i class="fa fa-history awesome"></i>
            </div>
            <div>
              <p>Easy return</p>
              <p class="text-muted">
                30 day return window without any question asked, just peace of
                mind.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="pr-3">
              <i class="fa fa-globe awesome"></i>
            </div>
            <div>
              <p>Global shipping</p>
              <p class="text-muted">
                We accept order around the globe and deliver to 120 countries.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="pr-3">
              <i class="fa fa-credit-card awesome"></i>
            </div>
            <div>
              <p>Secure payment</p>
              <p class="text-muted">
                Encryption of standard SSL with 128-bit symmetric key
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 footer-padding">
            <h4>Techno</h4>
            <div class="text-muted">
              <p>Jl. 'Alma No.2</p>
              <p>Semanding 35, Surabaia</p>
              <p>Tel: +6281 234 567</p>
              <p>superly@issupersekaly.com</p>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="mr-3 fa fa-instagram awesome"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="mr-3 fa fa-facebook-f awesome"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i class="mr-3 fa fa-youtube awesome"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <i class="mr-3 fa fa-linkedin awesome"></i>
              </a>
            </div>
          </div>
          <div class="col-md-2 footer-padding">
            <h5 class="mb-4">Company</h5>
            <a class="mb-2 text-decoration-none d-block" href="#">
              About
            </a>
            <a class="mb-2 text-decoration-none d-block" href="#">
              Contact
            </a>
          </div>
          <div class="col-md-3 footer-padding">
            <h5 class="mb-4">Categories</h5>
            <a class="mb-2 text-decoration-none d-block" href="#">
              Computer accessories
            </a>
            <a class="mb-2 text-decoration-none d-block" href="#">
              Computer pc
            </a>
            <a class="mb-2 text-decoration-none d-block" href="#">
              Laptop
            </a>
            <a class="mb-2 text-decoration-none d-block" href="#">
              Smart screen
            </a>
          </div>
          <div class="col-md-3 footer-padding">
            <h5 class="mb-4">Get Our Store App</h5>
            <p>
              <img src={googleImg} className="logo" />
            </p>
            <p>
              <img src={appleImg} className="logo" />
            </p>
          </div>
        </div>
        <hr/>
        <div class="row pt-3">
          <div class="col-sm-12 col-md-9 row">
            <span class="text-muted pr-3">
              ©2020 Super sekaly. All rights reserved.
            </span>
            <span class="text-muted pr-3">Privacy Policy</span>
            <span class="text-muted pr-3">Term Of Service</span>
          </div>
          <div class="col-sm-12 col-md-12 px-0">
            <p class="text-muted last-word">Made in Surabaja, Indonesia</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
