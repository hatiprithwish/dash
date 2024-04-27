import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('/auth-bg.jpg')",
        dark: "rgba(39, 39, 39, 0.4)",
        dark1: "rgba(255,255,255,0.2)",
        nav: "rgba( 255, 255, 255, 0.4 )",
        button: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
      },
      screens: {
        xxs: "350px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
      colors: {
        "primary-blue": "#2480EC",
        "my-yellow": "#F5C32C",
        "my-orange": "#FCA61F",
        "my-black": "#242D49",
        "my-gray": "#788097",
        "my-white": "#DDF8FE",
        "my-blue": "#072ac8",
        "my-light-blue": "#C1F5FF",
        "my-light-purple": "#eed2ff",
        "my-dark-orange": "#fca61f73",
      },
      boxShadow: {
        base: "0px 19px 60px rgb(0 0 0 / 8%)",
        small: "-79px 51px 60px rgba(0, 0, 0, 0.08)",
        "dark-orange": "8px 8px 20px 1px rgba(251, 161, 40, 0.42)",
        nav: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      borderRadius: {
        "4xl": "34px",
      },
    },
  },
  plugins: [],
});
