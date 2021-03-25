import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./carousel.css";

const Carousel = () => {
  return (
    <div>
      <div>
        <h1>Indian Actor And Actress</h1>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img
                src="https://www.hdnicewallpapers.com/Walls/Big/Bollywood%20Awards/Amitabh_Bachchan_Varun_Dhawan_and_Alia_Bhatt_in_Bollywood_Award_Photo.jpg"
                alt="Los Angeles"
              />
            </div>
            <div className="item">
              <img
                src="https://www.hdnicewallpapers.com/Walls/Big/Bollywood%20Movies/Housefull_3_Movie_Wallpaper.jpg"
                alt="Chicago"
              />
            </div>
            <div className="item">
              <img
                src="https://www.hdnicewallpapers.com/Walls/Big/Other%20Actress/Cute_Smile_of_Urvashi_Rautela_Actress_HD_Wallpaper.jpg"
                alt="New york"
              />
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
