import template from './abstract-map.hbs';

const render = (args) => template(args);

export default {
  title: 'components/base/AbstractMap',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const map = {
  args: {
  },
  render,
};

