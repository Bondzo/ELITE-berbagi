"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  alpha: number;
  twinkle: number;
};

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let stars: Star[] = [];

    const createStars = (width: number, height: number) => {
      const amount = Math.floor((width * height) / 18000);
      stars = Array.from({ length: amount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.3,
        speedY: Math.random() * 0.12 + 0.03,
        alpha: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005,
      }));
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      createStars(innerWidth, innerHeight);
    };

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y += star.speedY;
        star.alpha += star.twinkle * (Math.random() > 0.5 ? 1 : -1);

        if (star.y > height + 10) {
          star.y = -8;
          star.x = Math.random() * width;
        }

        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.twinkle *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 250, 252, ${star.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(212, 175, 55, 0.45)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
