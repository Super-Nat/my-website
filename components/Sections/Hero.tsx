import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Hero: React.FC = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [width, setWidth] = useState<number>(1246);
	const { scrollY } = useScroll();
	const backgroundColor = useTransform(scrollY, [0, 200], ["#000", "#fff"]);
	const color = useTransform(scrollY, [0, 200], ["#fff", "#000"]);
	const x1 = useTransform(scrollY, [0, 1000], [0, 200]);
	const opacity = useTransform(scrollY, [0, 100], [1, 0]);

	useEffect(() => {
		setTimeout(() => {
			if (ref.current) {
				let vw = (window.innerWidth * 10) / 100;
				let newVw = ref.current.clientWidth + vw;
				setWidth(newVw);
				window.addEventListener("resize", () => {
					if (ref.current) {
						let vw = (window.innerWidth * 10) / 100;
						let newVw = ref.current.clientWidth + vw;
						setWidth(newVw);
					}
				});
			}
		}, 1000);
	}, []);

	const marqueeVariants = {
		animate: {
			x: [0, -width],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 5,
					ease: "linear",
					delay: 3,
				},
			},
		},
	};

	return (
		<motion.section
			className="hero"
			style={{ background: backgroundColor, color: color }}
		>
			<motion.div className="hero__row" style={{ x: x1 }}>
				<div className="wrapper">
					<motion.div className="hero__text hero__text--big">
						<AnimatedLetters title="Hello!" />
					</motion.div>
				</div>
			</motion.div>
			<div className="hero__row">
				<motion.div
					className="hero__text-slide"
					variants={marqueeVariants}
					animate="animate"
				>
					<div ref={ref} className="hero__text hero__text--big">
						<AnimatedLetters title="I AM NAT!" />
					</div>
					<div className="hero__text hero__text--big">
						<AnimatedLetters title="I AM NAT!" />
					</div>
					<div className="hero__text hero__text--big">
						<AnimatedLetters title="I AM NAT!" />
					</div>
					<div className="hero__text hero__text--big">
						<AnimatedLetters title="I AM NAT!" />
					</div>
					<div className="hero__text hero__text--big">
						<AnimatedLetters title="I AM NAT!" />
					</div>
				</motion.div>
			</div>
			<div className="hero__row no-hide">
				<div className="wrapper">
					<div className="hero__text hero__text--small">
						<motion.span
							initial={{ y: 400 }}
							animate={{ y: 0 }}
							transition={{
								delay: 2,
								ease: [0.6, 0.01, -0.05, 0.95],
								duration: 1,
							}}
						>
							Front-end developer
						</motion.span>
					</div>
					<motion.div
						className="hero__text hero__scroll-text"
						style={{ opacity }}
					>
						<motion.span
							initial={{ y: 400 }}
							animate={{ y: 0 }}
							transition={{
								delay: 2,
								ease: [0.6, 0.01, -0.05, 0.95],
								duration: 1,
							}}
						>
							Scroll to explore
						</motion.span>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
