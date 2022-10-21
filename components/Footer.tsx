import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "./AnimatedLetters";

const Footer: React.FC = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [width, setWidth] = useState<number>(0);

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

	const text1Variants: Variants = {
		offscreen: {
			opacity: 0,
			x: -100,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const text2Variants: Variants = {
		offscreen: {
			opacity: 0,
			x: 100,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<footer>
			<div className="footer__main">
				<motion.div
					className="footer__text-slide"
					variants={marqueeVariants}
					animate="animate"
				>
					<div ref={ref}>
						<AnimatedLetters title="Wanna starting something?" />
					</div>
					<div>
						<AnimatedLetters title="Wanna starting something?" />
					</div>
					<div>
						<AnimatedLetters title="Wanna starting something?" />
					</div>
					<div>
						<AnimatedLetters title="Wanna starting something?" />
					</div>
				</motion.div>
				<div className="footer__info">
					<div className="wrapper">
						<div className="footer__side">
							<motion.div
								variants={text1Variants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.3 }}
							>
								<p>
									Feel free to reach out if you want to collaborate with me.
								</p>
								<p>Please drop me a line!</p>
								<Link href="mailto:nuttsumc@gmail.com">
									<a className="footer__mail">NUTTSUMC@GMAIL.COM</a>
								</Link>
							</motion.div>
							<motion.div
								variants={text2Variants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.3 }}
							>
								<ul>
									<li>Or</li>
									<li>
										<Link href="">
											<a>LinkedIn</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Github</a>
										</Link>
									</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__sup">
				<div className="wrapper">
					<div className="footer__sup__text">
						<div>©Copyright 2022. All rights reserved.</div>
						<div>
							Developed by Natchapon | Designed by{" "}
							<Link href="mailto:">
								<a>Kunnapat</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
