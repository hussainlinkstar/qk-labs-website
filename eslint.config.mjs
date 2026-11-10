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
      // Marketing site uses many CSS-sized SVG/PNG icons; next/image adds little for these.
      "@next/next/no-img-element": "off",
      // Hash CTAs and mixed internal/external links use plain anchors by design.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
