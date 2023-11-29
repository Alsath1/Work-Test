/** @format */

import s from './App.module.sass';
import { Routes, Route, Link } from 'react-router-dom';
import { StartingPage } from './pages/StartingPage/StartingPage';
import { MainPageAllComp } from './pages/MainPageAllComp/MainPageAllComp';
import { MainPageFilter } from './pages/MainPageFilter/MainPageFilter';

function App() {
	return (
		<div className={s.MainCont}>
			<Routes>
				<Route path='/' element={<StartingPage />}></Route>
				<Route path='/mainpage' element={<MainPageAllComp />}></Route>
				<Route path='/mainpage/filter' element={<MainPageFilter />}></Route>
			</Routes>
		</div>
	);
}

export default App;
