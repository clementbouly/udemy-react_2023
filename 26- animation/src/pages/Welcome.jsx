import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"

import cityImg from "../assets/city.jpg"
import heroImg from "../assets/hero.png"

export default function WelcomePage() {
	const { scrollY, scrollYProgress } = useScroll()

	const yCity = useTransform(scrollY, [0, 500], [0, -200])
	const opacityCity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0])

	// animate the superhero image
	const yHero = useTransform(scrollY, [0, 500], [0, -100])
	const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0])

	const scaleText = useTransform(scrollY, [0, 300], [1, 1.3])
	const yText = useTransform(scrollY, [0, 300], [0, 200])

	const xSection = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100])
	const xSection2 = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
	const opacitySection = useTransform(scrollY, [0, 500], [0, 1])

	return (
		<>
			<header id="welcome-header">
				<motion.div style={{ scale: scaleText, y: yText }} id="welcome-header-content">
					<h1 style={{ scale: scaleText }}>Ready for a challenge?</h1>
					<Link id="cta-link" to="/challenges">
						Get Started
					</Link>
				</motion.div>
				<motion.img
					style={{ opacity: opacityCity, y: yCity }}
					src={cityImg}
					alt="A city skyline touched by sunlight"
					id="city-image"
				/>
				<motion.img
					style={{ opacity: opacityHero, y: yHero }}
					src={heroImg}
					alt="A superhero wearing a cape"
					id="hero-image"
				/>
			</header>
			<main id="welcome-content">
				<motion.section style={{ x: xSection }}>
					<h2 style={{ opacity: opacitySection }}>There&apos;s never been a better time.</h2>
					<p style={{ opacity: opacitySection }}>
						With our platform, you can set, track, and conquer challenges at your own pace. Whether
						it&apos;s personal growth, professional achievements, or just for fun, we&apos;ve got you
						covered.
					</p>
				</motion.section>

				<motion.section style={{ x: xSection2 }}>
					<h2 style={{ opacity: opacitySection }}>Why Challenge Yourself?</h2>
					<p style={{ opacity: opacitySection }}>
						Challenges provide a framework for growth. They push boundaries, test limits, and result in
						genuine progress. Here, we believe everyone has untapped potential, waiting to be unlocked.
					</p>
				</motion.section>

				<motion.section style={{ x: xSection }}>
					<h2 style={{ opacity: opacitySection }}>Features</h2>
					<ul style={{ opacity: opacitySection }}>
						<li>Custom challenge creation: Set the rules, define your pace.</li>
						<li>Track your progress: See your growth over time with our analytics tools.</li>
						<li>Community Support: Join our community and get motivated by peers.</li>
					</ul>
				</motion.section>

				<motion.section style={{ x: xSection2 }}>
					<h2 style={{ opacity: opacitySection }}>Join Thousands Embracing The Challenge</h2>
					<p style={{ opacity: opacitySection }}>
						“I never realized what I was capable of until I set my first challenge here. It&apos;s been a
						transformative experience!” - Alex P.
					</p>
					{/* You can add more testimonials or even a carousel for multiple testimonials */}
				</motion.section>
			</main>
		</>
	)
}
