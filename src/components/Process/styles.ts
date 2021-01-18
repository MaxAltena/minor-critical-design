import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled(motion.div)`
	position: relative;
	left: 0;
	right: 0;
	width: calc(100% + 8rem);
	transform-origin: center;
	height: 100vh;
	box-sizing: border-box;
	margin: 0 -4rem;
	background: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};

	.comic {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		font-family: "Comic Sans", cursive;
		padding: 2vmin;
		gap: 2vmin;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-template-areas:
			"panel01 panel01 panel01 panel02 panel02 panel02 panel03 panel03 panel03 panel04 panel04 panel04"
			"panel05 panel05 panel06 panel06 panel06 panel09 panel09 panel09 panel10 panel10 panel10 panel10"
			"panel11 panel11 panel11 panel11 panel12 panel12 panel12 panel12 panel13 panel13 panel13 panel13";

		.panel {
			background-color: ${({ theme }) => theme.colors.white};
			border: solid 2px ${({ theme }) => theme.colors.black};
			box-shadow: 0 6px 6px -6px ${({ theme }) => theme.colors.black};
			display: inline-block;
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 100%;

			.text {
				background-color: ${({ theme }) => theme.colors.white};
				border: solid 2px ${({ theme }) => theme.colors.black};
				margin: 0;
				padding: 3px 10px;
			}

			.top-left {
				left: -6px;
				position: absolute;
				top: -2px;
				transform: skew(-15deg);
			}

			.bottom-right {
				bottom: -2px;
				position: absolute;
				right: -6px;
				transform: skew(-15deg);
			}

			.speech {
				background-color: ${({ theme }) => theme.colors.white};
				border: solid 2px ${({ theme }) => theme.colors.black};
				border-radius: 12px;
				display: inline-block;
				margin: 0.5em;
				padding: 0.5em 1em;
				position: relative;
			}

			.speech:before {
				border: solid 12px transparent;
				border-left: solid 12px ${({ theme }) => theme.colors.black};
				border-top: solid 12px ${({ theme }) => theme.colors.black};
				bottom: -24px;
				content: "";
				height: 0;
				right: 24px;
				position: absolute;
				transform: skew(50deg);
				width: 0;
			}

			.speech:after {
				border: solid 10px transparent;
				border-left: solid 10px ${({ theme }) => theme.colors.white};
				border-top: solid 10px ${({ theme }) => theme.colors.white};
				bottom: -19px;
				content: "";
				height: 0;
				right: 28px;
				position: absolute;
				transform: skew(50deg);
				width: 0;
			}

			&.panel01 {
				grid-area: panel01;
				background-image: url("assets/01.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel02 {
				grid-area: panel02;
				background-image: url("assets/02.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel03 {
				grid-area: panel03;
				background-image: url("assets/03.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel04 {
				grid-area: panel04;
				background-image: url("assets/04.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel05 {
				grid-area: panel05;
				background-image: url("assets/05.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: right;
			}
			&.panel06 {
				grid-area: panel06;
				background-image: url("assets/06.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel09 {
				grid-area: panel09;
				background-image: url("assets/09.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel10 {
				grid-area: panel10;
				background-image: url("assets/10.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel11 {
				grid-area: panel11;
				background-image: url("assets/11.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel12 {
				grid-area: panel12;
				background-image: url("assets/12.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
			&.panel13 {
				grid-area: panel13;
				background-image: url("assets/13.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
		}
	}
`;
