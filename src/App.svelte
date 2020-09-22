<script>
  import Navbar from "./Components/Navbar/Navbar.svelte";
  import Banner from "./Components/Banner/Banner.svelte";
  import Services from "./Components/Services/Services.svelte";
  import About from "./Components/About/About.svelte";
  import Testimonials from "./Components/Testimonials/Testimonials.svelte";
  import Social from "./Components/Social/Social.svelte";
  import Footer from "./Components/Footer/Footer.svelte";
  import DATA from "./Data/data";
  import Map from './Components/Map/Map.svelte';
	import MapMarker from './Components/Map/MapMarker.svelte';
</script>

<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<Banner bannerData={DATA.BANNER_DATA} />

<Map lat={26.045210} lon={-80.278222} zoom={13}>
	<MapMarker lat={26.045210} lon={-80.278222} label="9900 Stirling Rd #102 Hollywood, FL 33024"/>
</Map>

<Services serviceData={DATA.SERVICE_DATA} />
<Social socialData={DATA.SOCIAL_DATA} />
<About aboutData={DATA.ABOUT_DATA} />
<Testimonials testimonialData={DATA.TESTIMONIAL_DATA} />
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />
