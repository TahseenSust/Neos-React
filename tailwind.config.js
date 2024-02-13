// module.exports = {
//   purge: [],
//   theme: {
//     extend: {
//       colors: {
//         "Primary-Color": "#FD7C7C",
//         "Bg-1": "#EAEAED",
//         "Text-color-1": "#373737",
//         "Border-color": "#E0E0E0",
//         "Text-color-2": "#A0A0A0",
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };

const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        "Primary-Color": "#FD7C7C",
        "Bg-1": "#EAEAED",
        "Text-color-1": "#373737",
        "Border-color": "#E0E0E0",
        "Text-color-2": "#A0A0A0",
      },
    },
  },
  plugins: [],
};
