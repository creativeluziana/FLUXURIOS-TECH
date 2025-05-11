import React from 'react';
import '../../styles/WhatWeBuild.css';
import BlurEffect from '../../assets/Blur.png';

const services = [
  {
    title: 'Websites',
    image: 'src/assets/landzy.png',
  },
  {
    title: 'Mobile Apps',
    image: 'src/assets/landzy.png',
  },
  {
    title: 'Backend Systems',
    image: 'src/assets/landzy.png',
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
                <h3>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
