"use client";

import { useEffect, useRef } from "react";

const particleCount = 700;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const baseTTL = 100;
const rangeTTL = 500;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseSize = 2;
const rangeSize = 10;
const baseHue = 200;
const rangeHue = 60;
const backgroundColor = "hsla(230,50%,5%,1)";
const HALF_PI = Math.PI / 2;

// Small helper functions, standard for this kind of particle animation
const rand = (max: number) => Math.random() * max;
const angle = (x1: number, y1: number, x2: number, y2: number) =>
  Math.atan2(y2 - y1, x2 - x1);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const fadeInOut = (life: number, ttl: number) => {
  const half = ttl * 0.5;
  return life < half ? life / half : (ttl - life) / half;
};

export default function CoalesceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvasA = document.createElement("canvas");
    const canvasB = document.createElement("canvas");
    canvasB.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `;
    container.appendChild(canvasB);

    const ctxA = canvasA.getContext("2d")!;
    const ctxB = canvasB.getContext("2d")!;

    const center: [number, number] = [0, 0];
    let tick = 0;
    let animationFrameId: number;
    const particleProps = new Float32Array(particlePropsLength);

    function initParticle(i: number) {
      const x = rand(canvasA.width);
      const y = rand(canvasA.height);
      const theta = angle(x, y, center[0], center[1]);
      const vx = Math.cos(theta) * 6;
      const vy = Math.sin(theta) * 6;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const size = baseSize + rand(rangeSize);
      const hue = baseHue + rand(rangeHue);

      particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
    }

    function initParticles() {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    }

    function drawParticle(
      x: number,
      y: number,
      theta: number,
      life: number,
      ttl: number,
      size: number,
      hue: number
    ) {
      const xRel = x - 0.5 * size;
      const yRel = y - 0.5 * size;

      ctxA.save();
      ctxA.lineCap = "round";
      ctxA.lineWidth = 1;
      ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctxA.beginPath();
      ctxA.translate(xRel, yRel);
      ctxA.rotate(theta);
      ctxA.translate(-xRel, -yRel);
      ctxA.strokeRect(xRel, yRel, size, size);
      ctxA.closePath();
      ctxA.restore();
    }

    function updateParticle(i: number) {
      const i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i,
            i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;

      const x = particleProps[i];
      const y = particleProps[i2];
      const theta = angle(x, y, center[0], center[1]) + 0.75 * HALF_PI;
      const vx = lerp(particleProps[i3], 2 * Math.cos(theta), 0.05);
      const vy = lerp(particleProps[i4], 2 * Math.sin(theta), 0.05);
      let life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];
      const size = particleProps[i8];
      const hue = particleProps[i9];

      drawParticle(x, y, theta, life, ttl, size, hue);

      life++;

      particleProps[i] = x + vx * speed;
      particleProps[i2] = y + vy * speed;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life;

      if (life > ttl) initParticle(i);
    }

    function drawParticles() {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }
    }

    function renderGlow() {
      ctxB.save();
      ctxB.filter = "blur(8px) brightness(200%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      ctxB.save();
      ctxB.filter = "blur(4px) brightness(200%)";
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    }

    function render() {
      ctxB.save();
      ctxB.globalCompositeOperation = "lighter";
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    }

    function draw() {
      tick++;
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

      drawParticles();
      renderGlow();
      render();

      animationFrameId = window.requestAnimationFrame(draw);
    }

    function resize() {
      const { innerWidth, innerHeight } = window;
      canvasA.width = innerWidth;
      canvasA.height = innerHeight;
      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
      center[0] = 0.5 * canvasA.width;
      center[1] = 0.5 * canvasA.height;
    }

    // Setup, in the correct order, guaranteed to run once this effect mounts
    resize();
    initParticles();
    draw();

    window.addEventListener("resize", resize);

    // Cleanup: runs when the component unmounts (e.g. navigating away)
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrameId);
      container.removeChild(canvasB);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
}