import React from "react";
const Home = () => {
	return (
		<section id="home-page" style={{ width: "100vw" }}>
			<div
				className="
						d-flex
						flex-column
						justify-content-center
						text-center
						p-2
						mx-auto
						bg-dark
						text-white
						"
				style={{ fontWeight: 700, height: "95vh" }}
			>
				<h3>Hello World,</h3>
				<h1 className="display-2">
					I'm <span style={{ color: "#c57eec" }}>Pray Suthar</span>
					<br />
					Frontend Developer
				</h1>
				<div className="fs-l" style={{ fontWeight: 200 }}>
					I am a skilled web designer with experience in creating visually
					pleasing websites
				</div>
			</div>
		</section>
	);
};

export default Home;
