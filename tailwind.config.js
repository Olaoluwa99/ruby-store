/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // this is correct for manual theme switching
  theme: {
    extend: {
      colors: {
        primaryLight: "#725855",
        primaryDark: "#FFFFFF",

        primaryContainerLight: "#FFDFDA",
        primaryContainerDark: "#EECDC8",

        onPrimaryContainerLight: "#5C4541",
        onPrimaryContainerDark: "#503A37",

        secondaryLight: "#685B59",
        secondaryDark: "#D4C3C0",

        onSecondaryLight: "#FFFFFF",
        onSecondaryDark: "#392E2C",

        secondaryContainerLight: "#F5E2DF",
        secondaryContainerDark: "#463B39",

        onSecondaryContainerLight: "#534746",
        onSecondaryContainerDark: "#DFCDCA",

        tertiaryLight: "#655E48",
        tertiaryDark: "#FFFFFF",

        onTertiaryLight: "#FFFFFF",
        onTertiaryDark: "#36301D",

        tertiaryContainerLight: "#F1E6CA",
        tertiaryContainerDark: "#DED4B8",

        onTertiaryContainerLight: "#514A35",
        onTertiaryContainerDark: "#453F2B",

        errorLight: "#BA1A1A",
        errorDark: "#FFB4AB",

        onErrorLight: "#FFFFFF",
        onErrorDark: "#690005",

        errorContainerLight: "#FFDAD6",
        errorContainerDark: "#93000A",

        onErrorContainerLight: "#410002",
        onErrorContainerDark: "#FFDAD6",

        backgroundLight: "#FFF8F7",
        backgroundDark: "#151312",

        onBackgroundLight: "#1E1B1B",
        onBackgroundDark: "#E8E1E0",

        surfaceLight: "#FFF8F7",
        surfaceDark: "#151312",

        onSurfaceLight: "#1E1B1B",
        onSurfaceDark: "#E8E1E0",

        surfaceVariantLight: "#F0DFDC",
        surfaceVariantDark: "#4F4443",

        onSurfaceVariantLight: "#4F4443",
        onSurfaceVariantDark: "#D3C3C1",

        outlineLight: "#817472",
        outlineDark: "#9C8E8B",

        outlineVariantLight: "#D3C3C1",
        outlineVariantDark: "#4F4443",

        scrim: "#000000",

        inverseSurfaceLight: "#33302F",
        inverseSurfaceDark: "#E8E1E0",

        inverseOnSurfaceLight: "#F6EFEE",
        inverseOnSurfaceDark: "#33302F",

        inversePrimaryLight: "#E0BFBA",
        inversePrimaryDark: "#725855",

        surfaceDimLight: "#DFD8D7",
        surfaceDimDark: "#151312",

        surfaceBrightLight: "#FFF8F7",
        surfaceBrightDark: "#3C3838",

        surfaceContainerLowestLight: "#FFFFFF",
        surfaceContainerLowestDark: "#100E0D",

        surfaceContainerLowLight: "#F9F2F1",
        surfaceContainerLowDark: "#1E1B1B",

        surfaceContainerLight: "#F4ECEB",
        surfaceContainerDark: "#221F1F",

        surfaceContainerHighLight: "#EEE7E5",
        surfaceContainerHighDark: "#2C2929",

        surfaceContainerHighestLight: "#E8E1E0",
        surfaceContainerHighestDark: "#373433",
      },
    },
  },
  plugins: [],
};
