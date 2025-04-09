/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'on-primary': 'var(--color-on-primary)',
        'background': 'var(--color-background)',
        'on-background': 'var(--color-on-background)',
        'surface': 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
        'surface-light': 'var(--color-surface-light)',
        'on-surface-light': 'var(--color-on-surface-light)',
        'surface-variant': 'var(--color-surface-variant)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        'outline': 'var(--color-outline)',
        'outline-variant': 'var(--color-outline-variant)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      opacity: {
        '15': '0.15',
      },
      backgroundColor: {
        'primary-15': 'rgba(57, 255, 20, 0.15)',
      },
    },
  },
  plugins: [],
};
  