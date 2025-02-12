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

B: your component does not need javascript
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

import Tag from './components/base/Tag';

const components = {
  tag: {
    Component: Tag,
    dataInit: 'tag',
  },
};

// ------------------------------
// --- Initialization -----------
// ------------------------------
function doInit() {
  console.log("Do init");

  // init components
  Object.keys(components).forEach((key) => {
    const component = components[key];
    document
      .querySelectorAll(`[data-init="${component.dataInit}"]`)
      .forEach((element) => new component.Component(element));
  });
}

if (document.readyState !== 'loading') {
  console.log("Call init");
  doInit();
} else {
  document.addEventListener('DOMContentLoaded', doInit);
}
