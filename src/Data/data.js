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
    "Nixalar can help you skyrocket the ROI of your marketing campaign without having to spend tons of money or time to assemble an in-house team."
};
const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Arthritis and Rehabilitation",
      DESCRIPTION:
        "To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",
      URL: "images/img1.png"
    },
    {
      LABEL: "Rheumatology and Bone Research",
      DESCRIPTION:
        "It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
      URL: "images/img2.png"
    },
    {
      LABEL: "Osteoperosis Assessment",
      DESCRIPTION:
        "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
      URL: "images/img3.png"
    },
    {
      LABEL: "Infusion Services",
      DESCRIPTION:
        "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
      URL: "images/img4.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Dr. Mark Jaffe",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
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
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Nixalar has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "Co-founder at ABC"
    },
    {
      DESCRIPTION:
        "Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "Co-founder at xyz"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/front.png",
    "images/inside.png",
    "images/front.png",
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

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
