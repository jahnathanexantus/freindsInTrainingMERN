import React from "react";
import bkgImage from "../../images/login_bg.jpg";

const Home = () => {
	const bkgStyle = {
		backgroundImage: `url(${bkgImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		// background-position: "static"
	};
	return (
		<div className="pageContainer" style={bkgStyle}>
			<div className="loginContainer">
				<div className="loginContainerLeft">
					<div>
						<img src="images/FITlogo.png" />
						<p>Welcome to F.I.T.</p>
					</div>

					<p>Login to find the perfect workout partner.</p>
					<input type="text" placeholder="email address" />
					<input type="password" placeholder="password" />

					<button>submit</button>
				</div>

				<div className="loginContainerRight">
					<div class="text-white px-3 py-4 ">
						<h2 class="mb-0">Friends In Fitness</h2>
						<h5 class="mb-4">More than just gym partners.</h5>
						<p class="mb-4">
							Find, match, and train with a unique mix of local gym goers
							ranging from novice to enthusiast. <br /> Find your fit, with
							F.I.T.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
