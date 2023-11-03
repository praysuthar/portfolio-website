import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/home.jsx";
import Projects from "./components/Projects/projects.jsx";
import Footer from "./components/Footer/footer.jsx";
import About from "./components/About/about.jsx";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
