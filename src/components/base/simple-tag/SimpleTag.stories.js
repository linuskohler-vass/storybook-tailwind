import template from './simple-tag.template.js';

const render = (args) => template(args);

export default {
  title: 'components/base/SimpleTag',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const tag = {
  args: {
    text: 'some tag',
    hoverFill: false,
  },
  render,
};

export const highlight = {
  args: {
    text: 'some tag',
    highlight: true,
  },
  render,
};
