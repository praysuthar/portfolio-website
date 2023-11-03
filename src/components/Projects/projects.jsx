import React from "react";
import "./projects.css";

const Projects = () => {
	return (
		<section id="project">
			<div className="title">My Projects</div>
			<div className="project_card">
				<div className="project_img"></div>
				<div className="project_info">
					<div className="project_name">Quote Generator</div>
					<div className="project_desc">
						A simple quote generator built with HTML, CSS and JavaScript where a
						user can get a quote of the day either famous or inspiration.
					</div>
					<div className="project_tech_stack">HTML CSS React</div>
				</div>
				<div className="project_link">
					<button className="project_src_btn">SOURCE CODE</button>
					<button className="project_live_demo_btn">LIVE DEMO</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
