<script>
	import { getContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';

	const { getMap } = getContext(key);
	const map = getMap();

	export let lat;
	export let lon;
	export let label;

	const popup = new mapbox.Popup({ offset: 25 })
		.setText(label);

	const marker = new mapbox.Popup({ closeOnClick: true })
.setLngLat([lon, lat])
.setHTML('<br/> 9900 Stirling Rd #102 <br/> Hollywood, FL 33024 <br/> (954) 441-9995')
.addTo(map);

		
</script>


<style>
	.mapboxgl-popup-content {
  font-family: 'Montserrat', Helvetica !important;
  background-color: black;
  color: white;
}
</style>