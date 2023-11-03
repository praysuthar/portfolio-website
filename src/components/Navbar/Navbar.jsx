import React from "react";
import "./navbar.css";
import profile_logo from "../../assets/profile-pic.jpg";
import { Link } from "react-scroll";

function Navbar() {
	return (
		<nav className="navbar">
			<img src={profile_logo} alt="Profile Picture" className="logo" />
			<div className="menu-bar">
				<Link
					activeClass="active"
					to="home-page"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="menu-bar-list-item"
				>
					Home
				</Link>
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={-50}
					duration={500}
					className="menu-bar-list-item"
				>
					About
				</Link>
				<Link
					activeClass="active"
					to="project"
					spy={true}
					smooth={true}
					offset={-50}
					duration={500}
					className="menu-bar-list-item"
				>
					Projects
				</Link>
				<Link className="menu-bar-list-item">Skills</Link>
				<Link className="menu-bar-list-item">Resume</Link>
				<Link className="menu-bar-list-item">Contact</Link>
			</div>
		</nav>
	);
}
export default Navbar;

//activeClass="active" to="home-page" spy={true} smooth={true} offset={-50} duration={500}
