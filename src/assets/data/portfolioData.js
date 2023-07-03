import portfolioImg01 from '../images/portfolio1.png'
import portfolioImg02 from '../images/portfolio2.png'
import portfolioImg03 from '../images/portfolio3.png'
import portfolioImg04 from '../images/portfolio4.png'


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "MERN Stack",
    title: "AirBnb Clone",
    description:
      "Airbnb clone is a web application developed using a stack of modern technologies to provide users with a platform for finding and booking accommodations. The primary technologies utilized in the development process include React, Express, MongoDB, Firebase, and Tailwind CSS.",
    technologies: ["React", "Tailwind css", "express.js", "MongoDB", "Firebase", "REST API"],
    siteUrl: "https://airbnb-clone-a7dd1.web.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "MERN Stack",
    title: "Acoustica",
    description:
      "Acoustica is A famous Music School Website. Featuring one of the best Music Instructors.Online courses to learn. Select your favourite Instructor, t contains dashboards for each student , admin and instructor",
    technologies: ["React", "Tailwind css", "express.js", "MongoDB", "Firebase", "REST API"],
    siteUrl: "https://clinquant-beignet-1e46ab.netlify.app/",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "REACT",
    title: "Real-Estate",
    description:
      "Real-Estate is a React single page page. It has modern ui design. Featuring most amazing technologies. anyone can buy their personal favourite home or apartment here. this webapp is known for its premium design created with react and tailwind css",
    technologies: ["React", "Tailwind css",],
    siteUrl: "https://inspiring-entremet-c1b3d5.netlify.app/",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "REACT",
    title: "Summer-Ecommmerce",
    description:
      "Summer Ecommerce is also an single page react app. It is an simple website where users can add their personal favourite items to cart and buy them. It shows ecommerce in a simple way ",
    technologies: ["React", "Tailwind css", "REST API"],
    siteUrl: "https://splendorous-fenglisu-726ce4.netlify.app/",
  }
];

export default portfolios;
