import React from "react";
import "./resume.css";
import img from "../../assets/Resume.png";

const Resume = () => {
	return (
		<section id="resume">
			<div className="resume_title">Resume</div>
			<div className="resume_img">
				<img src={img} alt="Resume" />
			</div>
		</section>
	);
};

export default Resume;
