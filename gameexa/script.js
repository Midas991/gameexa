document.write('Script loaded');
window.addEventListener('DOMContentLoaded', function() {
particlesJS('stars', {
  particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: {
          value: 0.5,
          random: false,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
          value: 2,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: { enable: false },
      move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
      }
  },
  interactivity: {
      detect_on: 'canvas',
      events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true
      }
  },
  retina_detect: true
});
});