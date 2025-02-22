import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  bootstrap,
  git,

  // starbucks,
  shopify,
  CartApp,
  movie,
  restorant,
  maverick,
  creative,
  javascriptp,
  animation,
  Bootstrab,
  Todo,
  food,
  swiss,
  facebook,
  firebase,
  Mui,
  Store2,
  Clone,
  Crm
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Mui",
    icon: Mui,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2019 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "freelancer",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CRM",
    description:
      "Mern Stack website with Realtime notifications and admin Dashboard",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodp",
        color: "pink-text-gradient",
      },
      {
        name: "ٌSoket.io",
        color: "blue-text-gradient",
      }
    ],
    image: Crm,
    source_code_link: "https://crm-front-nu.vercel.app",
  },
  {
    name: "maverick-for-real-estate",
    description:
      "A React website  ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "ٌbootstrab",
        color: "blue-text-gradient",
      },
    ],
    image: maverick,
    source_code_link: "https://maverick-for-realestate.com",
  },
  {
    name: "Movie Site",
    description:
      "Web site to display movies, pictures, details and ratings, and the site is automatically renewed",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "React-Redux",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://benevolent-manatee-f4425d.netlify.app/",
  },
  {
    name: "Store",
    description:
      "Mern Stack website with Realtime notifications",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodp",
        color: "pink-text-gradient",
      },
      {
        name: "ٌSoket.io",
        color: "blue-text-gradient",
      }
    ],
    image: Store2,
    source_code_link: "https://mern-front-teal.vercel.app/",
  },
  {
    name: "Cart App",
    description:
      "A project to simulate sites such as Jumia, Noon and AmazonI used API and Firebase in this project Add Products to Cart ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React-Redux",
        color: "green-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: CartApp,
    source_code_link: "https://ecommerce-59d13.web.app/",
  },

  {
    name: "Restaurant Project",
    description:
      "A restaurant website that displays food photos and prices ",
    tags: [
      {
        name: "ٌReact",
        color: "blue-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Netlify",
        color: "pink-text-gradient",
      },
    ],
    image: restorant,
    source_code_link: "https://beamish-praline-d22f21.netlify.app/",
  },
  {
    name: "Creative",
    description:
      "Landing Page Contracting Company ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "github",
        color: "pink-text-gradient",
      },
    ],
    image: creative,
    source_code_link: "https://ahmedsdek.github.io/Creative-Design/",
  },
  {
    name: "Js Project",
    description:
      "A JavaScript website  ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
    ],
    image: javascriptp,
    source_code_link: "https://ahmedsdek.github.io/Js-Project/",
  },
  {
    name: "Animation Project",
    description:
      "A JavaScript website with animation  ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
    ],
    image: animation,
    source_code_link: "https://ahmedsdek.github.io/new-Project/",
  },
  {
    name: "Bootstrab Project",
    description:
      "A Bootstrab website  ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "ٌbootstrab",
        color: "blue-text-gradient",
      },
    ],
    image: Bootstrab,
    source_code_link: "https://ahmedsdek.github.io/Bootstrab/",
  },
  {
    name: "Todo List",
    description:
      "A React website  ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "ٌbootstrab",
        color: "blue-text-gradient",
      },
    ],
    image: Todo,
    source_code_link: "https://react-level2-c276b.web.app",
  },
  {
    name: "Food Site",
    description:
      "A React website and filter list ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "ٌbootstrab",
        color: "blue-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://luxury-tartufo-a72b19.netlify.app",
  },
  {
    name: "Swiss Contracting & Trading",
    description:
      "A React website ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "ٌbootstrab",
        color: "blue-text-gradient",
      },
    ],
    image: swiss,
    source_code_link: "https://swiss-contracting.netlify.app",
  },
  {
    name: "Clone Facebook",
    description:
      "A React website with Realtime chat and creat post ",
    tags: [
      {
        name: "ٌHtml",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "ٌMui",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: facebook,
    source_code_link: "https://facebook-172c8.web.app/",
  },
  {
    name: "Clone Facebook2",
    description:
      "Mern Stack website with Realtime notifications And Chat",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodp",
        color: "pink-text-gradient",
      },
      {
        name: "ٌSoket.io",
        color: "blue-text-gradient",
      }
    ],
    image: Clone,
    source_code_link: "https://facebook-mernstack.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
