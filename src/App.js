import logo from './logo.svg';
import './App.css';

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";


import Home from "./components/home";

function App() {
	return (
		<div className="App">
			<h1 className="">CCNB-PROG1344 </h1>
			<h3>Single Page App</h3>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				
				</Routes>
			</Router>
		</div>
	);
}

export default App;

