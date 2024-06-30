import {
    html,
    figma,
    reactjs,
    VigilEye,
    programming,
    mat,
    terra,
    fintech,
    yt,
    javascript

  } from "../../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Dev",
      icon: html,
    },
    {
      title: "React JS",
      icon: reactjs,
    },
    {
      title: "Java",
      icon: programming,
    },
    {
      title: "JS",
      icon: javascript,
    },
    {
      title: "UI/UX ",
      icon: figma,
    },
  ];
  
  const projects = [
    {
      name: "TerraTrooper",
      description: "Web interface for TerraTrooper a autonomous 6 legged hexapod used in rescue operations and disaster management which uses RRT algorithm, YOLO-V3 etc.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: terra, 
      deployed_link: "https://upagraha-23.vercel.app/",
      source_code_link: "https://github.com/",
    },
    {
      name: "Finance Tracker",
      description: "FinTech is a personalized expenses tracker which provides both web and mobile application for Expenses used in various areas and gives analysis about users existing loans.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: fintech,
      deployed_link: "https://deployed-finance-tracker.com",
      source_code_link: "https://github.com/",
    },
    {
      name: "Department of ECE",
      description: "Created and hosted websites for clubs functioning under ECE department - ECEA, IETE, RAIC and Web pages for various events organized by our ECE department such as Upagraha’22, Upagraha’23, Make-a-thon 4.0, Make-a-thon 5.0 and NCSPCN’23.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap 5",
          color: "pink-text-gradient",
        },
      ],
      image: mat,
      deployed_link: "https://deployed-ece-department.com",
      source_code_link: "https://github.com/",
    },
    {
      name: "VigilEye",
      description: "Developed the web interface for VigilEye, a system that utilizes CCTV footage for instant crime identification and notification to authorities. Leveraging advanced AI algorithms, the platform predicts potential crimes by tracking vehicles and identifying suspicious activities.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap 5",
          color: "pink-text-gradient",
        },
      ],
      image: VigilEye,
      deployed_link: "https://deployed-ece-department.com",
      source_code_link: "https://github.com/",
    },
    {
      name: "Youtube Clone",
      description: "Developed a YouTube-like website using ReactJS and the YouTube API, replicating the core functionalities of the original platform. This project features video search, playback, and recommendations, along with user authentication and personalized content feeds.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: yt,
      deployed_link: "https://deployed-youtube-clone.com",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, projects };
  
