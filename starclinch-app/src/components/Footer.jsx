import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="org">
          <h1>StarClinch</h1>
          <img
            id="logo2"
            src="https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png"
            alt="btnpng"
          />
        </div>
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Buyers</h4>
            <a href="/">
              <p className="linkA">Our Buyers</p>
            </a>
            <a href="/">
              <p className="linkA">Browse</p>
            </a>
            <a href="/">
              <p className="linkA">Post Your Requirement</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>For Artists</h4>
            <a href="/">
              <p className="linkA">Login</p>
            </a>
            <a href="/">
              <p className="linkA">Artist SignUp</p>
            </a>
            <a href="/">
              <p className="linkA">Jobs</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>About Us</h4>
            <a href="/">
              <p className="linkA">Our Story</p>
            </a>
            <a href="/">
              <p className="linkA">Career</p>
            </a>
            <a href="/">
              <p className="linkA">Blogs</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Policy</h4>
            <a href="/">
              <p className="linkA">Terms Of Use</p>
            </a>
            <a href="/">
              <p className="linkA">Disclaimer</p>
            </a>
            <a href="/">
              <p className="linkA">FAQs</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Follow Us</h4>
            <div className="socialmedia">
              <p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
                  alt=""
                />
              </p>
              <p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2168/2168336.png"
                  alt=""
                />
              </p>
              <p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png"
                  alt=""
                />
              </p>
              <p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384012.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <hr />

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} VINSM Globe Pvt. Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <img
              className="footer-img"
              src="https://verdant-biscuit-f278ad.netlify.app/payment.c2c1222d.png"
              alt=""
            />
            <a href="/">
              <div>
                <p className="linkA">Security</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p className="linkA"> Declerations</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
