import "../Styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Harshal Thorat</h3>
          <p>Frontend Developer passionate about creating beautiful web experiences.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="#" title="GitHub">🐙</a>
            <a href="#" title="LinkedIn">💼</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="Email">📧</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Harshal Thorat. All rights reserved.</p>
        <p>Built with React • Styled with CSS • Powered by Vite ✨</p>
      </div>
    </footer>
  );
};

export default Footer;
