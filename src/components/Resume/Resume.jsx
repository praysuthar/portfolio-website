import React from "react";
import "./resume.css";
import img from "../../assets/Resume.jpg";

const Resume = () => {
	return (
		<section id="resume">
			<div className="resume_title">Resume</div>
			<a
				href="../../assets/pray_resume.pdf"
				download
				className="download_button"
			>
				Download Resume
			</a>
			<div className="resume-container">
				<div className="header">
					<div className="header-left">
						<div className="name">Pray Suthar</div>
						<p>Frontend Developer</p>
					</div>
					<div className="header-right">
						<span>+1 (121)121-1212</span>
						<span>praysuthar1212@gmail.com</span>
						<span>Winnipeg,Canada</span>
						<span>(Willing to Relocate)</span>
						<a href="https://www.linkedin.com/in/praysuthar/">
							linkedin.com/praysuthar
						</a>
						<a href="http://github.com/praysuthar">github.com/praysuthar</a>
					</div>
				</div>
				<div className="body">
					<div className="summary">
						<div className="title">
							<h3>Summary:</h3>
						</div>
						<ul>
							<li>
								Applied Computer Science graduate passionate in software
								development with substantial hands-on experience in
								object-oriented programming, cloud environment, developing,
								testing, and debugging code, designing interfaces, and
								administering systems and networks. Proficient at collaboration,
								problem-solving skills and working in a team environment.
							</li>
						</ul>
					</div>
					<div className="education">
						<div className="title">
							<h3>Education:</h3>
						</div>
						<ul>
							<li>
								<h4>
									University of Winnipeg, Bachelor’s Applied Computer Science
								</h4>
							</li>
							<li>
								<div className="head">Relevant Coursework: </div> Database
								Systems, DSA, Project Management, System Analysis and Design
							</li>
						</ul>
					</div>
					<div className="skills">
						<div className="title">
							<h3>Skills:</h3>
						</div>
						<div className="skills-section">
							<ul>
								<li>
									<div className="head">Languages:</div> JavaScript, HTML, CSS,
									Node.JS, Python, Java, SQL
								</li>
								<li>
									<div className="head">Libraries:</div> React, Express.js,
									NumPy, Pandas
								</li>
								<li>
									<div className="head">Databases:</div>PostgreSQL, MySQL,
									MongoDB
								</li>
								<li>
									<div className="head">Tools:</div>Visual Studio, Git, GitHub,
									JIRA, Gradle, PyCharm, Anaconda
								</li>
							</ul>
						</div>
					</div>
					<div className="projects">
						<div className="title">
							<h3>Projects:</h3>
						</div>
						<div className="project-section">
							<h4>Netflix Clone (Currently Working)</h4>
							<ul>
								<li>
									Experiencing the future of streaming with my Netflix Clone
									project, a React JS driven application integrated with a
									Restful API for real-time content updates and styled with the
									modern elegance of Tailwind CSS
								</li>

								<li>
									<div className="head">Tech Stack:</div>React, Tailwind CSS
								</li>
							</ul>
						</div>
						<div className="project-section">
							<h4>Weather App</h4>
							<ul>
								<li>
									Discover real-time weather updates with my Weather App, build
									using React and powered by OpenWeatherMap API, providing
									accurate and dynamic weather information.
								</li>

								<li>
									<div className="head">Tech Stack:</div>React, Chakra UI
								</li>
							</ul>
						</div>
						<div className="project-section">
							<h4>Quote Generator</h4>
							<ul>
								<li>
									Explore a source of inspiration with my Quote Generator
									project, utilizing Vite and an API, ensuring a smooth and
									uplifting user experience.
								</li>

								<li>
									<div className="head">Tech Stack:</div>Vite, CSS
								</li>
							</ul>
						</div>
					</div>
					<div className="other-exp">
						<div className="title">
							<h3>Other Experience:</h3>
						</div>
						<div className="job-title">
							<h4>
								<b>Claims Associate,</b> Walmart, Winnipeg
							</h4>
						</div>
						<div className="job_description">
							<ol>
								<li>
									Ability to multitask and manage different responsibilities in
									different departments as assigned by management during high
									volumes and fast-paced operations.
								</li>
								<li>
									Monitor merchandise being returned through claims and protect
									assets by ascertaining proper process and handling regarding
									shrink, to keep charge backs to a minimum. Recording and
									monitoring returns and shrink wins within the store.
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
