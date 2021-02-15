import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {

  return (
    <>
    <div class="container table">
    <div class="row" >
      <div class="col-lg-5 col-sm-12 col-md-12 info">
        <i class="fas fa-quote-left"></i>
        <h2>
          The trouble with programmers is that you can never too late. The future belongs of person with.
        </h2>
        <p>
          It would be great to hear from you! If you got any questions, please
          do not hesitate to send us a message. We are looking forward to hearing
          please do not hesitate to send us a message. It would be great to hear
          from you! If you got any questions, please do not hesitate to send us a message.
        </p>
        <p>
          We are looking forward to hearing please do not hesitate to send us a message.
          We are looking forward to hearing from you!
        </p>
      </div>
      <div class="col-lg-7 col-sm-12 col-md-12">
        <div class="contact">

          <form action="" class="contact-form ">
            <h1 class="contact-heading">contact us</h1>
            <div class="input-group">
              <label>full name *</label>
              <input type="text" class="contact-input" placeholder="Enter Your Name"/>
            </div>
            <div class="input-groups emaildisplay" >
              <div class="input-group">
                <label>email *</label>
                <input type="email" class="contact-input" placeholder="Enter Your Email"/>
              </div>
              <div class="input-group">
                <label>phone*</label>
                <input type="text" class="contact-input" placeholder="Enter Phone Number"/>
              </div>
            </div>
            <div class="input-group">
              <label>Message</label>
              <textarea placeholder="your Message Here...." cols="30" rows="10" class="form-textarea"></textarea>
            </div>
            <input type="submit" value="submit" class="form-btn"/>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid contactBody">
    <div class="row address">
      <div class="col-12">
        <div>
          <h2>New york</h2>
        </div>
        <div>
          <div class="row">
            <div class="col-4">
              <i class="fas fa-map-marked-alt"></i>
              <div class="addrText">
                <h4>ADDRESS</h4>
                <p>
                  17504 Carlton Cuevas Rd, Gulfport, MS, 39503
                </p>
              </div>
            </div>
            <div class="col-4 flex">
              <i class="fas fa-mobile-alt"></i>
              <div class="addrText">
                <h4>PHONE</h4>
                <p>
                  +(704) 279-1249
                </p>
              </div>
            </div>
            <div class="col-4 flex">
              <i class="far fa-envelope"></i>
              <div class="addrText">
                <h4>EMAIL</h4>
                <p>
                  letstalk@webster.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row address">
      <div class="col-12">
        <div>
          <h2>New york</h2>
        </div>
        <div>
          <div class="row">
            <div class="col-4">
              <i class="fas fa-map-marked-alt"></i>
              <div class="addrText">
                <h4>ADDRESS</h4>
                <p>
                  17504 Carlton Cuevas Rd, Gulfport, MS, 39503
                </p>
              </div>
            </div>
            <div class="col-4 flex">
              <i class="fas fa-mobile-alt"></i>
              <div class="addrText">
                <h4>PHONE</h4>
                <p>
                  +(704) 279-1249
                </p>
              </div>
            </div>
            <div class="col-4 flex">
              <i class="far fa-envelope"></i>
              <div class="addrText">
                <h4>EMAIL</h4>
                <p>
                  letstalk@webster.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
    </>
    )
  }
    export default Contact;
