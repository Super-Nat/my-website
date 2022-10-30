import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const lineVariants: Variants = {
	offscreen: {
		width: "0%",
	},
	onscreen: {
		width: "100%",
		transition: {
			duration: 1.5,
		},
	},
};

const titleVariants: Variants = {
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

const playVariants: Variants = {
	play: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
	pause: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const Work: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.section
			className="work"
			ref={ref}
			variants={playVariants}
			animate={isInView ? "play" : "pause"}
		>
			<h2 className="work__title">
				<motion.span
					variants={titleVariants}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.3 }}
				>
					{"</Recent Work>"}
				</motion.span>
				<motion.span
					variants={lineVariants}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.3 }}
					className="work__title__line"
				></motion.span>
			</h2>
			<div className="wrapper">
				<div className="work__inner">
					<div className="work__item">
						<Link href="https://netflix-clone-qew7etz22-super-nat.vercel.app/">
							<a target="_blank">
								<div className="work__hidden">
									<span> Go to site</span>
									<div className="work__item__link">
										<Image src="/images/link.png" layout="fill" alt="link" />
									</div>
								</div>
								<div className="work__item__img">
									<Image
										src="/images/netflix-clone.jpg"
										layout="fill"
										alt="Netflix-clone"
									/>
								</div>
								<div className="work__item__text">Netflix-clone</div>
							</a>
						</Link>
					</div>
					<div className="work__item">
						<Link href="https://tesla-clone-super-nat.vercel.app/">
							<a target="_blank">
								<div className="work__hidden">
									<span> Go to site</span>
									<div className="work__item__link">
										<Image src="/images/link.png" layout="fill" alt="link" />
									</div>
								</div>
								<div className="work__item__img">
									<Image
										src="/images/tesla-clone.jpg"
										layout="fill"
										alt="Tesla clone"
									/>
								</div>
								<div className="work__item__text">Tesla-clone</div>
							</a>
						</Link>
					</div>
					<div className="work__item">
						<Link href="https://tic-tac-toe-super-nat.vercel.app/">
							<a target="_blank">
								<div className="work__hidden">
									<span> Go to site</span>
									<div className="work__item__link">
										<Image src="/images/link.png" layout="fill" alt="link" />
									</div>
								</div>
								<div className="work__item__img">
									<Image
										src="/images/tic-tac-toe.jpg"
										layout="fill"
										alt="Tic-Tac-Toe"
									/>
								</div>
								<div className="work__item__text">TIC-TAC-TOE</div>
							</a>
						</Link>
					</div>
					<div className="work__item">
						<Link href="">
							<a>
								<div className="work__hidden">
									<span> Go to site!</span>
									<div className="work__item__link">
										<Image src="/images/link.png" layout="fill" alt="link" />
									</div>
								</div>
								<div className="work__item__img">
									<Image
										src="/images/kkk-port.jpg"
										layout="fill"
										alt="Tic-Tac-Toe"
									/>
								</div>
								<div className="work__item__text">KKK Portfolio</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
