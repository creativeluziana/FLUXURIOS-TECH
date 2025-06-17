import React from 'react';
import '../../styles/Home/Testimonials.css';
import BlurEffect from '../../assets/Blur.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=SJ",
      quote: "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration."
    },
    {
      name: "Michael Chen",
      role: "Founder of HealthTech",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=MC",
      quote: "The speed and precision with which they executed our project was remarkable. Their innovative approach and technical expertise helped us launch ahead of schedule."
    },
    {
      name: "Emma Davis",
      role: "Product Lead at SaaS Co",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=ED",
      quote: "From concept to launch, Fluxurious demonstrated exceptional professionalism. Their agile methodology and clear communication made the development process smooth and efficient."
    }
  ];

  return (
    <section className="testimonials">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      <div className="container">
        <div className="section-header">
          <h2>Client Success Stories</h2>
          <p>Don't just take our word for it. Here's what our clients have to say about working with us.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-author">
                <div className="author-image-container">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p className="quote">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 