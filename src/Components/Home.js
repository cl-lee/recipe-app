import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);

  return (
    <div className="container is-fluid">
      <div className="columns is-vcentered is-flex-row-reverse">
        <div className="column is-two-thirds">
          <div className="carousel">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`carousel ${index}`}
                className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="column startingLogo">
          <h1 className="title">Meal Mate</h1>
          <div className="buttons">
            <NavLink to="/search">
              <button className="button is-primary">Get Started</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
