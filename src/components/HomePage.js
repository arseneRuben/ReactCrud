import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";


import HomePage from "./components/HomePage";
import CreatePage from './components/CreatePage';

function App() {

	return (
		<div className="App">
			<h1 className="">CCNB-PROG1344 </h1>
			<h3>Single Page App</h3>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
                        path="/create"
                        element={<CreatePage />}
                    />
				</Routes>
				
				
			</Router>
		</div>
	);
}

export default App;

