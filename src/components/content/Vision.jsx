import React, { useState } from 'react';
import './vision.css'; 
function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [, setMouseDirection] = useState(null);
  const handleClick = (section) => {setActiveSection(section); };
  const handleMouseEnter = (section) => {setMouseDirection('enter');setActiveSection(section);};
  const handleMouseLeave = () => {setMouseDirection('leave');setActiveSection(null);};

  return (
    <div className="body-content">
    <div className="container-content">
      <div className="left-section-content">
        <img className="img-content" src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Big" />
        <img className="img-content" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFsdWVzfGVufDB8fDB8fHww" alt="Small"/>
      </div>
      <div className="right-section-content">
        <div className={`section-content vision-content ${activeSection === 'vision-content' ? 'active' : ''}`} onClick={() => handleClick('vision-content')}
        onMouseEnter={() => handleMouseEnter('vision-content')}
        onMouseLeave={handleMouseLeave}>
          <img src="https://cdn-icons-png.freepik.com/256/764/764254.png?ga=GA1.1.424003894.1710176290&" alt="Vision Logo" />
          <h2>Vision</h2>
          <p>Empowering future engineers and computer scientists to excel in their careers through innovative courses and personalized mentorship.</p>
        </div>
        <div className={`section-content mission-content ${activeSection === 'mission-content' ? 'active' : ''}`} onClick={() => handleClick('mission-content')} 
        onMouseEnter={() => handleMouseEnter('mission-content')}
        onMouseLeave={handleMouseLeave}>
          <img src="https://cdn-icons-png.freepik.com/256/610/610064.png?ga=GA1.1.424003894.1710176290&" alt="Mission Logo" />
          <h2>Mission</h2>
          <p>We are committed to fostering a collaborative learning environment, leveraging industry expertise, and embracing innovation to deliver impactful solutions.</p>
        </div>
        <div className={`section-content values-content ${activeSection === 'values-content' ? 'active' : ''}`} onClick={() => handleClick('values-content')}
        onMouseEnter={() => handleMouseEnter('values-content')}
          onMouseLeave={handleMouseLeave}>
          <img src="https://cdn-icons-png.freepik.com/256/8712/8712172.png?ga=GA1.1.424003894.1710176290&" alt="values Logo" />
          <h2>Goal</h2>
          <p><ul>
            <li>Empowerment</li>
            <li>Collaboration</li>
            <li>Diversity and Inclusion</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;