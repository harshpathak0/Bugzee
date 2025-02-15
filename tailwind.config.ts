// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;


module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Source Serif Pro', 'Georgia', 'serif'],
        body: ['Synonym', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        dark: '#1a1a1a',
      },
    },
  },

  // theme: {
  //   fontFamily: {
  //     display: ['Source Serif Pro', 'Georgia', 'serif'],
  //     body: ['Synonym', 'system-ui', 'sans-serif'],
  //   },
  //   colors: {
  //     primary: {
  //       50: '#f8fafc',
  //       100: '#f1f5f9',
  //       200: '#e2e8f0',
  //       300: '#cbd5e1',
  //       400: '#94a3b8',
  //       500: '#64748b',
  //       600: '#475569',
  //       700: '#334155',
  //       800: '#1e293b',
  //       900: '#0f172a',
  //     },
  //     secondary: {
  //       50: '#ecfdf5',
  //       100: '#d1fae5',
  //       200: '#a7f3d0',
  //       300: '#6ee7b7',
  //       400: '#34d399',
  //       500: '#10b981',
  //       600: '#059669',
  //       700: '#047857',
  //       800: '#065f46',
  //       900: '#064e3b',
  //     },
  //   },
  // },

  plugins: [],
};
