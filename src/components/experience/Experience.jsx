import React from "react";
import "./experience.css";

const Experience = () => {
	return (
		<section className="experience">
			<header>
				<h1>Experience</h1>
			</header>
			<div className="experience-list">
				<div className="experience-list-item row">
					<div className="col-3">
						<p className="year">2023</p>
					</div>
					<div className="col-9">
						<ul className="list-group">
							<li className="title">
								<a href="https://curiousfootwear.vercel.app/" target="_blank" rel="noreferrer">
									The Curious Footwear
								</a>
							</li>
							<li className="stack">React, Node.js, MongoDB</li>
							<li className="description">Led and developed a social networking platform that focuses on showcasing valuable pre-owned footwear, allowing users to share and have feedback from other users.</li>
						</ul>
					</div>
				</div>
				<div className="experience-list-item row">
					<div className="col-3">
						<p className="year">2022</p>
					</div>
					<div className="col-9">
						<ul className="list-group">
							<li className="title">
								<a href="http://exam.portalsvipb.com/" target="_blank" rel="noreferrer">
									SV IPB Examination Management System
								</a>
							</li>
							<li className="stack">Laravel, MySQL</li>
							<li className="description">Designed and implemented a web-based application to manage the exam process at IPB University School of Vocational Studies</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
