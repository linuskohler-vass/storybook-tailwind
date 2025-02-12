/* eslint-disable import/no-extraneous-dependencies */
const handlebars = require('handlebars');
const layouts = require('handlebars-layouts');
/* eslint-enable import/no-extraneous-dependencies */

handlebars.registerHelper(layouts(handlebars));
handlebars.registerHelper('increment', (value) => parseInt(value, 10) + 1);
handlebars.registerHelper('atIndex', (array, index) => array[index]);
handlebars.registerHelper('json', (context) => JSON.stringify(context));
handlebars.registerHelper('lowercase', (str) => {
  if (typeof str !== 'string') return '';
  return str.toLowerCase();
});
handlebars.registerHelper('concat', (...args) => {
  const options = args.pop();
  return args.join('');
});

module.exports = handlebars;
