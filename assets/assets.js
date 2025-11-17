import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import thuta_logo from "./thuta_logo.png";
import thuta_logo_dark from "./thuta_logo_dark.png";
import profile from "./pf1.png";
import profile2 from "./pf2.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  thuta_logo,
  thuta_logo_dark,
  profile,
  profile2,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
    category: "Frontend",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
    category: "Mobile",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
    category: "UI/UX",
  },
];

export const projectsData = [
  {
    title: "Smart Home Simulator",
    category: "Frontend",
    description: "Web Design",
    fullDescription:
      "The Smart Home Simulator is an IoT-inspired project that allows users to control and monitor virtual home devices without the need for physical hardware. Through an intuitive interface, users can toggle appliances, adjust settings, and observe real-time feedback. The system also records detailed activity logs for every device interaction, enabling review of usage history. Additionally, it features smart data processing such as calculating and visualizing average temperature readings by day or week, helping to identify trends in environmental conditions. This project demonstrates the principles of IoT device management, logging, and data filtering in a purely software-based environment.",
    bgImage: "/smart_home.png",
    slug: "frontend-project",
    tech: ["Java", "Java Swing"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Geo based app",
    category: "Mobile",
    description: "Mobile App",
    fullDescription:
      "A geo-location based mobile app with maps, live tracking, and Firebase integration.",
    bgImage: "/expire_sense.png",
    slug: "geo-based-app",
    tech: ["Flutter", "Firebase"],
    liveUrl: null,
    githubUrl: "https://github.com/geo-app",
    device: "phone",
  },
  {
    title: "Expire Sense",
    category: "Frontend",
    description: "Food expiry tracker & notifier",
    fullDescription:
      "Expire Sense is a smart web application that helps users manage their food items by tracking expiration dates and sending timely notifications. The system allows you to log groceries, categorize items, and receive alerts before they expire, reducing waste and improving food safety. It also includes features such as search and filter for items, visual indicators of freshness, and simple dashboards to monitor expiring products at a glance. With its clean responsive design and smooth interactions, Expire Sense makes food management effortless and reliable.",
    bgImage: "/e_s.png",
    slug: "expire-sense",
    tech: ["React.js", "Tailwind CSS", "GoDaddy"],
    liveUrl: "https://www.expiresense.com",
    githubUrl: "#",
  },
  {
    title: "Thuta Forecast",
    category: "Frontend",
    description: "Food expiry tracker & notifier",
    fullDescription:
    "This Weather App provides real-time weather information with a simple and responsive interface. Users can search for any city to view current conditions, including temperature, humidity, and wind speed, alongside clear visual icons. The app also displays short-term forecasts, making it easy to plan ahead. Built with Angular.js and Bootstrap, it ensures fast performance and mobile-friendly layouts. Designed as a practical utility project, it demonstrates API integration, data visualization, and responsive design principles.",
    bgImage: "/weather.png",
    slug: "expire-sense",
    tech: ["Angular.js", "Bootstrap CSS", "Vercel", "Weather API"],
    liveUrl: "https://thuta-weather-app.vercel.app",
    githubUrl: "#",
  },
  {
    title: "CineScope",
    category: "Frontend",
    description: "Food expiry tracker & notifier",
    fullDescription:
    "The Movie App is a responsive web application that lets users explore, search, and discover movies in an intuitive interface. It integrates with a movie database API to fetch details such as titles, genres, release dates, ratings, and posters. Users can browse trending films, search for specific titles, and view detailed movie information in a clean card-based layout. Built with React.js and Tailwind, the app demonstrates API consumption, state management, and responsive UI design, delivering a smooth experience across devices.",
  bgImage: "/movie.png",
    bgImage: "/movie.png",
    slug: "expire-sense",
    tech: ["React.js", "Tailwind CSS", "Vercel", "TMDB API"],
    liveUrl: "https://thutazaw-cine-scope.vercel.app",
    githubUrl: "#",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "#work",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "#work",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "#work",
  },
  // { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, React Js, Next Js, Node Js, Angular, Flutter, Python, Java",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor of Computer and Data Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 7 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
