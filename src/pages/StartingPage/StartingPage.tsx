import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import s from './StartingPage.module.sass';

export const StartingPage = () => {
	return (
		<div className={s.cont}>
			<div className={s.CompList_and_SitySelector}>
				<div className={s.CompList}>Company List</div>
				<div className={s.SitySel}>
					Москва <GlobalSvgSelector id='startingPageArrow' />
				</div>
			</div>
			<div className={s.Input_and_search}>
				<input type='search' placeholder='Введите название компании ' />

				<div className={s.search}>Поиск</div>
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
