import { motion, useScroll, useTransform } from "framer-motion";

const About: React.FC = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 200], [0, -100]);
	const width = useTransform(scrollY, [0, 500], ["90%", "100%"]);

	return (
		<section className="about">
			<motion.div className="about__video" style={{ width: width }}>
				<video src="/videos/about.mp4" autoPlay loop muted></video>
				<div className="about__video__text">
					<h2>NATCHAPON</h2>
					<p>Front-end developer</p>
				</div>
			</motion.div>
			<div className="about__content">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry’s standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</div>
		</section>
	);
};

export default About;
