const fs = require('fs-extra');
const path = require('path');
const handlebars = require('handlebars');
const glob = require('glob');

const files = glob.sync('src/**/*.hbs');

files.forEach((file) => {
  const template = fs.readFileSync(file, 'utf-8');
  const compiled = handlebars.precompile(template);

  // Get a normalized partial name
  const relativePath = path.relative('src', file);
  const partialName = relativePath.replace(/\.hbs$/, '').replace(/\\/g, '/'); // Windows-safe

  const output = `
    import Handlebars from 'handlebars/runtime';
    Handlebars.registerPartial('${partialName}', Handlebars.template(${compiled}));
    export default Handlebars.template(${compiled});
  `;

  const dir = path.dirname(file);
  const baseName = path.basename(file, '.hbs');
  const outputPath = path.join(dir, `${baseName}.template.js`);
  fs.writeFileSync(outputPath, output);
  console.log(`Compiled: ${outputPath} as partial "${partialName}"`);
});
