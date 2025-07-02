// tailwind.config.mjs

import typography from '@tailwindcss/typography';
import { withUt } from "uploadthing/tw";
/** @type {import('tailwindcss').Config} */

export default withUt({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
});
