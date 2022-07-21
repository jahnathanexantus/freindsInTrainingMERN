import Signup from "./components/Signup";
import Header from './components/Header';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

function App() {
	return (
  
		<div className='App'>
			<Header/>
			<Signup/>
			<Footer/>
		</div>
  
	);
}

export default App;
