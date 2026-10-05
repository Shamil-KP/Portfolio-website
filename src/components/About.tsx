import './About.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title fade-up">About</h2>
        <div className="about-grid">
          <div className="bio fade-up delay-100">
            <p className="bio-lead">A deep passion for bringing machines to life through elegant engineering.</p>
            <p>I am the Technical Lead at YoungMinds.app in Kozhikode, Kerala, driving end-to-end technical ownership of student innovation and robotics projects from ideation to execution.</p>
            <p>Previously, I served as the Embedded Systems & Hardware Lead at Motridox Robotics (Jan 2023 – May 2026), building robotics prototypes end-to-end with a focus on electronic hardware assembly, microcontroller programming, sensor integration, and computer vision.</p>
            <p>Beyond personal projects, I thrive in collaborative environments. I participated in the prestigious NASA Space Apps Challenge (2023, 2024, 2025), secured 2nd place at the Zilkathon Hackathon, and participated in the Tessient International Exposure Programme in Dubai, UAE. I am also an active member of the NSS, IEDC, and IEEE Student Branch.</p>
          </div>
          <div className="skills-container fade-up delay-200">
            <h3 className="skills-title">Technical Expertise</h3>
            <div className="skills-list">
              {['Python', 'Embedded C', 'Java', 'Spring Boot', 'PostgreSQL', 'MATLAB', 'Arduino IDE', 'ESP32', 'Raspberry Pi', 'OpenCV', 'TensorFlow', 'Flutter', 'REST API', 'IoT', '8051 Microcontroller', 'HDL/VLSI', 'AI/ML', 'Cloud Integration', 'Git & GitHub'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            
            <h3 className="skills-title">Core Domains</h3>
            <div className="domains-list">
              <div className="domain-item">Robotics & Autonomous Systems</div>
              <div className="domain-item">Embedded Systems & Hardware Design</div>
              <div className="domain-item">Technical Leadership & Mentorship</div>
              <div className="domain-item">Computer Vision & AI/ML Integration</div>
              <div className="domain-item">IoT & Smart Systems</div>
              <div className="domain-item">Full-Stack & API Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
