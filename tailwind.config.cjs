module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sunsetPurple: '#6B4EFF',
        sunsetBlue: '#92A8F8',
        dusk: '#f3c5ff',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
