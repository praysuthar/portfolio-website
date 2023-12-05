import React from "react";
import "./skills.css";

const Skills = () => {
	const frontendSkills = [
		{ name: "React.js" },
		{ name: "JavaScript" },
		{ name: "HTML5" },
		{ name: "CSS3 / SASS" },
		{ name: "Responsive Web Design" },
	];

	const backendSkills = [
		{ name: "Node.js" },
		{ name: "Express.js" },
		{ name: "RESTful APIs" },
		{ name: "MongoDB" },
		{ name: "API Integration" },
	];

	const otherSkills = [
		{ name: "Git / GitHub" },
		{ name: "Command Line" },
		{ name: "NPM / Yarn" },
		{ name: "Jira" },
		{ name: "Responsive Design" },
		{ name: "Cross-Browser Compatibility" },
		{ name: "Debugging / DevTools" },
		{ name: "Web Performance Optimization" },
	];

	return (
		<section id="skills">
			<div className="skills-title">Skills</div>
			<div className="skills-container">
				<div className="skills-category">
					<h2>Frontend</h2>
					<ul>
						{frontendSkills.map((skill, index) => (
							<li key={index}>{skill.name}</li>
						))}
					</ul>
				</div>

				<div className="skills-category">
					<h2>Backend</h2>
					<ul>
						{backendSkills.map((skill, index) => (
							<li key={index}>{skill.name}</li>
						))}
					</ul>
				</div>

				<div className="skills-category">
					<h2>Other</h2>
					<ul>
						{otherSkills.map((skill, index) => (
							<li key={index}>{skill.name}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
