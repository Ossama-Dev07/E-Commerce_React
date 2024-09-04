import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ac nulla
            commodo fermentum. In hac habitasse platea dictumst.
          </p>

          {/* Your contact information */}
          <div className="d-flex align-items-start gap-2">
            <FaPhone className="m-1" />
            <div>
              <p>Phone: +2126-691-731-34</p>
            </div>
          </div>

          <div className="d-flex align-items-start gap-2">
            <FaEnvelope className=" m-1" />
            <div >
              <p >Email: ossamaasr@gmail.com</p>
            </div>
          </div>

          {/* Social media icons */}
          <div className="mt-4">
            <h5>Connect with us:</h5>
            <div className="d-flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form>
            <form>
              <div className="mb-3 ">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-4">
                Send Message
              </button>
            </form>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
