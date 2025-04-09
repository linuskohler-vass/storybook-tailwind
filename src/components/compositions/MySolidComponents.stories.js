import template from './my-solid-component.hbs';

const render = (args) => template(args);

export default {
  title: 'Components/compositions/MySolidComponent',
  parameters: {
    layout: 'centered',
  }
};

export const tag = {
  args: {
  },
  render,
};

