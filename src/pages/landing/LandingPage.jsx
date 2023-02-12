import React from "react";
import Introduction from "../../components/introduction/Introduction";
import Summarry from "../../components/summary/Summary";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Project from "../../components/project/Project";

import "./style.css";

const LandingPage = () => {
	return (
		<main>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-xl-5 col-lg-4 col-md-8 col-12 mx-2">
						<Introduction />
						<Summarry />
						<About />
						<Contact />
						<Project />
					</div>
				</div>
			</div>
		</main>
	);
};

export default LandingPage;
