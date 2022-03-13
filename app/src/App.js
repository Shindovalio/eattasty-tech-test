import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, Outlet } from "react-router-dom";
import './App.css';
import HomePage from './containers/HomePage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage title='EatTasty - Home' />} />
			</Routes>
		</Router>
	);
}

export default App;
