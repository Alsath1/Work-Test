import { useState } from 'react';
import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import s from './MainPageFilter.module.sass';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { WinStateSlice } from 'src/Store/redusers/WindowState';

export const MainPageFilter = () => {
	const { StateWin } = useAppSelector(state => state.WinStateSlice);
	const { winState } = WinStateSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<div className={StateWin ? s.ContMainNav : s.ContMainNavFalse}>
			<div className={s.Main}>
				<div className={s.contFlex}>
					<div className={s.FlexFix}>
						<div className={s.MainInfo}>
							<div className={s.Inf}>Общая информация</div>
							<div className={s.R}>
								<div className={s.RT}>Рейтинг</div>
								<GlobalSvgSelector id='st-up' opasyty='1' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
							<div className={s.O}>
								<div className={s.OT}>Отрасль</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
							<div className={s.D}>
								<div className={s.DT}>Дата создания компании</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
							<div className={s.T}>
								<div className={s.TT}>Темпы роста выручки за год %</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
						</div>
						<div className={s.dev}>
							<div className={s.Inf2}>Соискателям</div>
							<div className={s.K}>
								<div className={s.KT}>Количество открытых вакансий</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
							<div className={s.RP}>
								<div className={s.RP}>Размер заработной платы</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
							<div className={s.L}>
								<div className={s.LT}>Льготы и плюшки для сотрудников</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
							<div className={s.M}>
								<div className={s.MT}>Блиайшая станция метро</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
							</div>
							<div className={s.REM}>
								<div className={s.REMT}>Возможность удаленной работы</div>
								<GlobalSvgSelector id='st-up' opasyty='0.3' />
								<GlobalSvgSelector id='st-down' opasyty='0.3' />
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

						<div className={s.rest}>Сбросить фильтры</div>
						<div className={s.find}>Искать</div>
					</div>
				</div>
			</div>
		</div>
	);
};
