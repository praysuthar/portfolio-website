import React from "react";

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
			<div
				className="skills-title text-center mt-2 mb-3"
				style={{ fontSize: "2.1rem", fontWeight: "120", color: "whitesmoke" }}
			>
				Skills
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4 ms-2 me-2">
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title text-center">Frontend Skills</h5>
							<ul className="list-group list-group-flush">
								{frontendSkills.map((skill, index) => (
									<li className="list-group-item" key={index}>
										{skill.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title text-center">Backend Skills</h5>
							<ul className="list-group list-group-flush">
								{backendSkills.map((skill, index) => (
									<li className="list-group-item" key={index}>
										{skill.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<div className="card-body">
							<h5 className="card-title text-center">Other Skills</h5>
							<ul className="list-group list-group-flush">
								{otherSkills.map((skill, index) => (
									<li className="list-group-item" key={index}>
										{skill.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
