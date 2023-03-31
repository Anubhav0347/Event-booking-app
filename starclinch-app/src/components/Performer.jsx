import React from "react";

function Performer() {
  // array of performer objects
  const performers = [
    {
      name: "Adele",
      image: "https://younghollywood.com/images/stories/adele(8).webp",
    },
    {
      name: "Ed Sheeran",
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2022/11/Ed-Sheeran.jpg?quality=75&strip=all&w=744",
    },
    {
      name: "Beyonce",
      image:
        "https://www.fijivillage.com/news_images/71507548063dad69a0a3c2988d2368.jpg",
    },
    {
      name: "Zakir Khan",
      image:
        "https://www.dailypioneer.com/uploads/2021/story/images/big/zakir-khan-on-most-interesting-thing-about-being-stand-up-comic-2021-03-22.jpg",
    },
    {
      name: "Tanmay Bhat",
      image:
        "https://www.thestatesman.com/wp-content/uploads/2018/10/Tanmay-Bhat.png",
    },
    {
      name: "Kapil Sharma",
      image: "https://static.toiimg.com/photo/msid-94118633/94118633.jpg",
    },
    {
      name: "Bhuvan Bam",
      image:
        "https://image.fresherslive.com/latestnews/2023/02/who-are-bhuvan-bam-parents-bhuvan-bam-biography-parents-name-and-more-63f7547bc1a5249667234-900.webp",
    },
    {
      name: "Yashraj Mukhate",
      image:
        "https://th-i.thgim.com/public/incoming/lz6oys/article66667362.ece/alternates/FREE_1200/Yashraj%20Mukhate2.jpg",
    },
    {
      name: "Suhani Shah",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Suhani-Shah-oml-gallery-01.jpg/220px-Suhani-Shah-oml-gallery-01.jpg",
    },
    {
      name: "Ankit tiwari",
      image:
        "https://www.dailypioneer.com/uploads/2018/story/images/big/non-film-music-has-given-facial-identity-to-singers--ankit-tiwari-2018-11-30.jpg",
    },
    {
      name: "Aditya Narayan",
      image:
        "https://c.ndtvimg.com/2021-07/c2ug7oq_aditya-narayan_625x300_20_July_21.jpg",
    },
    {
      name: "Manish Paul",
      image:
        "https://static.toiimg.com/thumb/msid-47527466,width-800,height-600,resizemode-75/47527466.jpg",
    },
  ];

  return (
    <div className="performer_con">
      <div className="performers-container">
        {performers.map((performer) => (
          <div key={performer.id} className="performer">
            <img src={performer.image} alt={performer.name} />
            <h2>{performer.name}</h2>
          </div>
        ))}
      </div>
      <div className="performer-footer">
        <h2>Your favourite stars are performing in your city. Check Now!</h2>
      </div>
    </div>
  );
}

export default Performer;
