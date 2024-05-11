import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    ...compat.extends("airbnb", "airbnb/hooks"),
  {
      languageOptions: { globals: globals.browser },
      rules: {
          "react/jsx-indent": ["warn", 4],
      }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];