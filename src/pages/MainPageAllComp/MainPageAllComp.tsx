import { CompCart } from './CompCart';
import s from './MainPageAllComp.module.sass';
import i from './2.png';
import { MainPageFilter } from '../MainPageFilter/MainPageFilter';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { WinStateSlice } from 'src/Store/redusers/WindowState';

// Переделать на итерацтю массива по фильтрам Comp List
export const MainPageAllComp = () => {
	const { StateWin } = useAppSelector(state => state.WinStateSlice);
	const { winState } = WinStateSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<>
			<MainPageFilter />
			<div className={s.mainCont}>
				<a className={s.CompanyList} href='/'>
					Company List
				</a>
				<div className={s.semiCont}>
					<div className={s.ContFlex}>
						<div className={s.compList}>
							<CompCart></CompCart>
							<CompCart></CompCart>
							<CompCart></CompCart>
							<CompCart></CompCart>
							<CompCart></CompCart>
							<CompCart></CompCart>
							<CompCart></CompCart>
							<CompCart></CompCart>
							<CompCart></CompCart>
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
									<div className={s.selector}>Москва</div>
								</div>
								<div className={s.miniCont2}>
									<input
										type='search'
										placeholder='Введите название компании '
									/>
									<div className={s.search}>Поиск</div>
								</div>
							</div>
							<img src={i} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
