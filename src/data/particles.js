import React from 'react';
import Particles from 'react-particles-js';

const particlesOn = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 15,
        color: '#ffffff'
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 5.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0.2,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: '#ffffff',
      opacity: 0.9,
      width: 1.2
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

const particlesOff = {
  ...particlesOn,
  particles: {
    ...particlesOn.particles,
    size: {
      ...particlesOn.particles.size,
      anim: {
        ...particlesOn.particles.size.anim,
        enable: false
      }
    },
    move: {
      ...particlesOn.particles.move,
      straight: true
    }
  }
};

export default {
  particles: {
    motion: <Particles className="particles" params={particlesOn} />,
    static: <Particles className="particles" params={particlesOff} />
  }
};
