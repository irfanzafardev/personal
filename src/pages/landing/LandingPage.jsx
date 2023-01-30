import React from "react";
import Introduction from "../../components/introduction/Introduction";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Project from "../../components/project/Project";
import Experience from "../../components/experience/Experience";

import "./style.css";

const LandingPage = () => {
	return (
		<main>
			<div>
				<Introduction />
				<About />
				<Contact />
				<Project />
				{/* <Experience /> */}
				{/* <Education /> */}
				{/* <Achievement /> */}
			</div>
		</main>
	);
};

export default LandingPage;
