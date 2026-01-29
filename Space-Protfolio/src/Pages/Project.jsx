import { projects } from "../Data/Project";
import "../Styles/Project.css";

const Project = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects 🛸</h1>
        <p className="projects-subtitle">Exploring innovative ideas through code</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-image">{project.image}</div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a href={project.link} className="btn-small">Live Demo</a>
                <a href={project.github} className="btn-small">Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;