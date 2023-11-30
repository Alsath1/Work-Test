import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import s from './CompInfo.module.sass';
import i from './6.jpg';
import o from './7.jpg';
import p from './8.png';

export const CompInfo = () => {
	return (
		<div className={s.MainCont}>
			<a className={s.back} href='/mainpage'>
				<GlobalSvgSelector id='st-left' />
				<div className={s.backText}>Другие компании Москвы</div>
			</a>

			<div className={s.contCenter}>
				<div className={s.CompName}>Random Comp</div>
				<div className={s.adress}>
					Адресс: Москва, проспект Мира, 150
					<div className={s.check}>Посмотреть на карте</div>
				</div>
				<div className={s.adress}>
					Ближайшая станция метро: ВДНХ
					<div className={s.check}>430 м</div>
					<div className={s.reit}>4.6</div>
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
						Идейные соображения высшего порядка, а также сплочённость команды
						профессионалов предопределяет высокую востребованность
						экспериментов, поражающих по своей масштабности и грандиозности.
					</div>
				</div>
				<div className={s.forCompany}>
					Отрасль
					<div className={s.Info}>Материально-техническое снабжение и сбыт</div>
				</div>
			</div>
		</div>
	);
};
