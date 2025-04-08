import { render } from 'solid-js/web';
import MySolidComponent from "./MySolidComponent";

export default {
  title: 'Components/MySolidComponent',
};

export const SolidComponentDemo = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <h2>This is from Handlebars</h2>
    <div id="solid-hook"></div>
  `;

  // Mount Solid component at runtime
  requestAnimationFrame(() => {
    render(() => <MySolidComponent />, wrapper.querySelector('#solid-hook'));
  });

  return wrapper;
};
