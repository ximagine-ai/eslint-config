import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import regexp from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";

import type { TypedFlatConfigItem } from "../types";

/**
 * ESLint configuration for JavaScript files.
 *
 * Plugins:
 * - `unicorn`: Provides various rules to enforce better code quality and consistency.
 * - `perfectionist`: Helps in sorting imports, array includes, and enums.
 * - `regexp`: Provides rules for regular expressions.
 * - `unused-imports`: Detects and removes unused imports.
 * - `@stylistic`: Enforces stylistic rules, such as padding line between statements.
 */
const config: TypedFlatConfigItem = {
  plugins: {
    unicorn,
    perfectionist,
    regexp,
    "unused-imports": unusedImports,
    "@stylistic": stylistic,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...unicorn.configs["flat/recommended"].rules,
    ...regexp.configs["flat/recommended"].rules,
    eqeqeq: "error",
    "max-params": ["error", 3],
    "no-nested-ternary": "error",
    "max-depth": ["warn", 4],
    "no-lonely-if": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
    "prefer-arrow-callback": "warn",
    "no-unneeded-ternary": "warn",
    "one-var-declaration-per-line": ["warn", "always"],
    "operator-assignment": ["warn", "always"],
    "prefer-destructuring": [
      "warn",
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-code-point": "off",
    "unicorn/no-process-exit": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/no-lonely-if": "warn",
    "unicorn/consistent-function-scoping": [
      "warn",
      {
        checkArrowFunctions: false,
      },
    ],
    "perfectionist/sort-imports": [
      "warn",
      {
        groups: [
          "type",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "unknown",
        ],
      },
    ],
    "perfectionist/sort-named-imports": "warn",
    "perfectionist/sort-array-includes": "warn",
    "perfectionist/sort-enums": "warn",
    "unused-imports/no-unused-imports": "warn",
    "@stylistic/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: ["multiline-const", "function", "class"],
        next: "*",
      },
      { blankLine: "always", prev: ["interface", "type"], next: "*" },
      { blankLine: "always", prev: "*", next: ["export", "return"] },
    ],
  },
};

export default config;
