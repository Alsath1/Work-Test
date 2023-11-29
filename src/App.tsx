/** @format */

import { useState } from 'react';
import s from './App.module.sass';
import { Routes, Route, Link } from 'react-router-dom';
import { StartingPage } from './pages/StartingPage/StartingPage';

function App() {
	return (
		<div className={s.MainCont}>
			<StartingPage />
		</div>
	);
}

export default App;
