import template from './my-solid-component.hbs';

const render = (args) => template(args);

export default {
  title: 'Components/compositions/MySolidComponent',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const mySolidComponent = {
  args: {
  },
  render,
};

