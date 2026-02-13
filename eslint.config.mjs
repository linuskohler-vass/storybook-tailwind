import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import storybookPlugin from "eslint-plugin-storybook";
import solid from "eslint-plugin-solid";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["**/*.template.js", "!.storybook"],
  },
  // ESLint recommended rules for all files
  js.configs.recommended,
  // Vanilla JS rules
  {
    files: ["src/components/**/*.{js,mjs,cjs}", "src/helpers/**/*.{js,mjs,cjs}", "src/pages/**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      quotes: ["warn", "double"],
      semi: ["warn", "always"],
    },
  },
  // SolidJS-specific rules
  {
    files: ["src/**/*.{jsx,tsx}"],
    plugins: { solid },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...solid.configs.recommended.rules,
    },
  },
  // Storybook-specific rules for story files
  ...storybookPlugin.configs['flat/recommended'],
]);
