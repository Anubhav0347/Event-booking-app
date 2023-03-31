import React from "react";
import Performer from "../components/Performer";
import '../css/performer.css'

const Service = () => {
  return (
    <div>
      <div className="service-container">
        <div id="service-title">
          <h1> Our Services</h1>
        </div>
        <div className="service-body">
          <h3>The Secret Weapon of many Users</h3>
          <p>
            StarClinch has been used to book Celebrities, Singers, Live Bands,
            Musicians, Stand-up Comedians, DJs, Dancers, Emcees, Magicians,
            Photographers for every type of event and every budget. From
            high-school students to corporate big-shots to destination wedding
            planners, everyone has found their entertainer on StarClinch. Dream
            it up! Live it up! Try us now!
          </p>
          <div className="service-av">
            <div className="service-item"><h4>Anchor</h4></div>
            <div className="service-item"><h4>Singer</h4></div>
            <div className="service-item"><h4>Comedian</h4></div>
            <div className="service-item"><h4>Dancer</h4></div>
            <div className="service-item"><h4>DiscJockey</h4></div>
            <div className="service-item"><h4>Magician</h4></div>
            <div className="service-item"><h4>MakeUp</h4></div>
            <div className="service-item"><h4>Photographer</h4></div>
            <div className="service-item"><h4>Videographer</h4></div>
            <div className="service-item"><h4>Live Band</h4></div>
          </div>
          <div className="service-div">
            <Performer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
