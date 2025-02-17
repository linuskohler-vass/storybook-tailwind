import template from './abstract-map.hbs';

const render = (args) => template(args);

export default {
  title: 'components/compositions/AbstractMap',
  parameters: {
    layout: 'centered',
  }
};

export const tag = {
  args: {
  },
  render,
};

