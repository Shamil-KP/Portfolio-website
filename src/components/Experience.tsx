import './Experience.css';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title fade-up">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item fade-up delay-100">
            <div className="timeline-date">Sep 2026 — Present</div>
            <div className="timeline-content">
              <h3>YoungMinds.app</h3>
              <span className="timeline-role">Technical Lead · Full-time | Kozhikode, Kerala, India (On-site)</span>
              <ul className="timeline-bullets">
                <li>End-to-end technical ownership of student innovation and robotics projects, from ideation to prototype and final execution.</li>
                <li>Mentoring students in robotics, embedded systems, AI/ML, IoT, and hardware-software integration.</li>
                <li>Designing and building reference prototypes using ESP32, Raspberry Pi, sensors, computer vision, and AI tools.</li>
                <li>Planning and conducting technical workshops, maker sessions, innovation programs, and hackathons.</li>
                <li>Troubleshooting complex hardware, firmware, software, and system-integration challenges while developing technical documentation and project guides.</li>
              </ul>
              <div className="tech-pills">
                <span className="tech-pill">Teamwork</span>
                <span className="tech-pill">Project Coordination</span>
                <span className="tech-pill">Robotics</span>
                <span className="tech-pill">Embedded Systems</span>
                <span className="tech-pill">AI/ML</span>
                <span className="tech-pill">IoT</span>
                <span className="tech-pill">Systems Integration</span>
                <span className="tech-pill">Technical Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
