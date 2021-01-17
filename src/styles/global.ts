import { createGlobalStyle } from "styled-components";

import { theme } from "@/styles";

export const GlobalStyle = createGlobalStyle`
	html {
		background: ${theme.colors.white};
	}

	body {
		font-family: ${theme.fonts.DEFAULT};
		font-weight: 400;
		font-size: 1em;
		line-height: 1.62em;
	}
`;
