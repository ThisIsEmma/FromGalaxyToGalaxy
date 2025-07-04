// components/Starfield.jsx
import React, { useEffect, useRef } from 'react';
import './Starfield.css';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      dx: Math.random() * 0.3 + 0.1
    }));

    function draw() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fill();
        star.x -= star.dx;
        if (star.x < 0) star.x = width;
      }
      requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', () => {
      width=canvas.width = window.innerWidth;
      height=canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="stars-canvas" />;
};

export default Starfield;
