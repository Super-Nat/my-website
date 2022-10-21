import { motion } from "framer-motion";

interface title {
	title: string;
}

const AnimatedLetters: React.FC<title> = ({ title }) => {
	const banner = {
		animate: {
			transition: {
				delayChildren: 1.9,
				staggerChildren: 0.1,
			},
		},
	};
	const letterAni = {
		initial: { y: 400 },
		animate: {
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1,
			},
		},
	};
	return (
		<motion.div
			variants={banner}
			initial="initial"
			animate="animate"
			className="marquees"
		>
			{[...title].map((letter, index) => (
				<motion.span key={index} variants={letterAni}>
					{letter === " " ? <span className="space"></span> : letter}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedLetters;
