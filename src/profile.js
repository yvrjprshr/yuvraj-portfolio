// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Yuvraj Parashar",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am Yuvraj Parashar, a dedicated technophile with a resolute passion for innovation. Graduating with a BTech in Computer Science and Engineering from ITM Gwalior, I upheld an exemplary CGPA of 8.7. Proficient in C++, Python, and Javascript, my diverse GitHub portfolio highlights my multifaceted projects. With 900+ coding triumphs, I anticipate fruitful collaborations in the tech realm.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "MovieFinder",
    skills: ["HTML, CSS, JS, React JS"],
    url: "https://github.com/yvrjprshr/moviefinder",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Book Store",
    skills: ["React JS, Node JS, Express JS, MongoDB"],
    url: "https://github.com/yvrjprshr/mern-book-store",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project3",
    name: "Course API",
    skills: ["Java, Spring Boot"],
    url: "https://github.com/yvrjprshr/spring-boot-course-api",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project4",
    name: "Zevi",
    skills: ["React JS"],
    url: "https://github.com/yvrjprshr/zevi-react",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Personal Portfolio",
    skills: ["React JS"],
    url: "https://github.com/yvrjprshr/yuvraj-portfolio",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Ecommerce",
    skills: ["HTML, CSS, JS, AngularJS, json-server"],
    url: "https://github.com/yvrjprshr/angularjs-ecommerce",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Coding Profiles";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Codeforces",
    url: "https://codeforces.com/profile/corba",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Leetcode",
    url: "https://leetcode.com/yvrjprshr/",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Atcoder",
    url: "https://atcoder.jp/users/iamyp01",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I am a Frontend Developer",
  copyright: "Yuvraj Parashar",
  contactUrl: "https://www.linkedin.com/in/yvrjprshr/",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/yvrjprshr",
  linkedin: "https://www.linkedin.com/in/yvrjprshr/",
  resume: "https://drive.google.com/file/d/1YH0AbxFcZXs1Hzt-axbRWrJbxpE3Pkv8/view",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
