import React, { ReactElement } from "react";

import { theme } from "@/styles";
import { Logo } from "@/components";
import { StyledContainer } from "./styles";

export const Prizes = (): ReactElement => (
	<StyledContainer>
		<div className="prize1">
			<div className="img"></div>
			<div className="text">
				<p>De&apos;socks</p>
				<small>To keep your feet warm</small>
			</div>
		</div>
		<div className="prize2">
			<div className="cube">
				<div className="pane front">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>
						<Logo width={36} height={36} color={theme.colors.black} />
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="pane back">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>
						<Logo width={36} height={36} color={theme.colors.black} />
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="pane top">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>
						<Logo width={36} height={36} color={theme.colors.black} />
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="pane bottom">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>
						<Logo width={36} height={36} color={theme.colors.black} />
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="pane left">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>
						<Logo width={36} height={36} color={theme.colors.black} />
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="pane right">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>
						<Logo width={36} height={36} color={theme.colors.black} />
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="text">
				<p>Rubiks cube</p>
				<small>To keep you busy</small>
			</div>
		</div>
		<div className="badge">
			<div className="svg"></div>
			<div className="text">
				<p>Badge</p>
				<small>To showcase your accomplishment</small>
			</div>
		</div>
	</StyledContainer>
);
