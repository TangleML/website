import React from "react";
import styles from "./HeroSection.module.css";
import { APP_URL } from "../../../../constants";

// Define node positions for connection lines
const nodePositions = [
  { id: "shape1", x: 15, y: 20 }, // top-left
  { id: "shape2", x: 75, y: 30 }, // top-right
  { id: "shape3", x: 30, y: 55 }, // bottom-left
  { id: "shape4", x: 70, y: 70 }, // bottom-right
  { id: "shape5", x: 50, y: 45 }, // center
];

// Define connections between nodes
const connections = [
  { from: 0, to: 4 }, // shape1 to shape5 (center)
  { from: 1, to: 4 }, // shape2 to shape5 (center)
  { from: 2, to: 4 }, // shape3 to shape5 (center)
  { from: 3, to: 4 }, // shape4 to shape5 (center)
  { from: 0, to: 1 }, // shape1 to shape2
  { from: 2, to: 3 }, // shape3 to shape4
];

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Left side - Text content */}
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Build ML and data pipelines collaboratively
              </h1>
              <p className={styles.heroDescription}>
                Tangle is an open source, platform-agnostic experimentation platform with a powerful drag-and-drop editor – no setup required.
              </p>

              <div className={styles.heroButtons}>
                <button
                  className={styles.btnPrimary}
                  onClick={() => (window.location.href = APP_URL)}
                >
                  Start Building
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Geometric abstraction with screenshot */}
            <div className={styles.heroVisual}>
              <div className={styles.geometricContainer}>
                {/* Connection lines SVG */}
                <svg
                  className={styles.connectionLines}
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#ec4899", stopOpacity: 0.4 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#6366f1", stopOpacity: 0.3 }}
                      />
                    </linearGradient>

                    {/* Pulsing gradient for active connections */}
                    <linearGradient
                      id="pulseGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }}
                      >
                        <animate
                          attributeName="stop-opacity"
                          values="0.3;0.6;0.3"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </stop>
                      <stop
                        offset="100%"
                        style={{ stopColor: "#6366f1", stopOpacity: 0.6 }}
                      >
                        <animate
                          attributeName="stop-opacity"
                          values="0.3;0.6;0.3"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </stop>
                    </linearGradient>
                  </defs>

                  {/* Connection lines between nodes */}
                  {connections.map((connection, index) => {
                    const from = nodePositions[connection.from];
                    const to = nodePositions[connection.to];

                    // Calculate control point for curved line
                    const midX = (from.x + to.x) / 2;
                    const midY = (from.y + to.y) / 2;
                    const offsetX = (to.y - from.y) * 0.2;
                    const offsetY = (from.x - to.x) * 0.2;

                    return (
                      <g key={index}>
                        {/* Main connection line */}
                        <path
                          className={styles.connectionLine}
                          d={`M ${from.x} ${from.y} Q ${midX + offsetX} ${
                            midY + offsetY
                          }, ${to.x} ${to.y}`}
                          stroke="url(#lineGradient)"
                          strokeWidth="0.5"
                          fill="none"
                        />
                        {/* Animated pulse overlay */}
                        <path
                          className={styles.connectionPulse}
                          d={`M ${from.x} ${from.y} Q ${midX + offsetX} ${
                            midY + offsetY
                          }, ${to.x} ${to.y}`}
                          stroke="url(#pulseGradient)"
                          strokeWidth="0.3"
                          fill="none"
                          opacity="0.6"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Geometric shapes inside the orbital sphere */}
                <div
                  className={`${styles.geometricShape} ${styles.shape1}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape2}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape3}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape4}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape5}`}
                ></div>

                {/* Mini shapes */}
                <div className={`${styles.miniShape} ${styles.mini1}`}></div>
                <div className={`${styles.miniShape} ${styles.mini2}`}></div>
                <div className={`${styles.miniShape} ${styles.mini3}`}></div>
              </div>

              {/* Hero image in center */}
              <div className={styles.screenshotContainer}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.heroScreenshot}
                >
                  <source src="/video/hero-tangle-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;