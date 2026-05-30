# Storybook + Tailwind CSS

A demo setup with Storybook and Tailwind CSS, using the latest compatible versions as of **May 30, 2026**. 
Write Vanilla JS components (if they are simple) or Solid JS components (when they are needed).

## Features
- 📖 **Storybook** – UI component explorer
- 🔧 **Vite** – Fast build tool and dev server
- 🎨 **Tailwind CSS** – Utility-first CSS framework
- ⚛️ **SolidJS** – Lightning-fast reactive UI library

## Getting Started
Install dependencies:
```npm install```

Run the storybook project:
```npm start```

## Building
To generate the production bundle:
```npm run build:prod```

This will place all resources in `/dist`
- All components JS together in a minified `main.js`
- The required Tailwind styles and components CSS together in a minified `main.css` (only with the styles in use)

## Instructions how to set up new components
Create a new folder for the component and story at the right place with the required files (see other components).

If you only need CSS, it's enough to reference the components css file in `/src/tailwind.css`.

If your component needs JavaScript, you have to declare them in `/src/index.js`:

1. step:
   Import the js or jsx (Solid component):
   `import Foo from './components/foo/foo';`

2. step:
   Add it to the components object:
   `const components = {
   foo: {
   Component: Foo,
   },
   ...
   }`

3. Add a data-init to your component markup:
   `<div class="c_foo" data-init="foo"></div>
   Add the data-init and Component values to the components object:
   const components = {
     foo: {
       Component: Foo,
       dataInit: 'foo',
     },
     ...
   }`

4. Declare if it is a Solid JS components or vanilla JS component, this is needed because they will be initialized
   differently:
   `const components = {
   foo: {
   Component: Foo,
   dataInit: 'foo',
   type: 'vanilla',
   },
   ...
   }`

## Project rules
- Use Tailwind utility classes for styling whenever possible, only write custom CSS in exceptional cases
- In the .hbs files, declare classes with the BEM-syntax. Use separate CSS per component and write Tailwind styles
using the classes with the `component` layer and `@apply`.
- In the JSX files (for the Solid components), write all Tailwind styles with the utility classes directly in the JSX
and do not use an additional CSS file there
