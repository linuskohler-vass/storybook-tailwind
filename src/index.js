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
import './scss/layout.scss';


import Tag from './components/base/Tag';
import AbstractMap from './components/compositions/AbstractMap';

const components = {
  tag: {
    Component: Tag,
    dataInit: 'tag',
  },
  abstractMap: {
    Component: AbstractMap,
    dataInit: 'abstract-map',
  },
};

// ------------------------------
// --- Initialization -----------
// ------------------------------
function doInit() {
  // init components
  Object.keys(components).forEach((key) => {
    const component = components[key];
    document
      .querySelectorAll(`[data-init="${component.dataInit}"]`)
      .forEach((element) => new component.Component(element));
  });
}

if (document.readyState !== 'loading') {
  doInit();
} else {
  document.addEventListener('DOMContentLoaded', doInit);
}
