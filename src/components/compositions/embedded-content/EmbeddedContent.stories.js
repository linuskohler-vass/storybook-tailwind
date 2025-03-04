import template from './embedded-content.hbs';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const render = (args) => template(args);

export default {
  title: 'components/compositions/EmbeddedContent',
};

export const tag = {
  args: {
  },
  render,
};
