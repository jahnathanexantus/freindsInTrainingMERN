import React, { useState } from 'react';
import "../css/stylesheet.css";

import signUpUrl from "../../src/image/login_bg.jpg";

function Signup() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleInputChange = (event) => {
		const { name, value } = event.target;
        if(name === "name"){
            setUserName(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "password"){
            setPassword(value);
        }
        
		
	};

	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();

		// Alert the user their first and last name, clear the inputs
		alert(`Hello ${userName}${email}${password}`);
		setUserName("");
        setEmail("");
        setPassword("");
	};

	return (
		<div className="getRight" style={{ backgroundImage: `url(${signUpUrl})` }}>
			
				<form className="form">
					<input
						value={userName}
						name="name"
						onChange={handleInputChange}
						type="text"
						placeholder=" username"
					/>
					<input
						value={email}
						name="email"
						onChange={handleInputChange}
						type="text"
						placeholder="email"
					/>
					<input
						value={password}
						name="password"
						onChange={handleInputChange}
						type="text"
						placeholder="password"
					/>
					<button type="button" onClick={handleFormSubmit}>
						Submit
					</button>
				</form> 
			
		</div>
	);
}

export default Signup;
