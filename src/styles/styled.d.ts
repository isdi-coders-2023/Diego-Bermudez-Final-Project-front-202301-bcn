import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      cyan: string;
      yellow: string;
      magenta: string;
      violet: string;
      black: string;
      blackAlpha: string;
      grey: string;
      lightGrey: string;
      white: string;
    };

    fonts: {
      mainFont: string;
      titleFont: string;
    };

    fontSizes: {
      standard: string;
      cardTitle: string;
      detailParagraph: string;
      title: string;
      errorTitle: string;
      errorMessage: string;
    };

    generalStyles: {
      cornerRadius: string;
      fieldWidth: string;
      fieldHeight: string;
    };
  }
}
