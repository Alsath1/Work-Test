import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import s from './MainPageFilter.module.sass';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { WinStateSlice } from 'src/Store/redusers/WindowState';
import { CompSlice } from 'src/Store/redusers/UserSlice';

export const MainPageFilter = () => {
	const { StateWin } = useAppSelector(state => state.WinStateSlice);
	const { winState } = WinStateSlice.actions;

	const { SortType } = useAppSelector(state => state.CompSlice);
	const { filterType } = CompSlice.actions;

	const dispatch = useAppDispatch();
	return (
		<div className={StateWin ? s.ContMainNav : s.ContMainNavFalse}>
			<div className={s.Main}>
				<div className={s.contFlex}>
					<div className={s.FlexFix}>
						<div className={s.MainInfo}>
							<div className={s.Inf}>Общая информация</div>
							<div className={s.R} style={{ display: 'flex' }}>
								<div className={s.RT}>Рейтинг</div>
								<div
									onClick={() => {
										dispatch(filterType('reit-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'reit-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('reit-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'reit-down' ? 1 : 0.3}
									/>
								</div>
							</div>
							<div className={s.O} style={{ display: 'flex' }}>
								<div className={s.OT}>Отрасль</div>
								<div
									onClick={() => {
										dispatch(filterType('otrasl-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'otrasl-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('otrasl-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'otrasl-down' ? 1 : 0.3}
									/>
								</div>
							</div>
							<div className={s.D} style={{ display: 'flex' }}>
								<div className={s.DT}>Дата создания компании</div>
								<div
									onClick={() => {
										dispatch(filterType('date-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'date-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('date-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'date-down' ? 1 : 0.3}
									/>
								</div>
							</div>
							<div className={s.T} style={{ display: 'flex' }}>
								<div className={s.TT}>Темпы роста выручки за год %</div>
								<div
									onClick={() => {
										dispatch(filterType('temp-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'temp-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('temp-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'temp-down' ? 1 : 0.3}
									/>
								</div>
							</div>
						</div>
						<div className={s.dev}>
							<div className={s.Inf2}>Соискателям</div>
							<div className={s.K} style={{ display: 'flex' }}>
								<div className={s.KT}>Количество открытых вакансий</div>
								<div
									onClick={() => {
										dispatch(filterType('vacancy-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'vacancy-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('vacancy-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'vacancy-down' ? 1 : 0.3}
									/>
								</div>
							</div>
							<div className={s.RP} style={{ display: 'flex' }}>
								<div className={s.RP}>Размер заработной платы</div>
								<div
									onClick={() => {
										dispatch(filterType('payDay-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'payDay-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('payDay-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'payDay-down' ? 1 : 0.3}
									/>
								</div>
							</div>
							<div className={s.L} style={{ display: 'flex' }}>
								<div className={s.LT}>Льготы и плюшки для сотрудников</div>
								<div
									onClick={() => {
										dispatch(filterType('lgot-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'lgot-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('lgot-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'lgot-down' ? 1 : 0.3}
									/>
								</div>
							</div>
							<div className={s.M} style={{ display: 'flex' }}>
								<div className={s.MT}>Блиайшая станция метро</div>
								<div
									onClick={() => {
										dispatch(filterType('metro-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'metro-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('metro-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'metro-down' ? 1 : 0.3}
									/>
								</div>
							</div>
							<div className={s.REM} style={{ display: 'flex' }}>
								<div className={s.REMT}>Возможность удаленной работы</div>
								<div
									onClick={() => {
										dispatch(filterType('remove-up'));
									}}
								>
									<GlobalSvgSelector
										id='st-up'
										opasyty={SortType === 'remove-up' ? 1 : 0.3}
									/>
								</div>
								<div
									onClick={() => {
										dispatch(filterType('remove-down'));
									}}
								>
									<GlobalSvgSelector
										id='st-down'
										opasyty={SortType === 'remove-down' ? 1 : 0.3}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className={s.underNav}>
						<div
							className={s.close}
							onClick={() => {
								dispatch(winState(StateWin ? false : true));
							}}
						>
							Закрыть Фильтры <GlobalSvgSelector />
						</div>

						<div
							className={s.rest}
							onClick={() => {
								dispatch(filterType('reit-up'));
							}}
						>
							Сбросить фильтры
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
