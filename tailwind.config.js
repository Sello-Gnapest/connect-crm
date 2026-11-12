module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d7efff',
          200: '#b2e0ff',
          300: '#7ec9ff',
          400: '#48b0ff',
          500: '#1d8ef2',
          600: '#146fd7',
          700: '#1458ab',
          800: '#174a8a',
          900: '#183f74'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
