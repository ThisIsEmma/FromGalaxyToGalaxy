import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';
import '../styles/Hero.css';


const Hero = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      dx: Math.random() * 0.5 + 0.3
    }));

    function draw() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        star.x += star.dx;
        if (star.x > width) {
          star.x = 0;
          star.y = Math.random() * height;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        dx: Math.random() * 0.5 + 0.3
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="background" />
      <div className="content">
        <h1>LLM</h1>
        <p>A journey through AI, narrative, and memory.</p>
        <button className="start-button" onClick={() => navigate('/galaxy-map')}>
  Start
</button>

      </div>
    </>
  );
};

export default Hero;
