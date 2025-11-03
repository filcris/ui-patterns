/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  settings: { react: { version: "detect" } },
  plugins: ["@typescript-eslint","react","react-hooks","jsx-a11y","import","prettier","vitest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vitest/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/order": ["warn", { "alphabetize": { order: "asc", caseInsensitive: true }, "newlines-between": "always" }],
    "prettier/prettier": ["warn", { endOfLine: "auto" }]
  },
  overrides: [
    {
      files: ["**/*.stories.@(ts|tsx)"],
      rules: { "import/no-anonymous-default-export": "off" }
    },
    {
      files: ["**/*.test.@(ts|tsx)","src/tests/**"],
      env: { "vitest-globals/env": true },
      rules: { "@typescript-eslint/no-explicit-any": "off" }
    }
  ]
};
