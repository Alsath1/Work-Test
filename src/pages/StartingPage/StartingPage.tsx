import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import s from './StartingPage.module.sass';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { WinStateSlice } from 'src/Store/redusers/WindowState';
import { useState } from 'react';

export const StartingPage = () => {
	const { winCurrent } = useAppSelector(state => state.WinStateSlice);
	const { winCurrentstring } = WinStateSlice.actions;
	const dispatch = useAppDispatch();
	const [inputLink, setInputLink] = useState('');

	return (
		<div className={s.cont}>
			<div className={s.CompList_and_SitySelector}>
				<div className={s.CompList}>Company List</div>
				<div className={s.SitySel}></div>
			</div>
			<div className={s.Input_and_search}>
				<input
					type='search'
					placeholder='Введите название компании '
					onChange={e => {
						// ПОЧИНИТЬ Сделать дебаунс
						setInputLink(e.currentTarget.value);
					}}
				/>

				<Link
					style={{ textDecoration: 'none', color: '#FFF' }}
					className={s.search}
					to='/mainpage'
					onClick={() => {
						dispatch(winCurrentstring(inputLink));
					}}
				>
					Поиск
				</Link>
			</div>
			<div className={s.TextCont}>
				<div className={s.TextMain}>
					Почему стоит выбирать наш поиск компаний
				</div>
				<div className={s.TextMini1}>
					<div className={s.HighText}>Активно развивающаяся база компаний</div>
					<div className={s.lorem}>
						Ясность нашей позиции очевидна: начало повседневной работы по
						формированию позиции создаёт необходимость включения в
						производственный план целого ряда внеочередных мероприятий с учётом
						комплекса распределения внутренних резервов и ресурсов.
					</div>
				</div>
				<div className={s.TextMini2}>
					<div className={s.HighText}>Только проверенные компании</div>
					<div className={s.lorem}>
						В целом, конечно, экономическая повестка сегодняшнего дня в
						значительной степени обусловливает важность системы обучения кадров,
						соответствующей насущным потребностям.
					</div>
				</div>
			</div>
			<div className={s.contact}>
				<div className={s.Text}>Подпишись в социальных сетях</div>
				<div className={s.icon}>
					<GlobalSvgSelector id='yt' />
					<GlobalSvgSelector id='f' />
					<GlobalSvgSelector id='t' />
				</div>
			</div>
		</div>
	);
};
