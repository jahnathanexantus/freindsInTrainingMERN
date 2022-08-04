import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../../utils/mutations";
import 'react-bootstrap'

// import Auth from "../../utils/Auth";

const Signup = () => {
	const [formState, setFormState] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		gender: "",
		fitness_level: "",
		city: "",
		state: "",
		availability: "",
	});
	const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);

		try {
			const { data } = await addProfile({
				variables: { ...formState },
			});

			// Auth.login(data.addProfile.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className="flex-row justify-center mb-4">
			<div className="col-12 col-lg-10">
				<div className="card">
					<h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
					<div className="card-body">
						{data ? (
							<p>
								Success! You may now head{"home "}
								<Link to="/home"> homepage.</Link>
							</p>
						) : (
							<form onSubmit={handleFormSubmit}>
								<input
									className="form-input"
									placeholder="first_name"
									name="first_name"
									type="text"
									value={formState.first_name}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="last_name"
									name="last_name"
									type="text"
									value={formState.last_name}
									onChange={handleChange}
								/>

								<input
									className="form-input"
									placeholder="email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="password"
									name="password"
									type="password"
									value={formState.password}
									onChange={handleChange}
								/>

								<input
									className="form-input"
									placeholder="gender"
									name="gender"
									type="text"
									value={formState.gender}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="fitness_level"
									name="fitness_level"
									type="text"
									value={formState.fitness_level}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="city"
									name="city"
									type="text"
									value={formState.city}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="state"
									name="state"
									type="text"
									value={formState.state}
									onChange={handleChange}
								/>
								<input
									className="form-input"
									placeholder="availability"
									name="availability"
									type="text"
									value={formState.availability}
									onChange={handleChange}
								/>
								<button
									className="btn btn-block btn-info"
									style={{ cursor: "pointer" }}
									type="submit"
								>
									Submit
								</button>
							</form>
						)}

						{error && (
							<div className="my-3 p-3 bg-danger text-white">
								{error.message}
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Signup;
