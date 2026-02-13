import template from "./my-solid-component.template.js";

const render = (args) => template(args);

export default {
  title: "Components/solid/MySolidComponent",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const MySolidComponent = {
  args: {
  },
  render,
};
