<svelte:head>
	<style>
		.test {
			font-size: 15px;
			font-family: 'Montserrat';
		}

		.mapboxgl-popup-tip {
			color: #00AEEF;
		}

		.mapboxgl-popup-content {
  color: ##1F2E4B;
}
	</style>

</svelte:head>

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

	const marker = new mapbox.Popup({ closeOnClick: false })
.setLngLat([lon, lat])
.setHTML('<div class="test"><br/> 9900 Stirling Rd #102 <br/> Cooper City, FL 33024 <br/> (954) 441-9995</div>')
.addTo(map);

		
</script>


<style>
</style>