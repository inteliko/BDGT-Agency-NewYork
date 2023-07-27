import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Web Development",
    projects: 50,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Graphic Design",
    projects: 200,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "UI/UX Design",
    projects: 50,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
  {
    name: "Digital Marketing",
    projects: 100,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Our B2B Business Model, where collaboration is at the heart of our success. As a dedicated B2B agency, we are passionate about helping businesses thrive by providing comprehensive digital solutions and partnering with other agencies to deliver exceptional results "

  
];

export const workExp = [
  {
    place: "Telemedicine Lab, India",
    tenure: "Aug 2018 - Sep 2020",
    role: "CRM Development",
    detail:
      "We developed a custome CRM for Telemedicine Lab. We Use Python-Django for developmennt. We Follow Agile Methodology for Project Development. ",
  },
  {
    place: "AX Production",
    tenure: "Aug 2016 - Runinng",
    role: " Graphic Design",
    detail:
      "AX Production is our design partner. We do B2B with this production house, Since 2016.",
  },
  {
    place: "Syntax Solution",
    tenure: "Nov 22 - March 23",
    role: "UI/UX",
    detail:
      "We Design Multiple Products for this company. ",
  },
  {
    place: "eCOM",
    tenure: "Aug 2020 - Running",
    role: "Digital Marketing",
    detail:
      "we are working with eCOM, as there partner. We also do B2B business with them. ",
  },
];

export const comments = [
  {
    name: "Kim Park",
    post: "Entrepreneur",
    comment:
      "Truly a force to be reckoned with. Their marketing strategies are data-driven, innovative, and highly effective. They tailored their approach to our unique business needs, resulting in a significant increase in website traffic and, most importantly, a surge in qualified leads and sales. Their expertise in search engine optimization (SEO), content marketing, and social media management has been invaluable in growing our online presence and driving business growth.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Graphic design work delivered by BDGT has been nothing short of exceptional. Whether it's crafting eye-catching banners, captivating social media posts, or informative infographics, their creative team consistently surpassed our expectations. Their designs have significantly boosted our brand visibility and helped establish a strong and memorable brand image.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Product Manager",
    comment:
      "They understood our vision and took the time to comprehend our target audience, resulting in a visually appealing and user-friendly interface. The design they created perfectly blends aesthetics with functionality, making navigating our platform a breeze for our customers.",
    img: "./",
  },
  {
    name: "CEO",
    post: "Eakub Ali",
    comment:
      "web development services are top-notch. From conceptualization to execution, their team displayed unmatched professionalism and attention to detail. They crafted a website that not only reflects our brand identity but also delivers a seamless user experience. Our website's performance and functionality have exceeded all expectations, and we have witnessed a substantial increase in user engagement and conversions.",
    img: "",
  },
  
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    
  ],
};
