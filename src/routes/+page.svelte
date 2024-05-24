<script>

const HEADER = "Dr. Mark Jaffe";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#location", label: "Location" },
  { id: 3, url: "#services", label: "Services" },
  { id: 4, url: "#about-us", label: "About" },
  { id: 5, url: "#testimonials", label: "Testimonials" },
];
const BANNER_DATA = {
  HEADING: "Go digital with nixalar",
  DECRIPTION:
    "Board Certified Rheumatologist with local hospital privileges. Practicing in South Florida for over 20 years."
};
const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Comprehensive Rheumatology",
      DESCRIPTION:
        "Vasculitis Syndromes, Scleorderma, Rheumatoid Arthritis, Lupus, Osteoarthritis, Psoriatic Arthritis, Ankylosing Spondylitis, Gout, Fibromyalga",
      URL: "images/img1.png",
      button: null
    },
    {
      LABEL: "Osteoporosis Assessment",
      DESCRIPTION:
        "Complete evaluation and management of Osteoporosis and Metabolic Bone Disorders",
      URL: "images/img3.png",
      button: null
    },
    {
      LABEL: "Musculoskeletal Imaging",
      DESCRIPTION:
        "State of the art digital x-rays",
      URL: "images/img4.png",
      button: null
    },
    {
      LABEL: "Infusion Suite",
      DESCRIPTION:
        "Infusion services with individualized state of the art treatment for all rheumatic disorders",
      URL: "images/infusion_new.png",
      button: null
    },
    {
      LABEL: "Rheumatology and Bone Research",
      DESCRIPTION:
        "We participate in national, cutting edge investigational studies. Current studies include: Gout, Rheumatoid Arthritis, Scleroderma, Lupus, and Serologic Studies. In house study coordinator: ",
      URL: "images/img2.png",
      button: "GNP Research"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Dr. Mark Jaffe",
  TITLE: "Why we're different",
  IMAGE_URL: "images/markjaffe.png",
  WHY_CHOOSE_US_LIST: [
    "We provides Cost-Effective Digital Marketing than Others.",
    "High customer statisfaction and experience.",
    "Marketing efficiency and quick time to value.",
    "Clear & transparent fee structure.",
    "We provides Marketing automation which is an integral platform that ties all of your digital marketing together.",
    "A strong desire to establish long lasting business partnerships.",
    "Provide digital marketing to mobile consumer.",
    "We provides wide range to services in reasonable prices"
  ]
};

const TESTIMONIAL_DATA = {
  HEADING: "Patient Testimonials",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Extremely pleased with Dr. Jaffe after 16 years of support for my Rheumatoid arthritis problems. His high energy and straight forward style is backed by a rock solid knowledge and understanding of RA--exactly what you would expect from a Diplomate level pro.",
      URL: "https://www.healthgrades.com/physician/dr-mark-jaffe-yr62d",
      NAME: "Mike"

    },
    {
      DESCRIPTION:
        "Excellent Excellent Excellent..... You just don’t find high-quality doctors like Dr. Jaffe down here in Florida. Dr. Jaffe was the most pleasant surprise I have had in a very very long time. It’s a jungle out there in Florida’s medical world. Dr. Jaffe is a shining star.",
      URL: "https://www.healthgrades.com/physician/dr-mark-jaffe-yr62d",
      NAME: "Wendy"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/front.png",
    "images/inside.png",
    "images/infusion_new.png",
    "images/waitingroom.jpeg",
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "La trobe street docklands, Melbourne",
    MOBILE: "+1 61234567890",
    EMAIL: "nixalar@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

  import About from "./Components/About/About.svelte"
  import Navbar from "./Components/Navbar/Navbar.svelte";
  import Navbar2 from "./Components/Navbar/Navbar2.svelte";
  import Banner from "./Components/Banner/Banner.svelte";
  import Services from "./Components/Services/Services.svelte";
  import Testimonials from "./Components/Testimonials/Testimonials.svelte";
  import Social from "./Components/Social/Social.svelte";
  import Footer from "./Components/Footer/Footer.svelte";
  import Map from './Components/Map/Map.svelte';
  import MapMarker from './Components/Map/MapMarker.svelte';
  import News from './Components/News/News.svelte'
</script>

<Navbar2/>
<Navbar navlists={NAVBAR_DATA} header={HEADER} />
<Banner bannerData={BANNER_DATA} />

<Map lat={26.045210} lon={-80.278222} zoom={13}>
	<MapMarker lat={26.045210} lon={-80.278222} label="9900 Stirling Rd #102 Hollywood, FL 33024"/>
</Map>

<Services serviceData={SERVICE_DATA} />
<Social socialData={SOCIAL_DATA} />
<About aboutData={ABOUT_DATA} />
<Testimonials testimonialData={TESTIMONIAL_DATA} />
<News></News>
<Footer footerData={FOOTER_DATA} header={HEADER} />


