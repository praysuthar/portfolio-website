import React from "react";

const About = () => {
	return (
		<section
			id="about"
			style={{ padding: "60px 0", margin: "0 auto", maxWidth: "800px" }}
		>
			<div
				className="about_title fw-120 text-center mb-3"
				style={{ fontSize: "2.1rem" }}
			>
				About Me
			</div>
			<p
				className="about_info fw-50 text-center"
				style={{ fontSize: "1.75rem" }}
			>
				Hi, I’m a recent graduate with a passion for web development. I have
				experience in building full-stack web applications using the MERN stack
				(MongoDB, Express, React, and Node.js). I enjoy creating responsive and
				user-friendly front-end interfaces with HTML, CSS, and JavaScript. I
				also have skills in back-end development, RESTful APIs, and database
				management. I’m a team player who values collaboration, communication,
				and feedback. I’m always eager to learn new technologies and improve my
				coding skills. I’m looking for opportunities to work on exciting and
				challenging projects that can make a positive impact. You can check out
				some of my work on my GitHub profile or contact me via email. Thank you
				for visiting my website! 😊
			</p>
		</section>
	);
};

export default About;
