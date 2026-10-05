import { IconTrophy, IconRocket, IconFileText } from '@tabler/icons-react';
import './Experience.css';

const Leadership = () => {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <h2 className="section-title fade-up">Extracurricular & Leadership</h2>
        <div className="timeline">
          <div className="timeline-item fade-up delay-100">
            <div className="timeline-date">Jan 2023 – May 2026</div>
            <div className="timeline-content">
              <h3>Motridox Robotics</h3>
              <span className="timeline-role">Embedded Systems & Hardware Lead | Student Robotics Group, Malappuram, Kerala</span>
              <p className="timeline-desc">
                Led hardware design and embedded software for custom robotic prototypes in a student robotics group based in Malappuram, Kerala. Responsibilities included electronic hardware assembly, microcontroller programming, sensor integration, and system debugging. Authored technical reports and comprehensive documentation.
              </p>
              <div className="achievement-badges">
                <span className="badge"><IconTrophy size={16} /> 2nd Place — Zilkathon Hackathon</span>
                <span className="badge"><IconRocket size={16} /> NASA Space Apps 2023, 2024 & 2025 — Galactic Problem Solver</span>
                <span className="badge"><IconFileText size={16} /> Research Publication — IJCRT March 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
