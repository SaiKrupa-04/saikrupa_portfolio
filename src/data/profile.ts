export const profile = {
  name: "SaiKrupa Chinthalapally",
  title: "Full Stack Web Developer & Computer Science Student",
  summary:
    "I'm a passionate Computer Science Engineering student with a strong foundation in full-stack development. Currently in my third year, I'm focused on creating intuitive and efficient software solutions while continuously expanding my technical skills.",
  contact: {
    email: "saikrupachinthalapally01@gmail.com",
    phone: "+91 9985853308",
    linkedin: "www.linkedin.com/in/saikrupa-chinthalapally-1181ba283",
    github: "https://github.com/Saikrupa-04",
    portfolio: "https://saikrupa.dev",
  },
  education: {
    institution: "Sreenidhi Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    graduation: "2026",
    gpa: "9.22 / 10",
    status: "3rd Year, 2nd Semester",
  },
  style: {
    fontFamily: "'Poppins', sans-serif",
    colors: {
      primary: "#5A20CB", // deep violet
      secondary: "#FF6F61", // coral accent
      text: "#333333",
      background: "#FAFAFA",
      highlight: "#FFCF56",
    },
  },
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "SQL", "HTML5", "CSS", "JavaScript", "C"],
    style: { color: "#5A20CB", fontWeight: "600" },
  },
  {
    category: "Frameworks & Libraries",
    items: ["ExpressJs", "ReactJS", "PostgreSQL", "NodeJS"],
    style: { color: "#FF6F61", fontWeight: "600" },
  },
  {
    category: "Developer Tools",
    items: ["Postman", "Git"],
    style: { color: "#5A20CB", fontWeight: "600" },
  },
  {
    category: "Databases",
    items: ["MongoDB Atlas", "PostgreSQL"],
    style: { color: "#FF6F61", fontWeight: "600" },
  },
];

export const projects = [
  {
    title: "Organic Hub",
    description:
      "Digital marketplace connecting farmers directly with consumers, eliminating middlemen and ensuring fair prices.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    features: [
      "Secure user authentication and authorization",
      "Real-time inventory management",
      "Payment gateway integration",
      "Order tracking and management",
    ],
    github: "https://github.com/saikrupa/organic-hub",
    demo: "https://organic-hub.example.com",
    style: {
      borderColor: "#FF6F61",
      titleColor: "#5A20CB",
      featureColor: "#FFCF56",
    },
  },
  {
    title: "CodeFusion.it",
    description:
      "Web-based code compiler supporting multiple programming languages with real-time collaboration features.",
    technologies: ["React", "WebSockets", "Node.js", "Docker"],
    features: [
      "Multi-language compilation support",
      "Real-time code sharing",
      "Custom test case execution",
      "Code history and versioning",
    ],
    
    style: {
      borderColor: "#5A20CB",
      titleColor: "#FF6F61",
      featureColor: "#FFCF56",
    },
  },
  {
    title: "TempTalk",
    description:
      "Secure, ephemeral messaging platform for temporary conversations with automatic message expiration.",
    technologies: ["Socket.io", "React", "Express", "MongoDB"],
    features: [
      "End-to-end encryption",
      "Customizable message expiration",
      "No data storage after expiration",
      "Real-time typing indicators",
    ],
  
    style: {
      borderColor: "#FFCF56",
      titleColor: "#5A20CB",
      featureColor: "#FF6F61",
    },
  },
  {
    title: "Virtual Labs",
    description:
      "A comprehensive web-based sandbox platform for programming and engineering experiments, featuring interactive simulations and real-time visualization tools.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "Multiple programming language environments (Python, Java)",
      "Interactive hardware simulation interfaces",
      "Real-time experiment visualization",
      "Guided theoretical frameworks with practical workspaces",
      "Remote lab access and experiment scheduling",
    ],
  
    current: true,
    style: {
      borderColor: "#5A20CB",
      titleColor: "#FFCF56",
      featureColor: "#FF6F61",
    },
  },
];

export const responsibilities = [
  {
    title: "Class Representative",
    organization: "Sreenidhi Institute of Science and Technology",
    
    description:
      "Serve as a liaison between students and faculty, coordinate class activities, and represent student concerns to the administration.",
    style: {
      backgroundColor: "#5A20CB",
      textColor: "#FFFFFF",
      fontStyle: "italic",
    },
  },
  {
    title: "Tech Number",
    organization: "Cloud Community Club (Open Source Club)",
    
    description:
      "Lead workshops on cloud technologies, mentor students on open-source contributions, and organize hackathons focused on cloud-native applications.",
    style: {
      backgroundColor: "#FF6F61",
      textColor: "#FFFFFF",
      fontStyle: "italic",
    },
  },
];
