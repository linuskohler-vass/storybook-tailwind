import './tag.css';
import template from './tag.hbs';
import Tag from './Tag.js';

const render = (args) => {
  const html = template(args);

  new Tag();
  return html;
};

export default {
  title: 'components/base/Tag',
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
