import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";

import { State, changeUID } from "@/redux";
import { FullpageLoader } from "@/components";
import { PageHome } from "@/pages";
import type { Props } from "./types";
import { StyledStrong } from "./styles";
import { theme } from "@/styles";

export const App = ({ bootstrapped }: Props): ReactElement => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const app = useSelector((state: State) => state.app);
	const location = useSelector((state: State) => state.router.location);
	const dispatch = useDispatch();

	useEffect(() => {
		if (bootstrapped && app.uid === "") dispatch(changeUID(uuid()));
		else if (bootstrapped && !loaded) setTimeout(() => setLoaded(true), 1000);
		else setLoaded(bootstrapped);
	}, [bootstrapped, app, location]);

	return (
		<>
			<motion.div
				initial={false}
				animate={{ opacity: loaded ? 0 : 1, pointerEvents: loaded ? "none" : "auto" }}
				transition={{ duration: 0.5 }}
			>
				<FullpageLoader sizeMultiplier={2} speedMultiplier={0.75} backgroundColor={theme.colors.white}>
					<StyledStrong>Loading Digital Detox...</StyledStrong>
				</FullpageLoader>
			</motion.div>

			<motion.div initial={false} animate={{ opacity: loaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
				<Switch>
					<Route render={() => <PageHome />} />
				</Switch>
			</motion.div>
		</>
	);
};

export default App;
