export const projectsDescription = [
  {
    id: 1,
    title: "Metierpick",
    type: "Student Career Decision Support System",
    description: [
      "is a web-based Decision Support System (DSS) that I developed in 2022 for our capstone project. The system was designed to help secondary-level students identify their dominant attributes, determine their most suitable career paths, and visualize data on the most prevalent college programs in surrounding provinces for which will aid them in deciding what career path to take in their upcoming higher education years. This web application consists of a signup-login-logout system, multi-form assessment, decision tree algorithm-aided data categorization, and a dynamic mapping system.",
      "The system utilizes the Multiple Intelligences Developmental Assessment Scales (MIDAS) to evaluate students based on their various skills, namely: Linguistic, Logical-Mathematical, Spatial, Bodily-Kinesthetic, Musical, Interpersonal, Intrapersonal, and Naturalist, which was taken from the theory of Multiple Intelligences (MI) developed by Dr. Howard Gardner. This DSS implements the Decision Tree algorithm to categorize students by the mentioned MI attributes.",
      "This web-based application made use of an open-source tool, Leaflet, to create map visualizations. The main purpose of the dynamic mapping system is to present the number of enrollees of a specified college program in each province in Mindanao, Philippines. This is to help students to be informed if a suitable college program is available within that location, or to encourage them to enroll to the most prevailing one in their area. The dynamic mapping and the rest of the system utilized modern web technologies that greatly helped me to improve and grow as a web developer."
    ],
    logoPath: process.env.ASSETS_BASE + "/images/projects/project-1-logo.png",
    logoAlt: "metierpic-logo",
    imgPath: process.env.ASSETS_BASE + "/images/projects/project-1-pic-1.PNG",
    imgAlt: "metierpick-cover"
  },
  {
    id: 2,
    title: "Mapquito",
    type: "Dengue Monitoring Web Application",
    description: [
      "is a web-based dengue monitoring system that I developed in 2022 to help in managing and monitoring dengue cases in the provinces of Mindanao, Philippines. Utilizing modern web technologies, I built this web application that consists of three primary components: (1) a dynamic map that provides graphs and reporting of the recorded number of dengue cases per province in the current year and the past years, (2) graphs that present monthly and yearly trend analysis of dengue cases, and (3) a data table to view and manage old and new records of dengue cases.",
      "This project challenged me as it required me to become well-versed in tools that were unfamiliar to me before such as Tailwind CSS for styling, Chart.js for dynamic charts and graphs, and a couple of file saver and parser tools to manage spreadsheets and CSV files. I also learned a lot and improved my existing skills in frontend/Javascript/React development as I tried to challenge myself while building complex features from scratch. Finally, this project allowed me to experience the best of both worlds in React state management as I utilized Context API after being used to using Redux from my project prior to this, which really helped me in recognizing the strengths of each tools."
    ],
    logoPath: process.env.ASSETS_BASE + "/images/projects/project-2-logo.png",
    logoAlt: "mapquito-logo",
    imgPath: process.env.ASSETS_BASE + "/images/projects/project-2-pic-1.PNG",
    imgAlt: "mapquito-cover"
  },
  {
    id: 3,
    title: "Baybayin",
    type: "Restaurant Landing Page and Reservation System",
    description: [
      "is a fictitious restaurant landing page and online reservation system that I developed in 2020 for a local client. The website comprised of the basic components of a landing page such as hero/cover section, products and services, and contacts section, and a reservation system that allows potential customers to reserve tables and events to be accommodated by the restaurant. The project involved frontend web design and development, backend development, API integration, and database management.",
      "As I was fairly new in full-stack web development and had no knowledge of any advanced libraries that time, this project was definitely a great learning experience. Developing the web system refined my fundamental knowledge in REST API, modern Javascript and JQuery library, essentials of Bootstrap and responsive design, and the basics of backend (CRUD operations) development using PHP and MySQL. The tools that I learned as a developer in this project greatly boosted my skills in learning the advanced technologies that I had utilized in my recent projects."
    ],
    logoPath: <p id="baybayin-logo">Baybayin</p>,
    logoAlt: "",
    imgPath: process.env.ASSETS_BASE + "/images/projects/project-3-pic-1.PNG",
    imgAlt: "baybayin-cover"
  }
];
