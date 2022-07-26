import React from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Body from "./components/Body"
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";
import Profile from "./components/pages/Profile";
// import { ApolloCache } from '@apollo/client';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import LandingPage from "./components/pages/LandingPage";
import EditProfile from "./components/pages/EditProfile";

const httpLink = createHttpLink({
	uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("id_token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />

					<Route path="/Home" element={<Home />} />

					<Route path="/login" element={<Login />} />

					<Route path="/signup" element={<Signup />} />

					<Route path="/profile" element={<Profile />} />

					<Route path="/editprofile" element={<EditProfile />} />

					<Route path="/chat" element={<Chat />} />
				</Routes>
			</Router>
			<Footer />
		</ApolloProvider>
	);
}

export default App;
