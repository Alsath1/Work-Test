import s from './MainPageAllComp.module.sass';
import i from './1.png';
import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
export const CompCart = () => {
	return (
		<div className={s.CartCont}>
			<img src={i} className={s.img} />
			<div className={s.comtInfo}>
				<div className={s.Comp}>Random Corp</div>
				<div className={s.adress}>
					<GlobalSvgSelector />
					<div className={s.text}>Москва, проспект Мира, 150</div>
				</div>
				<div className={s.star}>
					<GlobalSvgSelector />
					<div className={s.bal}>4.6</div>
					<a href='/mainpageCard'>Подробнее</a>
				</div>
			</div>
		</div>
	);
};
