import "../Styles/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="stars"></div>
      <div className="container">
        <div className="home-content">
          <div className="greeting">
            <h1>Welcome to my digital universe</h1>
            <p className="subtitle">I'm <span className="name">Harshal Thorat</span></p>
            <p className="description">
              A passionate Frontend Developer exploring the cosmos of web development. 
              I craft clean, scalable, and user-centric web applications with modern technologies.
            </p>
            <div className="cta-buttons">
              <NavLink to="/Project" className="btn btn-primary">
                View My Projects ✨
              </NavLink>
              <NavLink to="/Contact" className="btn btn-secondary">
                Get In Touch 🚀
              </NavLink>
            </div>
          </div>
          <div className="floating-planets">
            <div className="planet planet-1">🪐</div>
            <div className="planet planet-2">🌍</div>
            <div className="planet planet-3">🌙</div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="arrow-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
