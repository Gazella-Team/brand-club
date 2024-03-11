import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        sectionMain: "90%",
      },
      boxShadow: {
        navbar: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },

      backgroundColor: {
        main: "#161616",
      },
      borderRadius: {
        main: "8px",
      },
      fontSize: {
        heroHeading: "40px",
        heroDescription: "20px",
        sectionHeading: "36px",
        sectionDescription: "18px",
      },
      maxWidth: {
        main: "1300px",
      },
      gridTemplateColumns: {
        phoneContentCard: "90% 10%",
        contentCard: "40% 45% 1fr",
        subcontent: "30% 1fr",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        navbar: { max: "1200px" },
        nav: { min: "1200px" },
        heroOne: { max: "1100px" },
        heroOneHid: { min: "1100px" },
        heroTwo: { max: "530px" },
        trustbadgesOne: { max: "1280px" },
        trustbadgesTwo: { max: "700px" },
        contents: { max: "830px" },
        foots: { max: "520px" },
        last: { max: "440px" },
      },
    },
  },
  plugins: [],
};
export default config;