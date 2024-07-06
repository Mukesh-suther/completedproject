import React, {useEffect} from 'react';
import './blog.css'
import img1 from './../../assets/images/pexels-cottonbro-3662800-1@2x-676x510.jpg';
import img2 from './../../assets/images/front-view-children-playing-together-kindergarten@2x-676x510.jpg';
import img3 from './../../assets/images/shutterstock_583045492@2x-720x510.jpg';
import { Link } from 'react-router-dom';

const BlogCard = ({ href, imgSrc, editorName, duration, description }) => (
  <Link href={href} className="card">
    <div className="card-img">
      <img src={imgSrc} alt="card image" />
    </div>
    <div className="card_text">
      <div className="data">
        <p className="blog-editorname">{editorName}</p>
        <p className="duration">{duration}</p>
      </div>
      <h1 className="card-description">{description}</h1>
    </div>
  </Link>
);

const Blog = () => {
  useEffect(() => {
    document.title = "Jeeva Joy | Blog | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <section style={{ padding: '20px 0px 80px 0px' }}>
        <h1 style={{ textAlign: 'left', marginBottom: '0px', paddingLeft: '6px' }}>JeevaJoy's Blog</h1>
        <div className="cards-container">
          <BlogCard
            href="https://www.jeevajoy.com/get-groovin-with-jeevajoy-fun-exercise-for-kids-with-sparky-the-squirrel/"
            imgSrc={img1}
            editorName="JEEVA JOE"
            duration="2 MONTHS AGO"
            description="Get Groovin with JeevaJoy: Fun Exercise for Kids with Sparky the Squirrel!"
          />
          <BlogCard
            href="https://www.jeevajoy.com/get-groovin-with-jeevajoy-fun-exercise-videos-for-kids-with-their-favorite-characters/"
            imgSrc={img2}
            editorName="JEEVA JOE"
            duration="2 MONTHS AGO"
            description="Get Groovin with JeevaJoy: Fun Exercise Videos for Kids with their Favorite Characters!"
          />
          <BlogCard
            href="https://www.jeevajoy.com/get-groovin-with-jeevajoy-fun-exercise-videos-for-your-little-superstars/"
            imgSrc={img3}
            editorName="JEEVA JOE"
            duration="2 MONTHS AGO"
            description="Get Groovin with JeevaJoy: Fun Exercise Videos for Your Little Superstars!"
          />
        </div>
      </section>
    </div>
  );
};

export default Blog;
