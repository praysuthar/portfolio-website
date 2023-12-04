import React from "react";
import "./home.css";
const Home = () => {
	return (
		<section id="home-page">
			<div className="home-page-content">
				<span className="hello">Hello World,</span>
				<span className="l2">
					I'm <span className="home-page-name">Pray Suthar</span> <br />
					Frontend Developer
				</span>
				<p className="home-page-intro">
					I am a skilled web designer with experience in creating <br />
					visually pleasing websites
				</p>
			</div>
		</section>
	);
};

export default Home;
