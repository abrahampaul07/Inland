import React from 'react';
import './Cardd.css'

const Card = ({ image, title, location }) => {
  return (
    <div className="card" data-aos="fade-left" data-aos-duration="2000">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-loc">{location}</p>
      </div>
      <style jsx>{`
        .card {
          width: 320px;
          border: 1px solid grey;
          border-radius: 5px;
          overflow: hidden;
          margin: 20px;
        //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
        box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
        }
        
        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .card-loc {
          display: flex;
          justify-content: start;
          padding: 2px;
          text-transform: uppercase;
          opacity:0.4;
          font-size: 12px;
        }
        
        .card-content {
          padding: 10px;
          margin: 0;
        }
        
        .card-title {
          display: flex;
          justify-content: start;
          text-transform: uppercase;

          font-size: 20px;
          /* margin-bottom: 10px; */
        }
      `}</style>
    </div>
  );
};

export default Card;
