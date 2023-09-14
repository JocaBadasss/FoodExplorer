import { css } from "styled-components"

export default {
  COLORS: {
    LIGHT_100: "#FFFFFF",
    LIGHT_200: "#FFFAF1",
    LIGHT_300: "#E1E1E6",
    LIGHT_400: "#C4C4CC",
    LIGHT_500: "#7C7C8A",
    LIGHT_600: "#76797B",
    LIGHT_700: "#4D585E",
    DARK_100: "#000405",
    DARK_200: "#00070A",
    DARK_300: "#000204",
    DARK_400: "#000A0F",
    DARK_500: "#000C12",
    DARK_600: "#00111A",
    DARK_700: "#001119",
    DARK_800: "#0D161B",
    DARK_900: "#0D1D25",
    DARK_1000: "#192227",
    GRADIENTS_200:
      "linear-gradient(to bottom, #091e26, #081b24, #051921, #03161e, #00131c);",
    TINTS_TOMATO_100: "#750310",
    TINTS_TOMATO_200: "#92000E",
    TINTS_TOMATO_300: "#AB222E",
    TINTS_TOMATO_400: "#AB4D55",
    TINTS_CARROT_100: "#FBA94C",
    TINTS_MINT_100: "#04D361",
    TINTS_CAKE_200: "#82F3FF",
    TINTS_CAKE_100: "#065E7C",
  },

  FONTS: {
    POPPINS_100_MEDIUM: css`
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    `,

    POPPINS_300_BOLD: css`
      font-family: "Poppins", sans-serif;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    `,

    POPPINS_400_MEDIUM: css`
      font-family: "Poppins", sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
    `,

    POPPINS_500_MEDIUM: css`
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 4rem;
      line-height: 140%;
    `,

    ROBOTO_SMALLER_REGULAR: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
    `,

    ROBOTO_SMALL_REGULAR: css`
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
    `,

    ROBOTO_BIG_BOLD: css`
      font-family: "Roboto", sans-serif;
      font-size: 2rem;
      font-weight: 700;
      line-height: 160%;
    `,

    ROBOTO_BIGGEST_REGULAR: css`
      font-family: "Roboto", sans-serif;
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 160%;
    `,
  },
}
