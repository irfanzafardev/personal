import React from "react";

const Achievement = () => {
	return (
		<section className="achievement">
			<h1>Achievement</h1>
			<div className="row mb-4">
				<div className="col-2">
					<p className="year">2021</p>
				</div>
				<div className="col-10">
					<ul class="list-group">
						<li class="event" style={{ listStyle: "none" }}>
							<a href="https://www.instagram.com/p/CWaoNZJvnBK/" className="link" target="_blank">
								1st Place in Web Design Competition by Olivia
							</a>
						</li>
						<li class="project" style={{ listStyle: "none" }}>
							Edumind Web Project
						</li>
					</ul>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-2">
					<p className="year">2021</p>
				</div>
				<div className="col-10">
					<ul class="list-group">
						<li class="event" style={{ listStyle: "none" }}>
							<a href="https://drive.google.com/file/d/1tgxy1RLo_ZAZFh6WJ-fPZkhXnoKZ0JX_/view?usp=sharing" className="link" target="_blank">
								2nd Place in UI/UX Competition by Ifest Uhamka
							</a>
						</li>
						<li class="project" style={{ listStyle: "none" }}>
							Healtify App Project
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-2">
					<p className="year">2021</p>
				</div>
				<div className="col-10">
					<ul class="list-group">
						<li class="event" style={{ listStyle: "none" }}>
							<a href="https://drive.google.com/file/d/1p8t-XDqJmZDJ3ks-c4w7aDtKnt9-jolz/view?usp=sharing" className="link" target="_blank">
								1st Place in Web Design Competition by Voscreation
							</a>
						</li>
						<li class="project" style={{ listStyle: "none" }}>
							Farmculture Web Project
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Achievement;
