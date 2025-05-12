import React from 'react';
import { Star } from 'lucide-react';
import '../../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=SJ",
      quote: "Working with Fluxurious was a game-changer. They delivered our MVP in record time without compromising on quality. The team's attention to detail and commitment to excellence is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder of HealthTech",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=MC",
      quote: "The speed and precision with which they executed our project was remarkable. Their innovative approach and technical expertise helped us launch ahead of schedule.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Product Lead at SaaS Co",
      image: "https://placehold.co/100x100/0A0A1B/FFFFFF/png?text=ED",
      quote: "From concept to launch, Fluxurious demonstrated exceptional professionalism. Their agile methodology and clear communication made the development process smooth and efficient.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Client Success Stories</h2>
          <p>Don't just take our word for it. Here's what our clients have to say about working with us.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#AB28FA" color="#AB28FA" />
                  ))}
                </div>
                <p className="quote">{testimonial.quote}</p>
              </div>
              
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 