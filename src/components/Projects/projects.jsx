import React from "react";
import projectsList from "../../assets/projectdata";

const Projects = () => {
	return (
		<section id="project">
			<div className="project_title">My Projects</div>
			<div className="album py-5 bg-body-dark">
				<div className="container">
					<div className="card-group">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
							{projectsList.map((item) => (
								<div className="col">
									<div className="card shadow-sm">
										<img
											className="bd-placeholder-img card-img-top"
											width="100%"
											height="225"
											src={item.image}
											role="img"
											aria-label="Placeholder: Thumbnail"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										/>
										<div className="card-body">
											<h5 className="project_title card-title text-center mt-2">
												{item.title}
											</h5>
											<p className="project_desc card-text">
												{item.description}
											</p>
										</div>
										<div className="card-footer btn-group">
											<a
												href={item.github_link}
												className="btn btn-md btn-dark"
											>
												Github
											</a>

											<a href={item.live_link} className="btn btn-md btn-dark">
												Live Demo
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
