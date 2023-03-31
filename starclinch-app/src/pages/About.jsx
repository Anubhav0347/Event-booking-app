import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">
        Find the perfect Celebrity for your Corporate event.{" "}
      </h1>
      <br />
      <div>
        {" "}
        <button>
          <h2 className="about-btn">Book Now!</h2>
        </button>
      </div>
      <div className="about-body">
        <h3>
          Committed to excellence since 2015.With StarClinch, you can browse and
          hire the best entertainers in India with just a few clicks.
        </h3>
        <h2>We cover all the corners!</h2>
        <h3>Your Events. Our Stars.</h3>
        <div className="about-div">
          <h4>
            StarClinch is a platform to discover and book performance artists
            and live entertainers. Our extensive listing of models, dance
            Troupes, live bands, photographers, musicians and singers serves as
            a tool to find the best talent for your gathering. We are committed
            to help you book high quality entertainers for your weddings,
            parties, inaugurations, corporate events or whenever you have a
            reason to celebrate! Our aim is to bridge the gap between a host and
            an artist, through a secure, cost-effective and transparent medium.
            We are continually working towards nurturing an environment which is
            focused, reliable and opens up an array of opportunities for
            entertainers and organizers.
          </h4>
          <p>
            StarClinch is revolutionizing the live entertainment industry by
            providing a comprehensive solution for booking artists, from
            selection to payment.
          </p>
          <p>
            {" "}
            It's the easiest and most efficient way to hire entertainers for
            events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
