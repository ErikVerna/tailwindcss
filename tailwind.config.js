module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "wave-pattern": "url(../images/pattern.png)",
        "wave-white": "url(../images/wave-white.png)",
        "zelda-black": "url(../images/background.jpg)",
        "zelda-character": "url(../images/story-link-medium-up.png)",
        "white-dots": "url(../images/pattern-brown-dots.png)",
      }),
      screens: {
        xsm: "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
};
