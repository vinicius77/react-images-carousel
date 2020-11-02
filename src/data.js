/** TeamMates Data */
export const teamMates = [
  {
    imagePath: "images/afarina.jpeg",
    fullName: "Farina, André",
    emoji: "🇧🇷",
    description:
      "Software Architect focused on Cloud Native applications, distributed systems with a special interest in Go/C, Kubernetes and Docker. Also experienced using Java and Ruby, has a strong track record of leading all sizes of successful software projects."
  },
  {
    imagePath: "images/cdiaz.jpeg",
    fullName: "Díaz, Clemente",
    emoji: "🇨🇱",
    description:
      "Filmmaker, editor and creator of branded content, experienced working on film production for advertising in Europe and South America. Also creates beautiful, elegant, communicative and visually stunning shots with his camera."
  },
  {
    imagePath: "images/hitkonen.jpeg",
    fullName: "Itkonen, Hanna",
    emoji: "🇫🇮",
    description:
      "International Business Developer and very creative multi-language professional with extensive background in international and domestic sales, managing and implementing strategic solutions. Always treats sales and business development with an entrepreneurial spirit."
  },
  {
    imagePath: "images/jzeppellini.jpeg",
    fullName: "Zeppellini, Jéssica",
    emoji: "🇺🇾",
    description:
      "Graphic Designer and Digital Marketer specialized in illustration, branding, visual identities, concepts publications, event and marketing promotions designs. Loves working with passionate entrepreneurs to assist with their design needs."
  },
  {
    imagePath: "images/emakoviz.jpeg",
    fullName: "Makoviz Evgeny",
    emoji: "🇷🇺",
    description:
      "Algorithmic trading professional who applies algorithmic approach and develops automated trading strategies for his own accounts. His key competencies and passion are in the field of research, developing trading algorithms and strategies."
  }
];

/** Contact Page Elements Data */
export const contactElements = [
  {
    icon: "fas fa-user",
    head: "Name",
    subtitle: "Vinicius"
  },
  {
    icon: "fas fa-map-marker-alt",
    head: "Address",
    subtitle: "Helsinki, Finland"
  },
  {
    icon: "fas fa-envelope",
    head: "Email",
    subtitle: "vinicius.bonifacio1985@gmail.com"
  }
];

/** Skill Elements from Skills Page */

/** When changing % of the skills for example to 90% in React,
 * it is necessary to change also in the Skills.css file as following:
 *
 * .skills .skills-content .right .react::before {
 *    width: 80%;
 *  }
 *
 */
export const skills = [
  {
    tech: "frontend",
    porcentage: 85
  },
  {
    tech: "react",
    porcentage: 80
  },
  {
    tech: "graphql",
    porcentage: 60
  },
  {
    tech: "mongodb",
    porcentage: 75
  },
  {
    tech: "python",
    porcentage: 40
  },

  {
    tech: "redux",
    porcentage: 40
  }
];

export const services = [
  {
    iconName: "fas fa-sitemap",
    text: "Frontend Stack",
    description:
      "HTML for creating websites and apps along with CSS for describing the visual presentation like layouts, colours and fonts and Javascript for making these pages interactive and dynamic."
  },

  {
    iconName: "fas fa-atom",
    text: "Libraries and Frameworks",
    description:
      "React for simplifying the user interface and speed-up the way HTML, CSS and JS work together creating responsive and mobile-friendly apps that display flawlessly on any device."
  },

  {
    iconName: "fas fa-code",
    text: "Version Control",
    description:
      "Git for keeping track of changes made to the code, enabling workflow management in large and collaborative projects where the app can be reinstated to previous versions free of issues."
  },

  {
    iconName: "fas fa-database",
    text: "Fullstack",
    description:
      "MERNG stack entirely using JS and JSON, for implementing the traditional 4-tier architectural pattern: frontend React, application Express and Node, database MongoDB and query GraphQL tiers."
  },

  {
    iconName: "fas fa-chart-line",
    text: "Data Analysis",
    description:
      "Python, Numpy, Pandas, Matplotlib and Seaborn for exploring and analyzing large datasets, finding hidden patterns, unseen trends, discovering correlations and deriving valuable insights to make business predictions."
  },

  {
    iconName: "fas fa-server",
    text: "Large Applications",
    description:
      "Redux for keeping organized and managing big applications data flow with a single global object, maintaining consistency throughout the application and making both debugging and testing easier."
  }
];
