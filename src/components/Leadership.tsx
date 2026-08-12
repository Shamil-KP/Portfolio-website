import { IconTrophy, IconRocket, IconFileText } from '@tabler/icons-react';
import './Experience.css';

const Leadership = () => {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <h2 className="section-title fade-up">Extracurricular & Leadership</h2>
        <div className="timeline">
          <div className="timeline-item fade-up delay-100">
            <div className="timeline-date">Jan 2023 – Present</div>
            <div className="timeline-content">
              <h3>Team Member, Motridox Robotics</h3>
              <span className="timeline-role">Student Robotics Group | Manjeri, Kerala</span>
              <p className="timeline-desc">
                Collaborated with a student-led robotics team on IoT, embedded systems, robotics, and automation projects. Contributed to hardware development, programming, system integration, and technical documentation. Participated in hackathons and technical innovation programs.
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
