import React, {useEffect} from 'react';

const Aboutus = () => {
  useEffect(() => {
    document.title = "Jeeva Joy | About Us | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <section>
        <h6>
          Welcome to JeevaJoy, a website dedicated to promoting healthy lifestyles for children through fun and engaging exercise videos. Our mission is to inspire kids to stay active and healthy while having fun at the same time.
          <br /><br />
          At JeevaJoy, we believe that exercise should be an enjoyable experience for kids. That’s why we’ve created a collection of exercise videos that are designed to be fun, engaging, and easy to follow. Our videos are suitable for kids of all ages and fitness levels, and they cover a wide range of exercises, from yoga and dance to strength training and cardio.
          <br /><br />
          Our team of experienced trainers and fitness experts are passionate about helping kids stay healthy and active. We’re committed to providing high-quality exercise videos that are not only fun to watch but also effective in promoting physical fitness and overall well-being.
          <br /><br />
          We hope that our videos will inspire your kids to get up and get moving, and that they’ll have fun while doing it.
          <br /><br />
          Thank you for choosing JeevaJoy as your go-to source for kids’ exercise videos!
        </h6>
      </section>
    </div>
  );
};

export default Aboutus;
