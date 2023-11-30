import { createSlice } from '@reduxjs/toolkit';

interface UserState {}

const initialState: UserState = {
	AllComp: [
		{
			id: 1,
			name: 'строй мастер',
			reit: 2.4,
			address: 'Москва, проспект Мира, 150',
			dateCreace: '15.7.2023',
			temp: 22,
			vakansii: 59,
			payDay: 5000,
			employee: 'есть',
			Metro: 'Парк культуры 2 км',
			metroBlizai: 7,
			removeWork: 'есть',
			otrasl: 'Розничная торговля'
		},
		{
			id: 2,
			name: 'зеленый мир',
			reit: 3.4,
			address: 'Улица Профсоюзная, дом 25',
			dateCreace: '9.11.2018',
			temp: 9,
			vakansii: 33,
			payDay: 66000,
			employee: 'есть',
			Metro: 'Курская 3 км',
			metroBlizai: 2,
			removeWork: 'есть',
			otrasl: 'Туризм и гостиничный бизнес'
		},
		{
			id: 3,
			name: 'техно сервис',
			reit: 7,
			address: 'Проспект Мира, дом 80',
			dateCreace: '28.4.2000',
			temp: 12,
			vakansii: 2,
			payDay: 100000,
			employee: 'есть',
			Metro: 'Таганская 4 км',
			metroBlizai: 2,
			removeWork: 'есть',
			otrasl: 'Информационные технологии'
		},
		{
			id: 4,
			name: 'экофлора',
			reit: 8,
			address: 'Ленинградский проспект, дом 37',
			dateCreace: '3.9.2012',
			temp: 4,
			vakansii: 4,
			payDay: 23444,
			employee: 'есть',
			Metro: 'Киевская 400м',
			metroBlizai: 5,
			removeWork: 'нет',
			otrasl: 'Энергетика'
		},
		{
			id: 5,
			name: 'интер глобал',
			reit: 6,
			address: 'Пресненская набережная, дом 8',
			dateCreace: '20.12.2015',
			temp: 12,
			vakansii: 5,
			payDay: 127555,
			employee: 'есть',
			Metro: 'Третьяковская 1 км',
			metroBlizai: 4,
			removeWork: 'нет',
			otrasl: 'Информационные технологии'
		},
		{
			id: 6,
			name: 'мед техника',
			reit: 3.5,
			address: 'Ленинский проспект, дом 123',
			dateCreace: '10.5.2022',
			temp: 4,
			vakansii: 7,
			payDay: 10090,
			employee: 'есть',
			Metro: 'Смоленская 2.5 км',
			metroBlizai: 3,
			removeWork: 'нет',
			otrasl: 'Здравоохранение'
		},
		{
			id: 7,
			name: 'автоэксперт',
			reit: 5.5,
			address: 'Шелепихинское шоссе, дом 5',
			dateCreace: '16.8.2012',
			temp: 13,
			vakansii: 12,
			payDay: 123355,
			employee: 'есть',
			Metro: 'Новокузнецкая 700 м',
			metroBlizai: 1,
			removeWork: 'есть',
			otrasl: 'Производство автомобилей'
		},
		{
			id: 8,
			name: 'логос фарм',
			reit: 1.5,
			address: 'Кутузовский проспект, дом 2/1',
			dateCreace: '7.6.1990',
			temp: 30,
			vakansii: 43,
			payDay: 27699,
			employee: 'есть',
			Metro: 'Бауманская 1.4 км',
			metroBlizai: 2,
			removeWork: 'есть',
			otrasl: 'Развлекательная индустрия'
		},
		{
			id: 9,
			name: 'арт декор',
			reit: 7.5,
			address: 'Профсоюзная улица, дом 33',
			dateCreace: '25.10.2022',
			temp: 40,
			vakansii: 54,
			payDay: 23000,
			employee: 'есть',
			Metro: 'Белорусская 250 м',
			metroBlizai: 1,
			removeWork: 'есть',
			otrasl: 'Развлекательная индустрия'
		},
		{
			id: 10,
			name: 'профи консалтинг',
			reit: 3,
			address: 'Новый Арбат, дом 21',
			dateCreace: '30.1.2023',
			temp: 23,
			vakansii: 7,
			payDay: 25333,
			employee: 'есть',
			Metro: 'Бауманская 900 м',
			metroBlizai: 1,
			removeWork: 'нет',
			otrasl: 'Образование'
		}
	],
	SortType: 'reyting-up'
};

export const CompSlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		filterSort(state, action) {
			state.AllComp;
		},
		filterType(state, action) {
			state.SortType = action.payload;
		}
	}
});

export default CompSlice.reducer;
