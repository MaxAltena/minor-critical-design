// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement, useRef } from "react";

import { theme } from "@/styles";
import { useOnScreen } from "@/utils";
import { StyledContainer } from "./styles";

export const Process = (): ReactElement => {
	const element = useRef(null);
	const isFullScreen = useOnScreen(element, "-50%");

	return (
		<StyledContainer
			ref={element}
			initial={false}
			animate={{
				transform: isFullScreen ? `scale(1)` : `scale(0.75)`,
				borderRadius: isFullScreen ? `0` : theme.borderRadius.xl,
			}}
		>
			<div className="comic">
				<div className="panel panel01">
					<p className="text bottom-right">
						Go to one of the <strong>Digital Detox Lockers&trade;</strong>
					</p>
				</div>
				<div className="panel panel02">
					<p className="text top-left">
						Get your <strong>Digital Detox Survival Pack&trade;</strong>
					</p>
					<p className="text bottom-right">Including an old school nokia phone and brain teasers</p>
				</div>
				<div className="panel panel03">
					<p className="text top-left">Put your phone inside of the locker</p>
				</div>
				<div className="panel panel04">
					<p className="text top-left">
						Close your locker and start the <strong>Digital Detox</strong>
					</p>
				</div>
				<div className="panel panel05">
					<p className="text top-left">Now, let&apos;s get to detoxing!</p>
				</div>
				<div className="panel panel06">
					<p className="text top-left">SOME TIME LATER...</p>
					<p className="text bottom-right">When done, go back to the locker</p>
				</div>
				<div className="panel panel09">
					<p className="text top-left">
						Hand in part of the <strong>Digital Detox Survival Pack&trade;</strong>
					</p>
				</div>
				<div className="panel panel10">
					<p className="text bottom-right">Retrieve your phone from the locker</p>
				</div>
				<div className="panel panel11">
					<p className="text speech">Did I forget something?</p>
				</div>
				<div className="panel panel12">
					<p className="text bottom-right">Do not forget your rewards in the main locker!</p>
				</div>
				<div className="panel panel13">
					<p className="text top-left">
						Congratulations on your <strong>Digital Detox Rewards&trade;</strong>!
					</p>
					<p className="text bottom-right">THE END</p>
				</div>

				{/* <div className="panel size1">
					<p className="text top-left">Try resizing...</p>
					<p className="text bottom-right">...it's responsive</p>
				</div>
				<div className="panel size1">
					<p className="speech">A speech bubble</p>
				</div>
				<div className="panel size1">
					<p className="text bottom-right">THE END</p>
				</div> */}
			</div>
		</StyledContainer>
	);
};
