/* eslint-disable import/first */

/*
Instructions:
-------------
Every component needs a js file. Every js file must import the css accordingly.

Depending on if your component needs javascript, you need to import it differently
here.

A: your component does not need javascript
------------------------------------------

Import the js:
import('./components/foo/foo');

B: your component needs javascript
------------------------------------------

1. step:
Import the js:
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
 */
import './components/base/tag/tag.scss';
import './components/base/abstract-map/abstract-map.scss';

import Tag from './components/base/tag/Tag';
import AbstractMap from './components/base/abstract-map/AbstractMap';
import TeaserNewsItem from "./components/base/teaser-news-item/TeaserNewsItem";
import MySolidComponent from "./components/compositions/MySolidComponent.jsx";

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
