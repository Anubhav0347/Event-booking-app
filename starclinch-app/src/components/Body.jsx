import React from "react";
import Celebrity from "./Celebrity";


const Body = () => {
  const celebs = [
    {
      name: "Adele",
      image: "https://younghollywood.com/images/stories/adele(8).webp",
      description:
        "Adele is a British singer-songwriter known for her soulful voice.",
      link: "https://en.wikipedia.org/wiki/Adele",
    },
    {
      name: "Ed Sheeran",
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2022/11/Ed-Sheeran.jpg?quality=75&strip=all&w=744",
      description:
        "Ed Sheeran is an English singer-songwriter known for his acoustic pop hits.",
      link: "https://en.wikipedia.org/wiki/Ed_Sheeran",
    },
    {
      name: "Beyonce",
      image:
        "https://www.fijivillage.com/news_images/71507548063dad69a0a3c2988d2368.jpg",
      description:
        "Beyonce is an American singer, dancer, and actress known for her powerful voice and energetic performances.",
      link: "https://en.wikipedia.org/wiki/Beyonc%C3%A9",
    },
    {
      name: "Zakir Khan",
      image: "https://www.dailypioneer.com/uploads/2021/story/images/big/zakir-khan-on-most-interesting-thing-about-being-stand-up-comic-2021-03-22.jpg",
      description:"Zakir Khan is an Indian comedian. Famous for his gigs and emotional sets.",
      link: "https://en.wikipedia.org/wiki/Zakir_Khan_(comedian)",
    },
    {
      name: "Tanmay Bhat",
      image:
        "https://www.thestatesman.com/wp-content/uploads/2018/10/Tanmay-Bhat.png",
      description:
        "Tanmay Bhat is an Indian YouTuber, comedian, scriptwriter, Actor, performer and producer",
      link: "https://en.wikipedia.org/wiki/Tanmay_Bhat",
    },
    {
      name: "Kapil Sharma",
      image: "https://static.toiimg.com/photo/msid-94118633/94118633.jpg",
      description: "Kapil Sharma is an Indian stand-up comedian, television host, actor, producer & singer",
      link: "https://en.wikipedia.org/wiki/Kapil_Sharma",
    },
    {
      name:"Bhuvan Bam",
      image:"https://image.fresherslive.com/latestnews/2023/02/who-are-bhuvan-bam-parents-bhuvan-bam-biography-parents-name-and-more-63f7547bc1a5249667234-900.webp",
      description:"Bhuvan Bam is an Indian comedian, writer, singer, actor, songwriter, and YouTube personality",
      link:"https://en.wikipedia.org/wiki/Bhuvan_Bam"
    },
    {
      name:"Yashraj Mukhate",
      image:"https://th-i.thgim.com/public/incoming/lz6oys/article66667362.ece/alternates/FREE_1200/Yashraj%20Mukhate2.jpg",
      description:"Yashraj Mukhate is an Indian music producer, composer and social media personality.",
      link:"https://en.wikipedia.org/wiki/Yashraj_Mukhate"
    },
    {
      name:"Suhani Shah",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
      description:"Suhani Shah is an Indian mentalist, magician, and YouTuber",
      link:"https://en.wikipedia.org/wiki/Suhani_Shah"
    }
  ];

  return (
    <div className="body">
      <div className="welcome">
        <h1>Welcome to StarClinch</h1>
        <br />
        <button id="booking">
          <p>Book your stars</p>
        </button>
        <br /> <br />
        <p>Client satisfaction is our ultimate goal.</p>
        <p> Driven by client feedback and ready to walk the extra mile.</p>
      </div>
      <br />
      <hr /><br />
      <div className="body1">
        <h1>Shortlist</h1>
      </div>

      <div className="body2">
        <h1>Details:</h1> <br />
      </div>

      <div className="body3">
        <h2>
          Event: <span className="event">2023-02-22</span>
        </h2>
        <h2>
          Location: <span className="event">Delhi, India</span>
        </h2><br />
        <h2>
          Budget: <span className="event2">₹500,000</span>
        </h2>
      </div>
       <hr /><br />
      <div className="body1">
        <h1>Celebrities</h1>
      </div>
      <div className="body4">
        <h2>Select an artist that matches your vibe</h2>
      </div>

      <div className="celeb-div">
        {celebs.map((celeb) => (
          <Celebrity
            key={celeb.name}
            image={celeb.image}
            name={celeb.name}
            description={celeb.description}
            link={celeb.link}
          />
        ))}
      </div>
      <div className="tac">
        <div className="tac1">
          <h1>6000+ Users trust StarClinch.</h1>
        </div>
        <div className="tac2">
          <p>Booking Terms & Conditions</p>
        </div>
        <div className="tac1">
          <h2>BOOKING TERMS & CONDITIONS FOR CLIENT</h2>
        </div>
        <div className="tac2">
          <p>Advance Fee and Payment Terms </p>
        </div>

        <div className="tac3">
          <p>All acts are subject to availability </p>
          <p>GST @18% will be applicable </p>
          <p>We take an advanceof 50% to confirm a show </p>
          <p>Quotation is valid for 14 days and subject to change </p>
          <p>The balance amount needs to be paid 7 days before the show</p>
          <p>
            TBL(Travel, Boarding & Lodging) will be arranged by the organizer
          </p>
          <p>
            Tech-Rider (sound, stage & lighting) will be arranged by the
            organizer
          </p>
          <p>EMI is applicable for payments made by Credit Cards only</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
