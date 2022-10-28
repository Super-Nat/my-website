import { motion, useScroll, useTransform, Variants } from "framer-motion";

const About: React.FC = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 200], [0, -100]);
	const width = useTransform(scrollY, [0, 500], ["90%", "100%"]);

	const textVariants: Variants = {
		offscreen: {
			opacity: 0,
			y: 100,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};
	return (
		<section className="about">
			<motion.div className="about__video" style={{ width: width }}>
				<video src="/videos/about.mp4" autoPlay loop muted></video>
				<motion.div
					className="about__video__text"
					variants={textVariants}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.5 }}
				>
					<h2>NATCHAPON</h2>
					<p>Front-end developer</p>
				</motion.div>
			</motion.div>
			<motion.div
				className="about__content"
				variants={textVariants}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.5 }}
			>
				{
					"Hello, I'm a web developer, project leader and apprentice mentor. Experienced in WordPress (Advance), E-learning (HTML, SCSS, Jquery), VueJs, Symfony (Basic) with 6 years. Now I'm learning and practice ReactJs to be a ReactJs developer."
				}
			</motion.div>
		</section>
	);
};

export default About;
