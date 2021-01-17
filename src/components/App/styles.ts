import styled from "styled-components";

export const StyledStrong = styled.strong`
	position: absolute;
	margin-top: 252px;
	color: ${({ theme }) => theme.colors.black};
	font-weight: 400;
	font-size: 1.1em;
	font-family: ${({ theme }) => theme.fonts.mono};
`;
