// import { useRef, useState } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';

export const Map1 = () => {
	// const [center, setCenter] = useState({lat: 12.32323, lng: 60,123123})
	// const ZOOM_LEVEL = 9
	// const position = [51.505, -0.09];
	// const mapRef = useRef();

	return (
		<iframe
			width='700'
			height='500'
			src='https://api.maptiler.com/maps/b05d5486-9d59-48e2-b061-936433c793ec/?key=HbjymiCn1fgcz9LiBeF2#11.7/55.75147/37.61798'
		></iframe>
		// <MapContainer
		// 	center={center}
		// 	zoom={ZOOM_LEVEL}
		// 	scrollWheelZoom={false}
		// 	ref={mapRef}
		// >
		// 	<
		// 		url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=HbjymiCn1fgcz9LiBeF2'
		//         href="https://www.maptiler.com/">MapTi
		// 	/>
		// </MapContainer>
	);
};
