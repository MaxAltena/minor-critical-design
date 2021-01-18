import React, { ReactElement, useEffect } from "react";

import { theme } from "@/styles";
import { Logo, Prizes, Process } from "@/components";

import { StyledContainer, StyledHero, StyledHeading1, StyledBigger, StyledSection } from "./styles";
import { useMotionValue, useTransform } from "framer-motion";

export const PageHome = (): ReactElement => {
	const scrollY = useMotionValue(window.scrollY);
	const input = [0, window.innerHeight * 0.5];
	const transform = useTransform(scrollY, input, ["scaleX(0.9)", "scaleX(1)"]);
	const borderRadius = useTransform(scrollY, input, ["2rem", "0rem"]);

	const _handleScroll = () => scrollY.set(window.scrollY);

	useEffect(() => {
		document.addEventListener("scroll", _handleScroll);

		return () => {
			document.removeEventListener("scroll", _handleScroll);
		};
	}, []);

	return (
		<StyledContainer>
			<StyledHero
				onClick={() =>
					window.scroll({
						top: window.innerHeight * 0.95,
						left: 0,
						behavior: "smooth",
					})
				}
			>
				<StyledHeading1>
					Digital Detox{" "}
					<Logo
						width="calc(10vw + 10vh)"
						height="100%"
						color={theme.colors.black}
						style={{ display: "inline-block" }}
					/>
				</StyledHeading1>
			</StyledHero>
			<StyledBigger style={{ transform, borderRadius }}>
				<StyledSection>
					<h2>About</h2>
					<p>
						Digital Detox is a concept to stop using our phone so <strong>goddamn</strong> much.
					</p>
					<p>
						Why you may ask? We use our phone for <i>at least</i> <strong>3 hours a day</strong>.
					</p>
					<p>
						Don&apos;t believe me? Check your phone now and see how much your <i>average</i> screen time was
						last week.
					</p>
				</StyledSection>
				<StyledSection>
					<h2>Rewards</h2>
					<p>
						What does <strong>3 hours a day</strong> <i>extra</i> give you? <u>More time</u>.
					</p>
					<p>
						We reward you when using our <strong>Digital Detox Lockers&trade;</strong>. What might such
						rewards include?
					</p>
					<Prizes />
				</StyledSection>
				<StyledSection>
					<h2>Process</h2>
					<p>
						Now that you&apos;ve decided to <i>decrease your screen time</i>; let&apos;s show how you can
						get that number down through <strong>Digital Detox&trade;</strong>.
					</p>
					<p>
						Go to one of the <strong>Digital Detox Locations&trade;</strong> to start and receive your{" "}
						<strong>Digital Detox Survival Pack&trade;</strong> to help you survive these weird times.
					</p>
					<Process />
				</StyledSection>
			</StyledBigger>
		</StyledContainer>
	);
};
