import React, { useEffect } from "react";
import './style.css'
function Instructor() {
  useEffect(() => {
    document.title = "Jeeva Joy | Instructors | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <div className="videos_Grid">
        {/* //video 1 */}
        <div style={{position:'relative',paddingTop:'56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true" title="9" loading="eager" style={{border:'0',position:'absolute',top:'0',height:'100%',width:'100%'}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
        {/* video2 */}
        <div style={{position:'relative',paddingTop:'56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true" title="8" loading="eager" style={{border:'0',position:'absolute',top:'0',height:'100%',width:'100%'}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
        {/* video 3 */}
        <div style={{position:'relative',paddingTop:'56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true" title="7" loading="eager" style={{border:'0',position:'absolute',top:'0',height:'100%',width:'100%'}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
         {/* //video 4 */}
         <div style={{position:'relative',paddingTop:'56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true" title="10" loading="eager" style={{border:'0',position:'absolute',top:'0',height:'100%',width:'100%'}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
        {/* video 5 */}
        <div style={{position:'relative',paddingTop:'56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true" title="11" loading="eager" style={{border:'0',position:'absolute',top:'0',height:'100%',width:'100%'}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
        {/* video 6 */}
        <div style={{position:'relative',paddingTop:'56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true" title="12" loading="eager" style={{border:'0',position:'absolute',top:'0',height:'100%',width:'100%'}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
      </div>
    </div>
  );
}

export default Instructor;
