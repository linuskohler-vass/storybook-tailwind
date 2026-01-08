import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import storybookPlugin from "eslint-plugin-storybook";
import solid from "eslint-plugin-solid";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["**/*.template.js", "!.storybook"],
  },
  {
    files: ["src/components/**/*.{js,mjs,cjs}", "src/helpers/**/*.{js,mjs,cjs}", "src/pages/**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    plugins: { js, storybook: storybookPlugin },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": ["warn", { allow: ["warn", "error"] }],
      quotes: ["warn", "single"],
      semi: ["warn", "always"],
    },
  },
  {
    files: ["src/components/**/*.{jsx,tsx}"],
    plugins: { solid },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      ...solid.configs.recommended.rules,
    },
  },
]);
