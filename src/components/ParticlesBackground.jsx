import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: Add any custom logic after particles are loaded
    console.log('Particles loaded:', container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent" // Let your gradient background show through
          }
        },
        fpsLimit: 120,
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: ["push", "bubble"]
            },
            onHover: {
              enable: true,
              mode: ["grab", "bubble"]
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 3
            },
            grab: {
              distance: 200,
              links: {
                blink: false,
                consent: false,
                opacity: 0.6
              }
            },
            bubble: {
              distance: 250,
              size: 8,
              duration: 2,
              opacity: 0.8,
              speed: 3,
              color: {
                value: ["#00ffff", "#8b5cf6", "#06b6d4"]
              }
            },
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: ["#00ffff", "#8b5cf6", "#06b6d4", "#3b82f6", "#ec4899"]
          },
          links: {
            color: {
              value: ["#00ffff", "#8b5cf6", "#06b6d4"]
            },
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: true,
              color: "#00ffff",
              opacity: 0.05
            }
          },
          collisions: {
            enable: false
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out"
            },
            random: true,
            speed: {
              min: 0.5,
              max: 2
            },
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 80
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.8
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            options: {
              polygon: {
                sides: 6
              }
            }
          },
          size: {
            value: {
              min: 1,
              max: 6
            },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
              color: {
                value: "#ffffff"
              }
            }
          },
          life: {
            count: 0,
            delay: {
              value: 0
            },
            duration: {
              value: 0
            }
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 2,
              sync: false
            }
          },
          stroke: {
            width: 0,
            color: {
              value: "#000000"
            }
          }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 40
                },
                links: {
                  distance: 100
                }
              }
            }
          },
          {
            maxWidth: 480,
            options: {
              particles: {
                number: {
                  value: 25
                },
                links: {
                  distance: 80
                }
              }
            }
          }
        ],
        detectRetina: true,
        smooth: true,
        style: {
          position: "absolute"
        },
        themes: [
          {
            name: "light",
            default: {
              value: false,
              mode: "light"
            },
            options: {
              background: {
                color: {
                  value: "transparent"
                }
              },
              particles: {
                color: {
                  value: ["#1e293b", "#475569", "#64748b"]
                }
              }
            }
          }
        ]
      }}
    />
  );
};

export default ParticlesBackground;