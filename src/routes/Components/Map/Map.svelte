<script>
	import { onMount, setContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';

	setContext(key, {
		getMap: () => map
	});

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	onMount(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css';

		link.onload = () => {
			map = new mapbox.Map({
				container,
				style: 'mapbox://styles/mapbox/streets-v9',
				center: [lon, lat],
				zoom
			});
		};

		document.head.appendChild(link);

		return () => {
			map.remove();
			link.parentNode.removeChild(link);
		};
	});
</script>

<style>
  
  .section {
    background-color:  #E8EBE4;
    color: #1F2E4B;
  }

  h2 {
    padding-bottom: 10px;
  }

  .hours {
    padding-top: 50px;
    color: #061826;
  }

  .map {
        height: 400px;
        width: 100%;
        box-shadow: 0 0 10px 2px #00AEEF;
       }



.dateTime {
    gap: 20px;
    display: flex;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto;
}

</style>


  <section id="location" class="section grey-bgcolor">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6">

          <div class="map" bind:this={container}>
            {#if map}
              <slot></slot>
            {/if}
          </div>
          </div>

        <div class="col-md-6">
          
          <h2 class="hours">Hours</h2>
  
          <div id="Monday" class="dateTime">
            <div class="day">Monday</div>
            <div class="time">9am - 5pm</div>
          </div>
          <div id="Tuesday" class="dateTime">
            <div class="day">Tuesday</div>
            <div class="time">9am - 5pm</div>
          </div>
          <div id="Wednesday" class="dateTime">
            <div class="day">Wednesday</div>
            <div class="time">9am - 5pm</div>
          </div>
          <div id="Thursday" class="dateTime">
            <div class="day">Thursday</div>
            <div class="time">9am - 5pm</div>
          </div>
          <div id="Friday" class="dateTime">
            <div class="day">Friday</div>
            <div class="time">9am - 1pm</div>
          </div>
          <div id="Saturday" class="dateTime">
            <div class="day">Saturday</div>
            <div class="time">Closed</div>
          </div>
          <div id="Sunday" class="dateTime">
            <div class="day">Sunday</div>
            <div class="time">Closed</div>
          </div>
  
        </div>
      </div>
  </section>