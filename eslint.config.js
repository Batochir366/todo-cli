import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },

    rules: {
      // Errors
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-const-assign": "error",

      // Helpful while learning
      "no-console": "off",
    },
  },
];
