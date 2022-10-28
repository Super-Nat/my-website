import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [1, 0], [0, 300]);
	const x = useTransform(scrollY, [0, 100], [0, 300]);

	return (
		<motion.header className="header" style={{ opacity: opacity }}>
			<motion.div className="wrapper wrapper--xl" style={{ x: x }}>
				{"</Nat>"}
			</motion.div>
		</motion.header>
	);
};

export default Header;
