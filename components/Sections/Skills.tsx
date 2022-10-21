import { motion, useScroll, useTransform, Variants } from "framer-motion";

const Skills: React.FC = () => {
	const { scrollY } = useScroll();
	const x = useTransform(scrollY, [0, 3000], [0, -1000]);
	const x1 = useTransform(scrollY, [0, 3000], [0, 1000]);

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
	return (
		<section>
			<div className="skills">
				<div className="wrapper">
					<motion.div
						className="skills__title"
						variants={titleVariants}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.3 }}
					>
						Not just one Skill
					</motion.div>
					<motion.h2
						className="skills__title"
						variants={titleVariants}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.7 }}
					>
						{"</ But I can do more>"}
					</motion.h2>
				</div>
				<div className="skills__banner">
					<motion.div className="skills__bar" style={{ x: x }}>
						<div className="skills__item">HTML</div>
						<div className="skills__item"> - CSS</div>
						<div className="skills__item"> - JAVASCRIPT</div>
						<div className="skills__item"> - JQUERY</div>
						<div className="skills__item"> - REACTJS</div>
						<div className="skills__item"> - SQL</div>
						<div className="skills__item"> - TYPESCRIPT</div>
						<div className="skills__item"> - WORDPRESS</div>
						<div className="skills__item"> - HTML</div>
						<div className="skills__item"> - CSS</div>
						<div className="skills__item"> - JAVASCRIPT</div>
						<div className="skills__item"> - JQUERY</div>
						<div className="skills__item"> - REACTJS</div>
						<div className="skills__item"> - SQL</div>
						<div className="skills__item"> - TYPESCRIPT</div>
						<div className="skills__item"> - WORDPRESS</div>
					</motion.div>
					<motion.div className="skills__bar skills__bar--2" style={{ x: x1 }}>
						<div className="skills__item">HTML</div>
						<div className="skills__item"> - CSS</div>
						<div className="skills__item"> - JAVASCRIPT</div>
						<div className="skills__item"> - JQUERY</div>
						<div className="skills__item"> - REACTJS</div>
						<div className="skills__item"> - SQL</div>
						<div className="skills__item"> - TYPESCRIPT</div>
						<div className="skills__item"> - WORDPRESS</div>
						<div className="skills__item"> - HTML</div>
						<div className="skills__item"> - CSS</div>
						<div className="skills__item"> - JAVASCRIPT</div>
						<div className="skills__item"> - JQUERY</div>
						<div className="skills__item"> - REACTJS</div>
						<div className="skills__item"> - SQL</div>
						<div className="skills__item"> - TYPESCRIPT</div>
						<div className="skills__item"> - WORDPRESS</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
