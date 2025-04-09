/* eslint-disable import/first */

/*


 */
import './styles/tailwind.css';
import { render as solidRender } from 'solid-js/web';

/* Vanilla JS components imports */
import Tag from './components/base/tag/Tag';
import TeaserNewsItem from "./components/base/teaser-news-item/TeaserNewsItem";

/* Solid JS components imports */
import MySolidComponent from "./components/compositions/my-solid-component/MySolidComponent.jsx";

const components = {
  tag: {
    Component: Tag,
    dataInit: 'tag',
    type: 'vanilla',
  },
  teaserNewsItem: {
    Component: TeaserNewsItem,
    dataInit: 'teaser-news-item',
    type: 'vanilla',
  },
  solidComponent: {
    Component: MySolidComponent,
    dataInit: 'my-solid-component',
    type: 'solid',
  },
};

// ------------------------------
// --- Initialization -----------
// ------------------------------
export function doInit() {
  Object.values(components).forEach(({ Component, dataInit, type }) => {
    const elements = document.querySelectorAll(`[data-init="${dataInit}"]`);
    elements.forEach((el) => {
      if (type === 'solid') {
        const childNodes = Array.from(el.childNodes);
        solidRender(() => <Component>{childNodes}</Component>, el);
      } else {
        new Component(el);
      }
    });
  });
}

if (document.readyState !== 'loading') {
  doInit();
} else {
  document.addEventListener('DOMContentLoaded', doInit);
}
