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
    <div className="columns">
      <div className="column is-one-third">
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel image ${index}`}
              className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="column">
        <h1 className="title">Choose an Option</h1>
        <div className="buttons">
          {/* <NavLink href="/search"> */}
            <button className="button is-primary">Option 1</button>
          {/* </NavLink> */}
          <button className="button is-info">Option 2</button>
          <button className="button is-success">Option 3</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
