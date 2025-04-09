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
import './components/base/tag.scss';
import { render as solidRender } from 'solid-js/web';

import Tag from './components/base/Tag';
import AbstractMap from './components/compositions/AbstractMap';
import MySolidComponent from "./components/compositions/MySolidComponent.jsx";

const components = {
  tag: {
    Component: Tag,
    dataInit: 'tag',
    type: 'classic',
  },
  abstractMap: {
    Component: AbstractMap,
    dataInit: 'abstract-map',
    type: 'classic',
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
        solidRender(Component, el);
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
