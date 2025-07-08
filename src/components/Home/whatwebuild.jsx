import React from 'react';
import '../../styles/Home/WhatWeBuild.css';
import BlurEffect from '../../assets/Blur.png';
import LandzyImage from '../../assets/landzy.png';

const services = [
  {
    title: 'Websites',
    image: LandzyImage,
  },
  {
    title: 'Mobile Apps',
    image: LandzyImage,
  },
  {
    title: 'Backend Systems',
    image: LandzyImage,
  },
];

export default function WhatWeBuild() {
  return (
    <section className="what-we-build">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      <div className="container">
        <div className="section-header">
          <h2>What We Build</h2>
          <p>
            High-performance websites, sleek mobile apps, and powerful<br />
            backend systems — all delivered in just one week.
          </p>
        </div>

        <div className="cards-grid">
          {services.map(({ title, image }, index) => (
            <div key={index} className="card-wrapper">
              <div className="card-outer-border">
                <div className="card-inner">
                  <div className="card-content">
                    <img src={image} alt={title} />
                  </div>
                  <div className="card-footer">
                  </div>
                </div>
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
