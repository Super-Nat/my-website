import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Loader = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [progress, setProgress] = useState<number>(0);
	const [progressDone, setProgressDone] = useState<boolean>(true);

	const progressUpdate = (latest: any) => {
		const progressNumber = parseInt(latest.height.split(".")[0]);
		setProgress(progressNumber);
	};

	const progressVariant = {
		show: {
			height: "100%",
			transition: { duration: 2, ease: "easeInOut" },
		},
		exit: { display: "none" },
	};
	const side = {
		animate: {
			width: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				delay: 2,
				duration: 1,
			},
		},
	};
	return (
		<>
			{loading && (
				<motion.div className="loader">
					<motion.div
						className="loader__side"
						variants={side}
						animate="animate"
					></motion.div>
					<AnimatePresence>
						{progressDone && (
							<motion.div
								className="loader__progress"
								variants={progressVariant}
								animate="show"
								exit="exit"
								onUpdate={progressUpdate}
								onAnimationComplete={() => {
									setProgressDone(false);
								}}
							>
								<div className="loader__num">{progress}%</div>
							</motion.div>
						)}
					</AnimatePresence>
					<motion.div
						className="loader__side"
						variants={side}
						animate="animate"
						onAnimationComplete={() => {
							setLoading(false);
						}}
					></motion.div>
				</motion.div>
			)}
		</>
	);
};

export default Loader;
