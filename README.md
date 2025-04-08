# Storybook + Tailwind CSS

A demo setup with Storybook and Tailwind CSS, using the latest compatible versions as of **April 8, 2025**.

## Features
- 📖 **Storybook** – UI component explorer
- 🔧 **Webpack** – Module bundler
- 🎨 **Tailwind CSS** – Utility-first CSS framework

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
- All components CSS together in a minified `main.css`
- The required tailwind CSS in `tailwind.css` (only with the styles in use)
