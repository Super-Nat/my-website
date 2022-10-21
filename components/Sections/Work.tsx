import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

const cardVariants: Variants = {
	offscreen: {
		x: -10,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.5,
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

const Work: React.FC = () => {
	return (
		<section className="work">
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
					<Link href="https://netflix-clone-qew7etz22-super-nat.vercel.app/">
						<a target="_blank">
							<div className="work__item">
								<div className="work__item__img">
									<Image
										src="/images/netflix-clone.jpg"
										layout="fill"
										alt="Netflix-clone"
									/>
								</div>
								<div className="work__item__text">Netflix-clone</div>
							</div>
						</a>
					</Link>
					<Link href="https://tesla-clone-super-nat.vercel.app/">
						<a target="_blank">
							<div className="work__item">
								<div className="work__item__img">
									<Image
										src="/images/tesla-clone.jpg"
										layout="fill"
										alt="Tesla clone"
									/>
								</div>
								<div className="work__item__text">Tesla-clone</div>
							</div>
						</a>
					</Link>
					<Link href="https://tic-tac-toe-super-nat.vercel.app/">
						<a target="_blank">
							<div className="work__item">
								<div className="work__item__img">
									<Image
										src="/images/tic-tac-toe.jpg"
										layout="fill"
										alt="Tic-Tac-Toe"
									/>
								</div>
								<div className="work__item__text">TIC-TAC-TOE</div>
							</div>
						</a>
					</Link>
					<Link href="">
						<a>
							<div className="work__item">
								<div className="work__item__img"></div>
								<div className="work__item__text">Project Name</div>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Work;
