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
        transparent: "#0F589B",
        accent: "#45BF6E",
      },
      backgroundImage: {
        "hero-image": "url('/assets/images/MyPages/headpicture.png')",
        "hero-registered":
          "url('/assets/images/RegisteredHouses/registered.png')",
        "hero-registered-mobile":
          "url('/assets/images/RegisteredHouses/registeredMobile.png')",
      },

      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      height: {
        128: "32rem",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
