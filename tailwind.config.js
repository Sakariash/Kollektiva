module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#D9EBFB",
        primary: "#0E589B",
        btnPrimary: "#FFBA34",
        link: "#10579C",
        accent: "#45BF6E",
      },

      backgroundImage: {
        "hero-image": "url('/assets/images/Rectangle37.png')",
      },

      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
