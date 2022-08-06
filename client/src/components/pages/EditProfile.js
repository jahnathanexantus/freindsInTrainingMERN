import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { EDIT_PROFILE } from "../../utils/mutations";




  

  const EditProfile = () => {
    const [formState, setFormState] = useState({
      gender: "",
      fitness_level: "",
      city: "",
      state: "",
      availability: "",
    });

    const [editProfile,{error,data}] = useMutation(EDIT_PROFILE);

  const handleChange = ( event) => {
    const {name,value} =event.target;

    setFormState({
      ...formState,
      [name]:value,
    })
  };

  

  const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);

		try {
			const { data } = await editProfile({
				variables: { ...formState },
			});

			// Auth.login(data.addProfile.token);
		} catch (e) {
			console.log(e);
		}
	};


	

	return (
    <main className="flex-row justify-center mb-4">
    <div className="col-12 col-lg-10">
      <div className="card">
        <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
        <div className="card-body">
         
            <form onSubmit={handleFormSubmit}>
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
                value={formState.text}
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


export default EditProfile;
