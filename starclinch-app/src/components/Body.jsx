import React from "react";
import Celebrity from "./Celebrity";

const Body = () => {
  const celebs = [
    {
      name: "Adele-Singer",
      imgs: [
        {
          id: 0,
          value: "https://younghollywood.com/images/stories/adele(8).webp",
        },
        {
          id: 1,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
        {
          id: 2,
          value:
            "https://nypost.com/wp-content/uploads/sites/2/2022/11/Ed-Sheeran.jpg?quality=75&strip=all&w=744",
        },
      ],
      description: "Loc:London    Event-No.:1728834",
    },
    {
      name: "Ed Sheeran-The Jazz",
      imgs: [
        {
          id: 0,
          value:
            "https://nypost.com/wp-content/uploads/sites/2/2022/11/Ed-Sheeran.jpg?quality=75&strip=all&w=744",
        },
        {
          id: 1,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
        {
          id: 2,
          value:
            "https://www.thestatesman.com/wp-content/uploads/2018/10/Tanmay-Bhat.png",
        },
      ],
      description: "Loc:New-York      Event-No.:123734",
    },
    {
      name: "Beyonce-Lori Singer",
      imgs: [
        {
          id: 0,
          value:
            "https://www.fijivillage.com/news_images/71507548063dad69a0a3c2988d2368.jpg",
        },
        {
          id: 1,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
        {
          id: 2,
          value:
            "https://www.thestatesman.com/wp-content/uploads/2018/10/Tanmay-Bhat.png",
        },
      ],
      description: "Loc:California      Event-No.:12383734",
    },
    {
      name: "Zakir Khan-Raw Comedy",
      imgs: [
        {
          id: 0,
          value:
            "https://www.dailypioneer.com/uploads/2021/story/images/big/zakir-khan-on-most-interesting-thing-about-being-stand-up-comic-2021-03-22.jpg",
        },
        {
          id: 1,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
        {
          id: 2,
          value:
            "https://nypost.com/wp-content/uploads/sites/2/2022/11/Ed-Sheeran.jpg?quality=75&strip=all&w=744",
        },
      ],
      description: "Loc:Indore       Event-No.:197364",
    },
    {
      name: "Tanmay Bhat- Improv Comedy",
      imgs: [
        {
          id: 0,
          value:
            "https://www.thestatesman.com/wp-content/uploads/2018/10/Tanmay-Bhat.png",
        },
        {
          id: 1,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
        {
          id: 2,
          value:
            "https://th-i.thgim.com/public/incoming/lz6oys/article66667362.ece/alternates/FREE_1200/Yashraj%20Mukhate2.jpg",
        },
      ],
      description: "Loc:Bengaluru     Event-No.:193834",
    },
    {
      name: "Kapil Sharma-Stand-Up Comedy",
      imgs: [
        {
          id: 0,
          value: "https://static.toiimg.com/photo/msid-94118633/94118633.jpg",
        },
        {
          id: 1,
          value:
            "https://th-i.thgim.com/public/incoming/lz6oys/article66667362.ece/alternates/FREE_1200/Yashraj%20Mukhate2.jpg",
        },
        {
          id: 2,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
      ],
      description: "Loc:Amritsar      Event-No.:32334",
    },
    {
      name: "Bhuvan Bam-Youtuber",
      imgs: [
        {
          id: 0,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/b/b7/Bhuvan_Bam_at_Taaza_Khabar%27s_success_party_%28cropped%29.jpg",
        },
        {
          id: 1,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
        {
          id: 2,
          value: "https://static.toiimg.com/photo/msid-94118633/94118633.jpg",
        },
      ],
      description: "Loc:Delhi      Event-No.:822334",
    },
    {
      name: "Yashraj Mukhate-Music",
      imgs: [
        {
          id: 0,
          value:
            "https://th-i.thgim.com/public/incoming/lz6oys/article66667362.ece/alternates/FREE_1200/Yashraj%20Mukhate2.jpg",
        },
        {
          id: 1,
          value:
            "https://nypost.com/wp-content/uploads/sites/2/2022/11/Ed-Sheeran.jpg?quality=75&strip=all&w=744",
        },
        {
          id: 2,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
      ],
      description: "Loc:Mumabi     Event-No.:187654",
    },
    {
      name: "Suhani Shah-Magician",
      imgs: [
        {
          id: 0,
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
        },
        {
          id: 1,
          value: "https://static.toiimg.com/photo/msid-94118633/94118633.jpg",
        },
        {
          id: 2,
          value:
            "https://www.dailypioneer.com/uploads/2021/story/images/big/zakir-khan-on-most-interesting-thing-about-being-stand-up-comic-2021-03-22.jpg",
        },
      ],
      description: "Loc:Mumbau     Event-No.:12764",
    },
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
      <hr />
      <br />
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
        </h2>
        <br />
        <h2>
          Budget: <span className="event2">₹500,000</span>
        </h2>
      </div>
      <hr />
      <br />
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
            imgs={celeb.imgs}
            name={celeb.name}
            description={celeb.description}
          />
        ))}
      </div>
      <div className="tac">
        <div className="tac1">
          <h1>6000+ Users trust StarClinch.</h1>
        </div>
        <div className="tac2">
          <p>No. Terms & Conditions</p>
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
