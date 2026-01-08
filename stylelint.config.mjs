/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    // Allow Tailwind's directives
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "theme",
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",
          "screen",
          "config",
          "utility",
        ]
      }
    ],

    // How we import the files
    "import-notation": "string",

    // Allow BEM naming convention (block__element--modifier)
    "selector-class-pattern": [
      "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+)?$",
      {
        message: "Expected class selector to follow BEM pattern (block__element--modifier)"
      }
    ],

    // Allow underscores in properties to reflect Tailwind-like tokens
    "custom-property-pattern": "^[a-z0-9-_]+$",

    // Allow vendor prefixes (Tailwind handles this)
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,

    // Do not allow unknown values (Tailwind uses custom properties, but they are not checked here)
    "property-no-unknown": true,
    "function-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,

    // Disable some opinionated formatting rules
    "rule-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],
    "comment-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": ["stylelint-commands"]
      }
    ],

    // No important, 0 units
    "declaration-no-important": true,
    "length-zero-no-unit": true,
  }
};
