import React from "react";
import "./home.css";
// import {Link} from 'react-scroll';
const Home = () => {
	return (
		<section id="home-page">
			<div className="home-page-content">
				{/* <img
					src="https://images.unsplash.com/photo-1658274474851-fda40d4c309d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGNvZGluZ3xlbnwwfDB8Mnx8fDI%3D"
					className="bg-cover"
				/> */}
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
