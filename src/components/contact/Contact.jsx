import React from "react";
import "./contact.css";

const Contact = () => {
	return (
		<section className="contact">
			<header>
				<h1>Contact</h1>
			</header>
			<div className="contact-list">
				<div className="row">
					<div className="col-3">
						<p className="platform">Email</p>
					</div>
					<div className="col-9">
						<a href="mailto:irfanzafar.dev@gmail.com" className="link" target="_blank" rel="noreferrer">
							irfanzafar.dev@gmail.com
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<p className="platform">Github</p>
					</div>
					<div className="col-9">
						<a href="https://github.com/irfanzafardev" className="link" target="_blank" rel="noreferrer">
							github.com/irfanzafardev
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<p className="platform">LinkedIn</p>
					</div>
					<div className="col-9">
						<a href="https://www.linkedin.com/in/irfan-zafar/" className="link" target="_blank" rel="noreferrer">
							linkedin.com/in/irfan-zafar
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
