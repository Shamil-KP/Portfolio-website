import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import './Experience.css';

const IndustryExposure = () => {
  return (
    <section className="section" id="industry-exposure">
      <div className="container">
        <h2 className="section-title fade-up">Industry Exposure</h2>
        <div className="timeline">
          <div className="timeline-item fade-up delay-100">
            <div className="timeline-date">Jan 2026</div>
            <div className="timeline-content">
              <h3>International Exposure Programme – Tessient</h3>
              <span className="timeline-role">Selected Participant | Dubai, UAE</span>
              <p className="timeline-desc">
                Acquired exposure to the global industry through participation in a professional programme offered by Tessient, a fintech company based in Dubai. Developed a Card API using Java, Spring Boot, PostgreSQL, Git, REST APIs, and Postman, including development and API testing. Attended a professional client meeting, gaining exposure to the global workplace.
              </p>
              <div className="tech-pills">
                <span className="tech-pill">Java</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Git</span>
                <span className="tech-pill">Postman</span>
                <span className="tech-pill">REST API</span>
              </div>
              <div className="achievement-badges">
                <a 
                  href="https://github.com/Shamil-KP/tessient" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="badge project-repo-badge"
                >
                  <IconBrandGithub size={16} /> github.com/Shamil-KP/tessient <IconExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExposure;
