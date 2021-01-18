import styled from "styled-components";

export const StyledContainer = styled.div`
	width: 100%;
	height: 90vh;
	position: relative;

	> * {
		position: absolute;

		> .text {
			> p {
				font-family: ${({ theme }) => theme.fonts.DEFAULT};
				font-size: calc(2.25vw + 2.25vh);
				font-weight: 400;
				text-align: center;
				line-height: calc(2.5vw + 2.5vh);
				margin: 0;
				margin-top: 0.5rem;
			}
			> small {
				display: block;
				font-family: ${({ theme }) => theme.fonts.DEFAULT};
				font-size: calc(0.8vw + 0.8vh);
				font-weight: 400;
				text-align: center;
				line-height: calc(0.9vw + 0.9vh);
				margin-top: 0.5rem;
			}
		}
	}

	> .prize1 {
		left: 5vw;
		top: 5vh;
		transform: rotate(-10deg);
		width: calc(20vw + 20vh);
		height: calc(20vw + 20vh);

		> .img {
			width: 100%;
			height: 100%;
			background-image: url("/assets/socks.png");
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;

			animation-name: animationPrize1;
			animation-direction: alternate;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
			animation-duration: 6s;

			@keyframes animationPrize1 {
				from {
					transform: rotate(-45deg);
				}
				to {
					transform: rotate(370deg);
				}
			}
		}

		> .text {
			margin-top: 1.25rem;
		}
	}

	> .prize2 {
		right: 35vw;
		bottom: 50vh;
		perspective: 720px;
		perspective-origin: 50% -90px;

		.cube {
			position: relative;
			width: 180px;
			transform-style: preserve-3d;
			animation: spin 7500ms infinite linear;

			.pane {
				position: absolute;
				background: #eee;
				width: 180px;
				height: 180px;

				div {
					margin: 0;
					width: 56px;
					height: 56px;
					line-height: 58px;
					vertical-align: middle;
					border: 2px solid #ddd;
					display: inline-flex;
					justify-content: center;
					align-items: center;
				}

				&.back {
					transform: translateZ(-90px) rotateY(180deg);

					div {
						background-color: #009e60;
					}
				}
				&.right {
					transform: rotateY(-270deg) translateX(90px);
					transform-origin: top right;

					div {
						background-color: #fff;
					}
				}
				&.left {
					transform: rotateY(270deg) translateX(-90px);
					transform-origin: center left;

					div {
						background-color: #ffd500;
					}
				}
				&.top {
					transform: rotateX(-90deg) translateY(-90px);
					transform-origin: top center;

					div {
						background-color: #ff5800;
					}
				}
				&.bottom {
					transform: rotateX(90deg) translateY(90px);
					transform-origin: bottom center;

					div {
						background-color: #c41e3a;
					}
				}
				&.front {
					transform: translateZ(90px);

					div {
						background-color: #0051ba;
					}
				}
			}
		}

		@keyframes spin {
			from {
				transform: rotateY(0);
			}
			to {
				transform: rotateY(360deg);
			}
		}

		> .text {
			position: absolute;
			top: 25vh;
		}
	}

	> .badge {
		right: -1vw;
		top: 1vh;
		transform: rotate(20deg);
		width: calc(15vw + 15vh);
		height: calc(15vw + 15vh);

		> .svg {
			width: 100%;
			height: 100%;
			background-image: url("/assets/badge.svg");
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;

			animation-name: animationBadge;
			animation-direction: alternate;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
			animation-duration: 2s;

			@keyframes animationBadge {
				from {
					transform: rotate(18deg);
				}
				to {
					transform: rotate(28deg);
				}
			}
		}
	}
`;
