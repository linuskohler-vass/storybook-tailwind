/* eslint-disable import/first */

/*
Instructions:
-------------
Only components with JS have to be imported here.
If you only need CSS, it's enough to reverence the components css file in tailwind.css.

If your component needs JavaScript:

1. step:
Import the js or jsx (solid component):
import Foo from './components/foo/foo';

2. step:
Add it to the components object:
const components = {
  foo: {
    Component: Foo,
  },
  ...
}

3. Add a data-init to your component markup:
<div class="c_foo" data-init="foo"></div>
Add the data-init and Component values to the components object:
const components = {
  foo: {
    Component: Foo,
    dataInit: 'foo',
  },
  ...
}

4. Declare if it is a solid JS components or vanilla JS component, this is needed because they will be initialized
differently:
const components = {
  foo: {
    Component: Foo,
    dataInit: 'foo',
    type: 'vanilla',
  },
  ...
}

 */
/* Old way of writing css: It gets built in main.css:
This can be removed if we fully use tailwind we can stick to css and imports in tailwind and remove sass from the project */
import './components/base/abstract-map/abstract-map.scss';

import Tag from './components/base/tag/Tag';
import AbstractMap from './components/base/abstract-map/AbstractMap';
import TeaserNewsItem from "./components/base/teaser-news-item/TeaserNewsItem";
import MySolidComponent from "./components/compositions/my-solid-component/MySolidComponent.jsx";

import { render as solidRender } from 'solid-js/web';

const components = {
  tag: {
    Component: Tag,
    dataInit: 'tag',
    type: 'vanilla',
  },
  abstractMap: {
    Component: AbstractMap,
    dataInit: 'abstract-map',
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
