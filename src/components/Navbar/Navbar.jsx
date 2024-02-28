import React from "react";
import { Link } from "react-scroll";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container-fluid" style={{ width: "100%" }}>
				<button
					className="navbar-toggler  "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
					style={{ backgroundColor: "#706F6F" }}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav"
				>
					<ul className="navbar-nav" style={{ backgroundColor: "black" }}>
						<li className="nav-item">
							<Link
								className="nav-link active bg-dark text-white"
								activeclassName="active"
								aria-current="page"
								to="home-page"
								smooth={true}
								duration={500}
								style={{ cursor: "pointer" }}
								spy={true}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link bg-dark text-white"
								activeclassName="active"
								to="about"
								smooth={true}
								duration={500}
								style={{ cursor: "pointer" }}
								spy={true}
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link bg-dark text-white"
								activeclassName="active"
								to="project"
								smooth={true}
								duration={500}
								style={{ cursor: "pointer" }}
								spy={true}
							>
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link bg-dark text-white"
								activeclassName="active"
								to="skills"
								smooth={true}
								duration={500}
								style={{ cursor: "pointer" }}
								spy={true}
							>
								Skills
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link bg-dark text-white"
								activeclassName="active"
								to="resume"
								smooth={true}
								duration={500}
								style={{ cursor: "pointer" }}
								spy={true}
							>
								Resume
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link bg-dark text-white"
								activeclassName="active"
								to="contact"
								smooth={true}
								duration={500}
								style={{ cursor: "pointer" }}
								spy={true}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
