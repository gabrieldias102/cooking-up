module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FCC79",
        primaryDark: "#17A05D",
        secondary: "#FF6464",
        tertiary: "#3B82F6",
        text: "#2E3E5C",
        textClear: "#9FA5C0",
        form: "#F4F5F7",
      },
    },
  },
  plugins: [],
};
