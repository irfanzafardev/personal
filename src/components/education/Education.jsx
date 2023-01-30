import React from "react";

const Education = () => {
	return (
		<section className="education">
			<header>
				<h1>Education</h1>
			</header>
			<div className="row">
				<div className="col-2">
					<p className="year">2022</p>
				</div>
				<div className="col-10">
					<ul class="list-group">
						<li class="institution" style={{ listStyle: "none" }}>
							IPB University
						</li>
						<li class="program" style={{ listStyle: "none" }}>
							Associate's Degree - Informatics Management
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Education;
