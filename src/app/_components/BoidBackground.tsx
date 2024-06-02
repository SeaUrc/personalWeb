// ~/app/_components/BoidBackground.tsx
import React, { useEffect, useRef, useState } from 'react';

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const BoidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boidsRef = useRef<Boid[]>([]);
  const cursorRef = useRef({ x: 0, y: 0, isRepelling: false });
  const influenceRadius = 300; // The radius of influence

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initBoids = () => {
      const boids: Boid[] = [];
      for (let i = 0; i < 50; i++) {
        boids.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 4 - 2,
          size: Math.random() * 3 + 2 // Random size between 2 and 5
        });
      }
      boidsRef.current = boids;
    };

    const updateBoids = () => {
      boidsRef.current.forEach(boid => {
        // React to cursor
        const dx = cursorRef.current.x - boid.x;
        const dy = cursorRef.current.y - boid.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < influenceRadius) {
          const influence = 0.03 * (1 - dist / influenceRadius) ** 2; // Quadratic falloff
          const repelFactor = cursorRef.current.isRepelling ? -1.5 : 1; // Stronger repulsion

          boid.vx += dx * influence * repelFactor;
          boid.vy += dy * influence * repelFactor;

          // Visual feedback: boid size
          const targetSize = 2 + 6 * (1 - dist / influenceRadius);
          boid.size += (targetSize - boid.size) * 0.1; // Smooth transition
        } else {
          // Return to original size when out of range
          boid.size += (3.5 - boid.size) * 0.1; // Average size is 3.5
        }

        // Apply max speed (higher when repelling)
        const speed = Math.sqrt(boid.vx * boid.vx + boid.vy * boid.vy);
        const maxSpeed = cursorRef.current.isRepelling ? 10 : 5;
        if (speed > maxSpeed) {
          boid.vx = (boid.vx / speed) * maxSpeed;
          boid.vy = (boid.vy / speed) * maxSpeed;
        }

        // Update position
        boid.x += boid.vx;
        boid.y += boid.vy;

        // Wrap around screen
        if (boid.x < 0) boid.x = canvas.width;
        if (boid.x > canvas.width) boid.x = 0;
        if (boid.y < 0) boid.y = canvas.height;
        if (boid.y > canvas.height) boid.y = 0;
      });
    };

    const drawBoids = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw influence circle
      if (cursorRef.current.isRepelling) {
        const gradient = ctx.createRadialGradient(cursorRef.current.x, cursorRef.current.y, 0, cursorRef.current.x, cursorRef.current.y, influenceRadius);
        gradient.addColorStop(0, 'rgba(255, 100, 100, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 100, 100, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cursorRef.current.x, cursorRef.current.y, influenceRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw boids
      boidsRef.current.forEach(boid => {
        const dist = Math.sqrt((cursorRef.current.x - boid.x)**2 + (cursorRef.current.y - boid.y)**2);
        const alpha = dist < influenceRadius ? 0.1 + 0.6 * (1 - dist / influenceRadius) : 0.7;
        ctx.fillStyle = cursorRef.current.isRepelling ? `rgba(255, 100, 100, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
        
        ctx.beginPath();
        ctx.arc(boid.x, boid.y, boid.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      updateBoids();
      drawBoids();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) { // Right mouse button
        e.preventDefault(); // Prevent context menu
        cursorRef.current.isRepelling = true;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 2) { // Right mouse button
        cursorRef.current.isRepelling = false;
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // Prevent context menu globally
    };

    resizeCanvas();
    initBoids();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
    />
  );
};

export default BoidBackground;