import React, { useRef, useState, useEffect } from 'react';
import './pong.css';

const PongGame = () => {
  // References to the paddles and ball
  const leftPaddleRef = useRef(null);
  const rightPaddleRef = useRef(null);
  const ballRef = useRef(null);

  // State for paddle positions and ball position/velocity
  const [leftPaddleY, setLeftPaddleY] = useState(150);
  const [rightPaddleY, setRightPaddleY] = useState(150);
  const [ball, setBall] = useState({ x: 290, y: 190, vx: 2, vy: 2 });

  // Handle paddle movement
  const handleKeyDown = (e) => {
    if (e.key === 'w') setLeftPaddleY((prev) => Math.max(prev - 20, 0));
    if (e.key === 's') setLeftPaddleY((prev) => Math.min(prev + 20, 300));
    if (e.key === 'ArrowUp') setRightPaddleY((prev) => Math.max(prev - 20, 0));
    if (e.key === 'ArrowDown') setRightPaddleY((prev) => Math.min(prev + 20, 300));
  };

  // Update ball position and handle collisions
  useEffect(() => {
    const interval = setInterval(() => {
      // Ball movement
      x += vx;
      y += vy;

      // Ball collision with top and bottom walls
      if (y <= 0 || y >= 380) vy = -vy;

      // Ball collision with paddles
      if (
        (x <= 20 && y >= leftPaddleY && y <= leftPaddleY + 100) ||
        (x >= 560 && y >= rightPaddleY && y <= rightPaddleY + 100)
      ) {
        vx = -vx;
      }

      // Ball out of bounds
      if (x <= 0 || x >= 580) {
        x = 290;
        y = 190;
        vx = 2;
        vy = 2;
      }

      return { x, y, vx, vy };
    });
  }, 30);

  return () => clearInterval(interval);
}, [leftPaddleY, rightPaddleY]);

// Add event listener for paddle movement
useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);

return (
  <div className="pong-game">
    <div
      ref={leftPaddleRef}
      className="paddle left-paddle"
      style={{ top: leftPaddleY }}
    />
    <div
      ref={rightPaddleRef}
      className="paddle right-paddle"
      style={{ top: rightPaddleY }}
    />
    <div
      ref={ballRef}
      className="ball"
      style={{ left: ball.x, top: ball.y }}
    />
  </div>
);
};

export default PongGame;
