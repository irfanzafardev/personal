import React from "react";
import ProfileImg from "../../assets/image/photo-profile.jpg";

import "./introduction.css";

const Introduction = () => {
	return (
		<section className="introduction">
			<div className="row">
				<div className="col-3 col-md-2 col-lg-2">
					<div className="profile-image">
						<img src={ProfileImg} alt="" />
					</div>
				</div>
				<div className="col-7 col-md-8 col-lg-10">
					<div className="profile-details">
						<ul class="list-group">
							<li class="name">Irfan Zafar</li>
							<li class="profession">A Front-end Developer Wannabe</li>
							<li class="region">Jakarta 13540</li>
						</ul>
					</div>
				</div>
				<div className="col-2 d-flex align-items-center justify-content-end">
					{/* <button onClick={toggleTheme}>
            <img src="src/assets/sun-outline.svg" alt="" className='sun-icon rounded-circle' width={"40px"} />
          </button> */}
				</div>
			</div>
		</section>
	);
};

export default Introduction;
