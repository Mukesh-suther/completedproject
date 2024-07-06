import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import banner1 from './../../assets/images/banner 1080-566px.png'
import banner2 from './../../assets/images/banner 1080-566px.png'
import banner3 from './../../assets/images/banner 1080-566px.png'
import educationprogram1 from "./../../assets/images/front-view-children-playing-together-kindergarten@2x (1).jpg";
import educationprogram2 from "./../../assets/images/pexels-cottonbro-3662628@2x.jpg";
import educationprogram3 from "./../../assets/images/mother-daughter-having-fun-with-paint@2x.jpg";
import educationprogram4 from "./../../assets/images/pexels-cottonbro-3662803@2x.jpg";
import educationprogram5 from "./../../assets/images/pexels-cottonbro-3662800-1@2x.jpg";
import educationprogram6 from "./../../assets/images/front-view-children-playing-together-kindergarten@2x (1).jpg";
function Home() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  var bnnersettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
  }
  useEffect(() => {
    document.title = "Jeeva Joy | Home | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <div className="homepage_banner" style={{maxWidth:'1080px', margin:"auto"}}>
        <Slider {...bnnersettings}>
          <Link to="https://www.watch.jeevajoy.com/">
          <img src={banner1} alt="banner1" />
          </Link>
          <Link to="https://www.watch.jeevajoy.com/">
          <img src={banner2} alt="banner2" />
          </Link>
          <Link to="https://www.watch.jeevajoy.com/">
          <img src={banner3} alt="banner3" />
          </Link>
        </Slider>
      </div>
      <section className="homepage_section1">
        <div className="videos_container" style={{marginBottom:'0px'}}>
        <h1 style={{paddingBottom:'10px', marginBottom:'0px', paddingTop:'10px'}}>Meet Your Teachers</h1>
        <Slider {...settings}>
          <Link to="/instructors" className="img_1">
            <img src={educationprogram1} alt="images" />
          </Link>
          <Link to="/instructors" className="img_2">
            <img src={educationprogram2} alt="images" />
          </Link>
          <Link to="/instructors" className="img_3">
            <img src={educationprogram3} alt="images" />
          </Link>
          <Link to="/instructors" className="img_4">
            <img src={educationprogram4} alt="images" />
          </Link>
          <Link to="/instructors" className="img_5">
            <img src={educationprogram5} alt="images" />
          </Link>
          <Link to="/instructors" className="img_6">
            <img src={educationprogram6} alt="images" />
          </Link>
        </Slider>
        </div>
        {/* <div className="section_inner">
          <h1>Meet Your Teachers</h1>
        </div>
        <div className="homepage_gallery">
          <div className="homepagegalleryinner">
            <div className="masonry-item">
              <div>
                <img src={educationprogram1} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram2} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram3} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram4} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram5} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram6} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <p>
          {" "}
          <span>Join us today and watch all the exercise videos!..</span>{" "}
        </p>
      </section>
    </div>
  );
}

export default Home;
