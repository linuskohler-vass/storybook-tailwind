/* eslint-disable import/no-extraneous-dependencies */
const handlebars = require('handlebars');
/* eslint-enable import/no-extraneous-dependencies */

handlebars.registerHelper('eq', (arg1, arg2, options) => (
  (arg1 === arg2) ? options.fn(this) : options.inverse(this)
));

/* eslint-disable import/prefer-default-export */
export const parameters = {
  fetchMock: {
    debug: true,
  },
};
/* eslint-enable import/prefer-default-export */
