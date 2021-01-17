import styled from "styled-components";

import type { StyledContainerProps, StyledFullpageContainerProps } from "./types";

export const StyledContainer = styled.div<StyledContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;

	#logo {
		fill: ${({ theme }) => theme.colors.black};
		${props => (props.speedMultiplier ? `--speed-multiplier: ${props.speedMultiplier};` : `--speed-multiplier: 1;`)}

		@keyframes fade {
			from {
				opacity: 1;
			}
			to {
				opacity: 0;
			}
		}

		animation-name: fade;
		animation-duration: calc(1000ms * var(--speed-multiplier));
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
		animation-direction: alternate;
	}
`;

export const StyledFullpageContainer = styled.div<StyledFullpageContainerProps>`
	user-select: none;
	-webkit-user-drag: none;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${({ backgroundColor }) => backgroundColor};
`;
