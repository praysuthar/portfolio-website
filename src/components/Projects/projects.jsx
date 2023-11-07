import React from "react";
import "./projects.css";
import projectsList from "../../assets/projectdata";

const Projects = () => {
	return (
		<section id="project">
			<div className="t">
				<h2>My Projects</h2>
			</div>
			<div className="project_card_container">
				{projectsList.map((item) => (
					<div className="project_card">
						<img className="project_card_img" src={item.image}></img>
						<span className="project_title">{item.title}</span>
						<div className="project_card_button">
							<a href={item.github_link}>Github Repo</a>
							<br />
							<a href={item.live_link}>Live Site</a>
						</div>
						{/* </div> */}
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
