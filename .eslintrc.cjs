/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  settings: { react: { version: "detect" }, "import/resolver": { node: { extensions: [".ts",".tsx",".js",".jsx"] } } } },
  plugins: ["@typescript-eslint","react","react-hooks","jsx-a11y","import","prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/order": ["warn", { "alphabetize": { order: "asc", caseInsensitive: true }, "newlines-between": "always" }],
    "prettier/prettier": ["warn", { endOfLine: "auto" }]
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}", "src/tests/**"],
      env: { node: true, browser: true },
      globals: {
        // Vitest globals
        vi: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off"
      }
    },
    {
      files: ["**/*.stories.{ts,tsx}"],
      rules: { "import/no-anonymous-default-export": "off" }
    }
  ]
};

