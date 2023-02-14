import React from "react";

import { FiArrowUpRight } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid d-flex justify-content-end">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="https://medium.com/@irfanzafar.dev" target="_blank">
							Journal
							<FiArrowUpRight />
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="https://www.notion.so/irfan-zafar/My-Development-Stacks-614396e3cca349fca4539aaa0a9cd4fe" target="_blank">
							Stack
							<FiArrowUpRight />
						</a>
					</li>
					<li className="nav-item"></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
