module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: "Nunito",
        script: "Dancing Script",
      },
      fontSize: {
        default: "15px",
        script: "24px",
        h1: "50px",
        "h1-mob": "32px",
        h2: "40px",
        "h2-mob": "28px",
        h3: "30px",
        "h3-mob": "24px",
        h4: "24px",
        "h4-mob": "20px",
        h5: "20px",
        "h5-mob": "18px",
        h6: "18px",
        "h6-mob": "16px",
      },
      fontWeight: {
        p: 400,
        h: 700,
        h1: 700,
        "h1-mob": 700,
        h2: 700,
        "h2-mob": 700,
        h3: 700,
        "h3-mob": 700,
        h4: 700,
        "h4-mob": 700,
        h5: 700,
        "h5-mob": 700,
        h6: 600,
        "h6-mob": 600,
      },
      lineHeight: {
        default: "24px",
        script: "29px",
        h1: "68px",
        "h1-mob": "44px",
        h2: "55px",
        "h2-mob": "38px",
        h3: "41px",
        "h3-mob": "33px",
        h4: "33px",
        "h4-mob": "27px",
        h5: "27px",
        "h5-mob": "25px",
        h6: "25px",
        "h6-mob": "22px",
      },
      colors: {
        black: "#212233",
        gray: "#63666B",
        "light-gray": "#BBB",
        orange: {
          default: "#F58634",
          dark: "#DD6D1A",
        },
        green: "#039251",
      },
      textColor: (theme) => ({
        ...theme("colors"),
        h: theme("colors.black"),
        p: theme("colors.gray"),
        primary: theme("colors.orange.default"),
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        body: theme('colors["light-gray"]'),
        primary: theme("colors.orange.default"),
        "primary-hover": theme("colors.orange.dark"),
      }),
      spacing: {
        "btn-x": "30px",
        "btn-y": "15px",
        "card-x": "25px",
        "card-y": "40px",
        "0-auto": "0 auto",
        50: "50px"
      },
      maxWidth: {
        "app-width": "1170px",
      },
    },
  },
  variants: {},
  plugins: [],
};
