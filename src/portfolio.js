/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yousif Al-dakoki",
  title: "Hello, I am Yousif",
  subTitle: emoji(
    `A second-year Software Engineering student at York University 🚀 passionate about building, problem-solving, and continuous learning. I love combining technical skills with creativity to design impactful solutions across web development, machine learning, and quantitative finance.`
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ysf-ad",
  linkedin: "https://www.linkedin.com/in/yousif-aldakoki",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Interests and Skills",
  subTitle: "SOFTWARE ENGINEERING STUDENT PASSIONATE ABOUT BUILDING AND PROBLEM-SOLVING",
  skills: [
    emoji(
      "⚡ Build and create solutions across multiple domains, demonstrating adaptability and technical versatility in web development, machine learning, and quantitative finance"
    ),
    emoji("⚡ Research and implement innovative solutions through continuous learning, showing strong analytical thinking and problem-solving abilities"),
    emoji(
      "⚡ Leveraging technical expertise and creativity to craft impactful solutions, emphasizing how these skills translate into effective project management and innovative problem-solving in diverse workplace environments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Web Development",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Quantitative Finance",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lassonde School of Engineering - York University",
      logo: require("./assets/images/lassonde.jpg"), // York University Lassonde logo
      subHeader: "Bachelor of Engineering - Computer Software Engineering",
      duration: "September 2024 - April 2028",
      desc: "Pursuing the BEng in Software Engineering (SWE) at Lassonde, with a focus on software systems, programming, applied computing, and the BEST certificate.",
      descBullets: [
        "Emphasis on web development, finance, and machine learning",
        "Strong foundation in software engineering principles as a second-year student"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming (Java/C/Python)",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Quantitative Finance",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Research Assistant",
      company: "York University",
      companylogo: require("./assets/images/lassonde.jpg"), // York University Lassonde logo
      date: "Summer 2024",
      desc: "Gained experience in machine learning research through a summer project, deepening understanding of AI methods and their practical applications.",
      descBullets: [
        "Conducted research in machine learning and AI methods",
        "Applied theoretical knowledge to practical problems",
        "Developed understanding of AI applications in real-world scenarios"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/extruder.png"),
      projectName: "Extruder Data Analytics",
      projectDesc: "Developed an industrial IoT dashboard for manufacturing analytics, processing real-time data from on-site PLC systems to provide insights into production efficiency and equipment performance.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ysf-ad/extruder-data"
        }
      ]
    },
    {
      image: require("./assets/images/gmaps.png"),
      projectName: "Traffic Light Simulation",
      projectDesc: "Built a traffic simulation engine using real Toronto street data with an optimization algorithm that improves traffic flow based on simulated data. Achieved 2nd place in the 2024 YEC programming competition.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ysf-ad/gmaps-traffic"
        }
      ]
    },
    {
      image: require("./assets/images/greek-processor.png"),
      projectName: "Greek Processor",
      projectDesc: "Python project analyzing OPRA options data and modeling the Implied Volatility Surface (IVS) for trade classification. Uses a filtered ReLU Neural Network to fit average trade prices and determine net flow and dealer exposure.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ysf-ad/greek_processor"
        }
      ]
    },
    {
      image: require("./assets/images/shopify.png"),
      projectName: "Shopify RFQ App",
      projectDesc: "A Request for Quote (RFQ) application built for Shopify, enabling businesses to streamline their quotation processes and improve customer interactions.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ysf-ad/quoteapp"
        }
      ]
    },
    {
      image: require("./assets/images/gyro-mnist.png"),
      projectName: "Gyro MNIST",
      projectDesc: "Interactive drawing application using Arduino gyro sensor to draw numbers on a canvas, with real-time classification using a neural network trained on the MNIST dataset. Built with MATLAB's machine learning toolkit.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ysf-ad/gyro-mnist"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open and active for any inquiries or discussions.",
  number: "",
  email_address: "yousifaldakoki@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Academic achievements and certifications earned during my studies",

  achievementsCards: [
    {
      title: "BEST Certificate Program",
      subtitle:
        "Enrolled in the BEST certificate program at Lassonde School of Engineering, focusing on business and entrepreneurship skills alongside technical education.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "BEST Certificate Logo",
      footerLink: [
        {
          name: "Learn More",
          url: "https://lassonde.yorku.ca/best/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Thoughts and insights on software engineering, machine learning, and technology.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/ysf-ad",
      title: "Coming Soon",
      description:
        "Blog posts about my learning journey, projects, and insights will be shared here."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Sharing knowledge and insights from my learning journey 😅"
  ),

  talks: [
    {
      title: "Coming Soon",
      subtitle: "Talks and presentations will be added here as opportunities arise",
      slides_url: "https://github.com/ysf-ad",
      event_url: "https://github.com/ysf-ad"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://github.com/ysf-ad"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
