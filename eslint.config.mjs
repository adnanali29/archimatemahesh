import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unused vars (common in large codebases during development)
      "@typescript-eslint/no-unused-vars": "off",
      // Allow <img> tags (we handle images manually)
      "@next/next/no-img-element": "off",
      // Allow unescaped entities (handled manually where needed)
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
