import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"
          title="Entire homes"
          description="Local things to do, wherever you are.
 "
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320"
          title="online Experiences"
          description="my description here"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=320"
          title="Farms and nature"
          description="Farms and nature description here"
        />
      </div>
      <div className="home__section">
      <Card
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"
          title="Entire homes"
          description="Local things to do, wherever you are.
 "
        />
        <Card
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"
          description="dogs allowed"
          title="dogs allowed"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
          title="Unique stay"
          description="Unique description here"
          
        />
      </div>
    </div>
  );
};

export default Home;
