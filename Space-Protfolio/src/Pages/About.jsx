import "../Styles/About.css";

const About = () => {
  const skills = {
    frontend: ["React", "JavaScript", "HTML/CSS", "Vite", "Responsive Design"],
    tools: ["Git", "VS Code", "Figma", "DevTools"],
    concepts: ["Component Architecture", "State Management", "REST APIs", "UI/UX Design"]
  };

  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me 🌌</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Harshal Thorat, a Frontend Developer passionate about creating beautiful, 
              functional, and performant web applications. With a keen eye for design and a 
              love for clean code, I strive to build digital experiences that matter.
            </p>
            <p>
              My journey in web development started with a curiosity to understand how websites work, 
              and it has evolved into a mission to create intuitive interfaces that solve real problems.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>📚</h3>
              <p>Always Learning</p>
              <span>Constantly exploring new technologies</span>
            </div>
            <div className="stat-card">
              <h3>⚡</h3>
              <p>Performance</p>
              <span>Building fast & efficient apps</span>
            </div>
            <div className="stat-card">
              <h3>🎨</h3>
              <p>Design-Focused</p>
              <span>Creating beautiful user experiences</span>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Technologies</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                {skills.tools.map((tool, idx) => (
                  <span key={idx} className="skill-tag">{tool}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Core Concepts</h3>
              <div className="skill-tags">
                {skills.concepts.map((concept, idx) => (
                  <span key={idx} className="skill-tag">{concept}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
