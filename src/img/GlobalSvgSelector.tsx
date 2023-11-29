interface Props {
	id: string;
	opasyty?: string;
}

export const GlobalSvgSelector = ({ id, opasyty }: Props) => {
	switch (id) {
		case 'startingPageArrow':
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='14'
					viewBox='0 0 16 14'
					fill='none'
				>
					<path
						d='M8 14L0.205771 0.500001L15.7942 0.5L8 14Z'
						fill='black'
						fill-opacity='0.77'
					/>
				</svg>
			);
		case 'st-up':
			return (
				<svg
					width='16'
					height='14'
					viewBox='0 0 16 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M8 0L15.7942 13.5H0.205771L8 0Z'
						fill='#D9D9D9'
						fill-opacity={opasyty}
					/>
				</svg>
			);
		case 'st-down':
			return (
				<svg
					width='16'
					height='14'
					viewBox='0 0 16 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M8 14L0.205771 0.500001L15.7942 0.5L8 14Z'
						fill='#D9D9D9'
						fill-opacity={opasyty}
					/>
				</svg>
			);
		case 'yt':
			return (
				<svg
					width='23'
					height='17'
					viewBox='0 0 23 17'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M22.1035 1.39377C21.2733 0.403811 19.7404 0 16.8131 0H6.18671C3.19233 0 1.63352 0.429858 0.80641 1.48381C0 2.51142 0 4.02553 0 6.12108V10.1152C0 14.175 0.9568 16.2362 6.18671 16.2362H16.8131C19.3517 16.2362 20.7585 15.8799 21.6685 15.0063C22.6019 14.1104 23 12.6476 23 10.1152V6.12108C23 3.91114 22.9377 2.38811 22.1035 1.39377ZM14.7661 8.66957L9.94067 11.1992C9.8328 11.2558 9.71482 11.2838 9.597 11.2838C9.4636 11.2838 9.33051 11.2478 9.21261 11.1762C8.99063 11.0413 8.85507 10.8 8.85507 10.5396V5.49654C8.85507 5.23666 8.99025 4.99553 9.2118 4.86053C9.43341 4.72554 9.70904 4.71631 9.93897 4.83612L14.7644 7.34948C15.0099 7.47734 15.164 7.73156 15.1644 8.00893C15.1647 8.28653 15.0113 8.54111 14.7661 8.66957Z'
						fill='white'
					/>
				</svg>
			);
		case 'f':
			return (
				<svg
					width='10'
					height='18'
					viewBox='0 0 10 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.36525 0.0037452L7.03106 0C4.40867 0 2.71396 1.73871 2.71396 4.42982V6.47227H0.36703C0.164227 6.47227 0 6.63668 0 6.83949V9.79876C0 10.0016 0.164415 10.1658 0.36703 10.1658H2.71396V17.633C2.71396 17.8358 2.87819 18 3.08099 18H6.14307C6.34587 18 6.5101 17.8356 6.5101 17.633V10.1658H9.25421C9.45701 10.1658 9.62124 10.0016 9.62124 9.79876L9.62236 6.83949C9.62236 6.74211 9.5836 6.64886 9.51487 6.57994C9.44615 6.51103 9.35252 6.47227 9.25514 6.47227H6.5101V4.74086C6.5101 3.90868 6.70841 3.48622 7.79246 3.48622L9.36488 3.48566C9.56749 3.48566 9.73172 3.32124 9.73172 3.11863V0.370775C9.73172 0.168347 9.56768 0.00411972 9.36525 0.0037452Z'
						fill='white'
					/>
				</svg>
			);
		case 't':
			return (
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M19.7173 2.31479C18.9719 2.72091 18.2263 2.97453 17.4813 3.0764C18.3228 2.43683 18.892 1.53327 19.1886 0.365796C18.4188 0.944359 17.5974 1.34019 16.7239 1.55348C15.9543 0.517971 15.0088 0 13.8864 0C12.8125 0 11.897 0.47962 11.1392 1.43907C10.3819 2.39847 10.0032 3.55827 10.0032 4.91861C10.0032 5.28403 10.0352 5.6598 10.0994 6.04555C8.51238 5.94404 7.02365 5.43899 5.63295 4.53036C4.24233 3.62163 3.06213 2.41096 2.09236 0.898328C1.73969 1.65957 1.5633 2.48712 1.5633 3.38049C1.5633 4.22313 1.71956 5.00496 2.03231 5.72579C2.34485 6.44649 2.76573 7.03017 3.29474 7.47693C2.66947 7.44643 2.0844 7.23825 1.53947 6.85245V6.91336C1.53947 8.10127 1.83402 9.1442 2.42305 10.0429C3.01215 10.9416 3.7556 11.5073 4.6532 11.7409C4.31653 11.8524 3.97583 11.9083 3.63124 11.9083C3.4068 11.9083 3.16231 11.8829 2.89787 11.8325C3.14631 12.8171 3.6032 13.6264 4.26835 14.2613C4.93364 14.8957 5.68706 15.2228 6.52866 15.2436C5.11808 16.6444 3.5111 17.3448 1.70773 17.3448C1.36303 17.3448 1.05053 17.3249 0.769958 17.2841C2.57337 18.756 4.56106 19.492 6.73314 19.492C8.11171 19.492 9.40615 19.2156 10.616 18.6621C11.8265 18.1091 12.8603 17.3679 13.718 16.4387C14.5755 15.5099 15.315 14.4413 15.9361 13.2332C16.5572 12.0251 17.0199 10.7638 17.3248 9.44908C17.6292 8.13412 17.7815 6.81715 17.7815 5.49712C17.7815 5.21283 17.7775 4.99973 17.7694 4.85753C18.5311 4.15736 19.1802 3.30949 19.7173 2.31479Z'
						fill='white'
					/>
				</svg>
			);
	}
};
