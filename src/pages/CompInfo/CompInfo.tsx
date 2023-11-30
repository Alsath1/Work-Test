import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import s from './CompInfo.module.sass';
import i from './6.jpg';
import o from './7.jpg';
import p from './8.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { WinStateSlice } from 'src/Store/redusers/WindowState';

export const CompInfo = () => {
	const { AllComp } = useAppSelector(state => state.CompSlice);
	const { currentCardInfo } = useAppSelector(state => state.WinStateSlice);
	const { CurrentCard } = WinStateSlice.actions;
	const ArrComp = AllComp.filter(el => el.id === currentCardInfo);

	return (
		<div className={s.MainCont}>
			<Link
				className={s.back}
				to='/mainpage'
				style={{ textDecoration: 'none', color: '#FFF' }}
			>
				<GlobalSvgSelector id='st-left' />
				<div className={s.backText}>Другие компании</div>
			</Link>

			<div className={s.contCenter}>
				<div className={s.CompName}>{ArrComp[0].name}</div>
				<div className={s.adress}>
					Адресс: {ArrComp[0].address}
					<div className={s.check}></div>
				</div>
				<div className={s.adress}>
					Ближайшая станция метро:
					<div className={s.check}>{ArrComp[0].Metro}</div>
					<div className={s.reit}>{ArrComp[0].reit}</div>
				</div>
				<div className={s.imgCont}>
					<div className={s.ImgCase6}>
						<img src={i} alt='' />
					</div>
					<div className={s.stackimg}>
						<div className={s.ImgCase7}>
							<img src={o} alt='' />
						</div>
						<div className={s.ImgCase8}>
							<img src={p} alt='' />
						</div>
					</div>
				</div>
				<div className={s.forCompany}>
					О компании
					<div className={s.Info}>
						<div>Дата создания компании : {ArrComp[0].dateCreace}</div>
						<div>Темпы роста выручки за год % : {ArrComp[0].temp}</div>
						<div>Количество открытых вакансий : {ArrComp[0].vakansii}</div>
						<div>Размер заработной платы : {ArrComp[0].payDay} руб.</div>
						<div>Льготы и плюшки для сотрудников : {ArrComp[0].employee}</div>
						<div>Возможность удаленной работы : {ArrComp[0].removeWork}</div>
						<div>Отрасль: {ArrComp[0].otrasl}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
