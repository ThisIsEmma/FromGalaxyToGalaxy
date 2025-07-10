import React, { useEffect, useRef } from 'react';
import '../styles/GalaxyMap.css';
import { useNavigate } from 'react-router-dom';

const planets = [
  { name: 'Language Models', radius: 100, speed: 0.01, size: 30 },
  { name: 'LLMGenerationPipeLine',           radius: 150, speed: 0.007, size: 25 },
  { name: 'Thoughts',    radius: 200, speed: 0.005, size: 28 },
  { name: 'LLMQuestion',        radius: 250, speed: 0.004, size: 22 }
];

const GalaxyMap = () => {
  const planetRefs = useRef([]);
  const navigate = useNavigate();
useEffect(() => {
  let angle = 0;

  const updatePositions = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    planets.forEach((planet, i) => {
      const el = planetRefs.current[i];
      if (!el) return;

      const theta = angle * planet.speed;
      const x = centerX + planet.radius * Math.cos(theta);
      const y = centerY + planet.radius * Math.sin(theta);

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    });
  };

  const animate = () => {
    angle += 1;
    updatePositions();
    requestAnimationFrame(animate);
  };

  const handleResize = () => {
    // triggers full redraw of planet positions
    updatePositions();

    // update orbit ring styles
    const orbitEls = document.querySelectorAll('.orbit');
    orbitEls.forEach((el, i) => {
      const r = planets[i].radius;
      el.style.left = `calc(50% - ${r}px)`;
      el.style.top = `calc(50% - ${r}px)`;
    });
  };

  window.addEventListener('resize', handleResize);
  animate();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
;

  return (
    <div className="galaxy-map">
      {/* optional center core */}
      <div className="center-core" />

      {planets.map((planet, i) => (
        <React.Fragment key={i}>
          {/* Orbit line */}
          <div
            className="orbit"
            style={{
              width: `${planet.radius * 2}px`,
              height: `${planet.radius * 2}px`,
              left: `calc(50% - ${planet.radius}px)`,
              top: `calc(50% - ${planet.radius}px)`
            }}
          />

          {/* Planet */}
          <div
            className="planet"
            ref={(el) => (planetRefs.current[i] = el)}
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              cursor: planet.name === 'Language Models' ? 'pointer' : 'default' 
            }}
            onClick={() => {
            if (planet.name === 'Language Models') {
            navigate('/understanding-General-llms');
    }
            if (planet.name === 'LLMQuestion') {
            navigate('/llm-question');
    }
            if (planet.name === 'LLMGenerationPipeLine') {
            navigate('/storybook');
    }
            if (planet.name === 'Thoughts') {
            navigate('/thoughts-Pop-up');
    }
  }}
          >
            <span className="label">{planet.name}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GalaxyMap;
