'use strict';

const config = {
  type: 'carousel',
  perView: 4,
  breakpoints: {
    1024: {
      perView: 3,
    },

    800: {
      perView: 2,
    },

    600: {
      perView: 1,
    },
  },
};

const glide = new Glide('.glide', config).mount();

glide.on('run.before', (evt) => {
  const scrollSteps = glide.settings.perView;
  evt.steps = evt.direction === '>' ? -scrollSteps : scrollSteps;
});
