import { CompCart } from './CompCart';
import s from './MainPageAllComp.module.sass';
import i from './2.png';
import o from './1.png';
import { MainPageFilter } from '../MainPageFilter/MainPageFilter';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { WinStateSlice } from 'src/Store/redusers/WindowState';
import { Link } from 'react-router-dom';
import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import { CompSlice } from 'src/Store/redusers/UserSlice';
import { useEffect } from 'react';
import { Map1 } from 'src/Map1';

// Переделать на итерацтю массива по фильтрам Comp List
export const MainPageAllComp = () => {
	const { StateWin, winCurrent } = useAppSelector(state => state.WinStateSlice);
	const { winState, winCurrentstring } = WinStateSlice.actions;
	const { AllComp } = useAppSelector(state => state.CompSlice);

	const { filterSort } = CompSlice.actions;
	const { SortType } = useAppSelector(state => state.CompSlice);
	const { filterType } = CompSlice.actions;

	const { currentCardInfo } = useAppSelector(state => state.WinStateSlice);
	const { CurrentCard } = WinStateSlice.actions;

	const dispatch = useAppDispatch();

	const arrayToRender = AllComp.filter(el => el.name.includes(winCurrent)).sort(
		(a, b) =>
			SortType.split('-')[1].includes('up')
				? b[SortType.split('-')[0]] - a[SortType.split('-')[0]]
				: a[SortType.split('-')[0]] - b[SortType.split('-')[0]]
	);

	return (
		<>
			<MainPageFilter />
			<div className={s.mainCont}>
				<Link
					style={{ textDecoration: 'none', color: '#FFF' }}
					className={s.CompanyList}
					to='/'
				>
					Company List
				</Link>
				<div className={s.semiCont}>
					<div className={s.ContFlex}>
						<div className={s.compList}>
							{arrayToRender.map(el => {
								return (
									<div className={s.CartCont} key={el.id}>
										<img src={o} className={s.img} />
										<div className={s.comtInfo}>
											<div className={s.Comp}>{el.name}</div>
											<div className={s.adress}>
												<div className={s.text}>{el.address}</div>
											</div>
											<div className={s.star}>
												<div className={s.bal}>{el.reit}</div>
												<Link
													style={{ textDecoration: 'none', color: '#FFF' }}
													to='/mainpageCard'
													onClick={() => {
														dispatch(CurrentCard(el.id));
													}}
												>
													Подробнее
												</Link>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className={s.Crta}>
							<div className={s.miniCont}>
								<div className={s.navMenu}>
									<div
										className={s.filters}
										onClick={() => {
											dispatch(winState(StateWin ? false : true));
										}}
									>
										Фильтры
									</div>
								</div>
								<div className={s.miniCont2}>
									<input
										type='search'
										placeholder='Введите название компании '
										value={winCurrent}
										onChange={e => {
											dispatch(winCurrentstring(e.currentTarget.value));
										}}
									/>
								</div>
							</div>
							<div className={s.maps}>
								<Map1></Map1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
