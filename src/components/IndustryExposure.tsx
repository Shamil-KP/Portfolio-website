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
              <h3>Tessient</h3>
              <span className="timeline-role">Fintech Industry Exposure Programme</span>
              <p className="timeline-desc">
                Gained international industry exposure through a professional programme at Tessient, a fintech company based in Dubai. Worked with Java, Spring Boot, PostgreSQL, Git, and Postman while developing and testing a Card API project. Set up development environments using IntelliJ IDEA, configured databases, created Git repositories and branches, and implemented REST API functionality. Gained practical exposure to REST APIs, Spring Initializr, database integration, and API testing using Postman. Participated in a professional client meeting and gained insight into the fintech and digital payments ecosystem.
              </p>
              <div className="tech-pills">
                <span className="tech-pill">Java</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Git</span>
                <span className="tech-pill">Postman</span>
                <span className="tech-pill">IntelliJ IDEA</span>
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
