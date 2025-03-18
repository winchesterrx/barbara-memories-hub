
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

interface ParticlesBackgroundProps {
  type?: 'hearts' | 'default' | 'confetti';
}

const ParticlesBackground = ({ type = 'default' }: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getOptions = () => {
    switch (type) {
      case 'hearts':
        return {
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#FF758F"
            },
            shape: {
              type: "heart",
              stroke: {
                width: 0,
                color: "#FF758F"
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "top" as const,
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            }
          },
          interactivity: {
            detectsOn: "canvas" as const,
            events: {
              onHover: {
                enable: true,
                mode: "bubble"
              },
              onClick: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 250,
                size: 12,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        };
      case 'confetti':
        return {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#FF758F", "#FFB3C1", "#FFC2D1", "#E50914", "#FF8FA3"]
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 3,
              direction: "bottom" as const,
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detectsOn: "canvas" as const,
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        };
      default:
        return {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#FF758F"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#E50914",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none" as const,
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "canvas" as const,
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent",
            image: "url('/romantic-texture.png')",
            position: "50% 50%",
            repeat: "repeat",
            size: "cover"
          }
        };
    }
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={getOptions()}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-netflix-black/70 via-netflix-black/40 to-netflix-black/80 -z-9"></div>
      <div className="fixed inset-0 bg-[url('/romantic-texture.png')] opacity-10 mix-blend-overlay -z-8"></div>
    </div>
  );
};

export default ParticlesBackground;
