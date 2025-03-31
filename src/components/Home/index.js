import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaAtom, FaChartLine } from "react-icons/fa";

import Header from "../Header";
import BuildConvoSection from "../BuildConvoSection";
import Footer from "../Footer";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/events');
  }

  return (
    <div className="home-container">
    <Header />
    <div className="communion-intro">
      <h1 className="home-heading">Connect Communities</h1>
      <p className="home-desc">
        Connecting people of all faiths through events and community support.
      </p>
      <button className="explore-button" onClick={handleNavigation}>Explore Events &gt;</button>
    </div>
    <div className="home-section">
      <div className="home-content">
        <span className="badge">🚀 Unlimited Advantages</span>
        <h1 className="home-title">
          Unite, Innovate, <br /> <span>Connect, Inspire</span> Together
        </h1>
        <div className="profile-group">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User 1" />
          <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" />
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User 3" />
          <span className="more-people">+8 people</span>
        </div>
        <p className="home-description">
          Join us to be part of a community where spirituality meets innovation. 
          Together, we'll build a world that's more inclusive, engaging, and connected than ever before!
        </p>
        <button className="action-button">View Our Services →</button>
      </div>

      <div className="image-gallery">
        <div className="image-container">
          <img src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif" alt="Community 1" />
        </div>
        <div className="image-container">
          <img src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp" alt="Community 2" />
        </div>
        <div className="image-container">
          <img src="https://communionhub.org/static/media/event-3.518ca15d6caff0f2e0c9.avif" alt="Community 3" />
        </div>
      </div>
    </div>
    <div className="why-communion">
      <h2 className="section-title">Why Communion Stands Out!</h2>
      <div className="why-container">
        <div className="why-text">
          <p>
            Communion is more than just a platform—it's a movement. We unite people across different faiths, traditions, and beliefs, 
            fostering collaboration, mutual respect, and inclusivity.
          </p>
          <button className="join-button">Why Join Us? →</button>
        </div>

        <div className="features">
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Unifying Communities</h3>
            <p>We bridge diverse religious communities, creating a vibrant and inclusive space.</p>
            <button className="learn-more">Learn More →</button>
          </div>

          <div className="feature-card">
            <FaAtom className="feature-icon" />
            <h3>Innovative & Fun</h3>
            <p>Experience faith through modern, interactive features and engaging events.</p>
            <button className="learn-more">Learn More →</button>
          </div>

          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Promoting Unity</h3>
            <p>We foster understanding and harmony between faith communities through shared experiences.</p>
            <button className="learn-more">Learn More →</button>
          </div>
        </div>
      </div>
    </div>
    <BuildConvoSection />
    <Footer />
  </div>
  )
};

export default Home;
