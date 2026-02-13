import handlebars from "handlebars/runtime";
import layouts from "handlebars-layouts";

handlebars.registerHelper(layouts(handlebars));
handlebars.registerHelper("increment", (value) => parseInt(value, 10) + 1);
handlebars.registerHelper("atIndex", (array, index) => array[index]);
handlebars.registerHelper("json", (context) => JSON.stringify(context));
handlebars.registerHelper("lowercase", (str) => {
  if (typeof str !== "string") return "";
  return str.toLowerCase();
});
handlebars.registerHelper("concat", (...args) => {
  return args.join("");
});
handlebars.registerHelper("eq", (a, b) => {
  return a === b;
});
