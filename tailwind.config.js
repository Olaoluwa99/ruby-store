/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#725855",
          dark: "#FFFFFF",
        },
        primaryContainer: {
          light: "#FFDFDA",
          dark: "#EECDC8",
        },
        onPrimaryContainer: {
          light: "#5C4541",
          dark: "#503A37",
        },
        secondary: {
          light: "#685B59",
          dark: "#D4C3C0",
        },
        onSecondary: {
          light: "#FFFFFF",
          dark: "#392E2C",
        },
        secondaryContainer: {
          light: "#F5E2DF",
          dark: "#463B39",
        },
        onSecondaryContainer: {
          light: "#534746",
          dark: "#DFCDCA",
        },
        tertiary: {
          light: "#655E48",
          dark: "#FFFFFF",
        },
        onTertiary: {
          light: "#FFFFFF",
          dark: "#36301D",
        },
        tertiaryContainer: {
          light: "#F1E6CA",
          dark: "#DED4B8",
        },
        onTertiaryContainer: {
          light: "#514A35",
          dark: "#453F2B",
        },
        error: {
          light: "#BA1A1A",
          dark: "#FFB4AB",
        },
        onError: {
          light: "#FFFFFF",
          dark: "#690005",
        },
        errorContainer: {
          light: "#FFDAD6",
          dark: "#93000A",
        },
        onErrorContainer: {
          light: "#410002",
          dark: "#FFDAD6",
        },
        background: {
          light: "#FFF8F7",
          dark: "#151312",
        },
        onBackground: {
          light: "#1E1B1B",
          dark: "#E8E1E0",
        },
        surface: {
          light: "#FFF8F7",
          dark: "#151312",
        },
        onSurface: {
          light: "#1E1B1B",
          dark: "#E8E1E0",
        },
        surfaceVariant: {
          light: "#F0DFDC",
          dark: "#4F4443",
        },
        onSurfaceVariant: {
          light: "#4F4443",
          dark: "#D3C3C1",
        },
        outline: {
          light: "#817472",
          dark: "#9C8E8B",
        },
        outlineVariant: {
          light: "#D3C3C1",
          dark: "#4F4443",
        },
        scrim: "#000000",
        inverseSurface: {
          light: "#33302F",
          dark: "#E8E1E0",
        },
        inverseOnSurface: {
          light: "#F6EFEE",
          dark: "#33302F",
        },
        inversePrimary: {
          light: "#E0BFBA",
          dark: "#725855",
        },
        surfaceDim: {
          light: "#DFD8D7",
          dark: "#151312",
        },
        surfaceBright: {
          light: "#FFF8F7",
          dark: "#3C3838",
        },
        surfaceContainerLowest: {
          light: "#FFFFFF",
          dark: "#100E0D",
        },
        surfaceContainerLow: {
          light: "#F9F2F1",
          dark: "#1E1B1B",
        },
        surfaceContainer: {
          light: "#F4ECEB",
          dark: "#221F1F",
        },
        surfaceContainerHigh: {
          light: "#EEE7E5",
          dark: "#2C2929",
        },
        surfaceContainerHighest: {
          light: "#E8E1E0",
          dark: "#373433",
        },
      },
    },
  },
  plugins: [],
};
