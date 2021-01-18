import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: 1fr;

	> * {
		width: 100%;
		position: relative;
		z-index: 1;

		&:nth-child(2) {
			margin-top: 95vh;
		}
	}
`;

export const StyledHero = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: none;
	z-index: 0;
	cursor: s-resize;
	background: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
`;

export const StyledHeading1 = styled.h1`
	font-family: ${({ theme }) => theme.fonts.mono};
	font-size: calc(12.5vw + 12.5vh);
	font-weight: 900;
	text-transform: uppercase;
	text-align: center;
	width: 100%;
	height: auto;
	line-height: calc(12.5vw + 12.5vh);
	margin: 0;
	user-select: none;
	-webkit-user-drag: none;
`;

export const StyledBigger = styled(motion.div)`
	width: 100%;
	height: auto;
	background: ${({ theme }) => theme.colors.black};
	transform-origin: center;
`;

export const StyledSection = styled.section`
	position: relative;
	width: 100%;
	box-sizing: border-box;
	padding: 4rem;
	display: block;

	&:last-of-type {
		padding-bottom: 0;
	}

	> h2 {
		font-family: ${({ theme }) => theme.fonts.mono};
		font-size: calc(10vw + 10vh);
		font-weight: 900;
		text-transform: uppercase;
		text-align: center;
		line-height: calc(10vw + 10vh);
		margin-bottom: calc(1vw + 1vh);
	}

	> p {
		font-family: ${({ theme }) => theme.fonts.DEFAULT};
		font-size: calc(2.25vw + 2.25vh);
		font-weight: 400;
		text-align: center;
		line-height: calc(2.5vw + 2.5vh);
		margin: 0 0 calc(2vw + 2vh) 0;
	}
`;
