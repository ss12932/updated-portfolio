module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      scale: {
        flip: "-1",
      },
      scrollMargin: {
        22: "88px",
      },
      margin: {
        22: "88px",
      },
      keyframes: {
        radiate: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,255,255,1)" },
          "70%": { boxShadow: "0 0 2rem 1.5rem rgba(255,255,255, 0)" },
        },
      },
      animation: {
        radiate: "radiate 2s infinite",
      },
      colors: {
        "rich-black-fogra-29": "#001219ff",
        "blue-sapphire": " #005f73ff",
        "viridian-green": "#0a9396ff",
        "middle-blue-green": "#94d2bdff",
        "medium-champagne": "#e9d8a6ff",
        gamboge: "#ee9b00ff",
        "alloy-orange": "#ca6702ff",
        rust: "#bb3e03ff",
        rufous: "#ae2012ff",
        "sonic-silver": "#6c757dff",
        cultured: "#f8f9faff",
        "ruby-red": "#9b2226ff",
      },
    },
  },
  plugins: [],
};
