/** @format */

import s from './App.module.sass';
import { Routes, Route, Link } from 'react-router-dom';
import { StartingPage } from './pages/StartingPage/StartingPage';
import { MainPageAllComp } from './pages/MainPageAllComp/MainPageAllComp';
import { CompInfo } from './pages/CompInfo/CompInfo';

function App() {
	return (
		<div className={s.MainCont}>
			<Routes>
				<Route path='/' element={<StartingPage />}></Route>
				<Route path='/mainpage' element={<MainPageAllComp />}></Route>
				<Route path='/mainpageCard' element={<CompInfo />}></Route>
			</Routes>
		</div>
	);
}

export default App;
