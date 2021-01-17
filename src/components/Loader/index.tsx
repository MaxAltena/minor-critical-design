import React, { ReactElement } from "react";

import { StyledContainer, StyledFullpageContainer } from "./styles";
import type { Props } from "./types";

export const Loader = ({ speedMultiplier = 1, sizeMultiplier = 1 }: Props): ReactElement => (
	<StyledContainer speedMultiplier={speedMultiplier}>
		<svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 100 100" width={sizeMultiplier * 64}>
			<path d="M50,12.5H30h-5v15H15h-5v60h5v-55h10v40h5h20C75,72.5,75,50,75,50s0-22.5-25-22.5H40v5h10C70,32.5,70,50,70,50  s0,17.5-20,17.5H30v-50h20C85,17.5,85,50,85,50s0,32.5-35,32.5H20v5h30C90,87.5,90,50,90,50S90,12.5,50,12.5z"></path>
		</svg>
	</StyledContainer>
);

export const FullpageLoader = ({
	speedMultiplier = 1,
	sizeMultiplier = 1,
	backgroundColor,
	children,
}: Props): ReactElement => (
	<StyledFullpageContainer backgroundColor={backgroundColor}>
		<Loader speedMultiplier={speedMultiplier} sizeMultiplier={sizeMultiplier} />
		{children}
	</StyledFullpageContainer>
);

export default Loader;
