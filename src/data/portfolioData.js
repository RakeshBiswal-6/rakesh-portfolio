export const portfolioData = {
  personal: {
    name: "Rakesh Biswal",
    role: "Engineering Student & Developer",
    identity: [
      "Aspiring Software Developer",
      "Full-Stack Web Developer",
      "AI/ML Enthusiast",
      "Creative Developer",
      "Engineering Student"
    ],
    tagline: "Software Development | Full-Stack Development | AI/ML",
    heroSubtitle: "I build digital experiences and develop solutions through technology.",
    aboutText: [
      "I am an engineering student with an interest in software development, modern web technologies, and artificial intelligence.",
      "I enjoy learning new technologies, solving problems, and building useful digital experiences.",
      "My goal is to continuously improve my technical knowledge and create meaningful solutions."
    ],
    education: {
      degree: "B.Tech Engineering Student",
      institution: "CUPGS, BPUT",
      location: "Rourkela, Odisha, India",
    },
    contact: {
      email: "rakeshbiswal6804@gmail.com",
      github: "https://github.com/RakeshBiswal-6",
      githubUsername: "RakeshBiswal-6",
      linkedin: "https://linkedin.com/in/rakesh-biswal",
      instagram: "https://www.instagram.com/rakesh._.biswal/",
    },
    brandStatement: "RAKESH BISWAL · Developer | Creator | Problem Solver",
  },

  skills3D: [
    {
      id: "01",
      domain: "FRONTEND DEVELOPMENT",
      shortDesc: "Building responsive, modern, and accessible user interfaces.",
      technologies: [
        {
          name: "React.js",
          description: "Component architecture, reactive states, hooks, and modern frontend ecosystems.",
          geometry: "icosahedron",
        },
        {
          name: "JavaScript",
          description: "ES6+ standards, asynchronous flows, DOM manipulation, and core programming paradigms.",
          geometry: "octahedron",
        },
        {
          name: "HTML5",
          description: "Semantic web structuring, accessibility standards, and SEO compliance.",
          geometry: "box",
        },
        {
          name: "CSS3",
          description: "Fluid responsive styling, Flexbox/Grid layouts, modern CSS variables, and transitions.",
          geometry: "torus",
        },
      ],
    },
    {
      id: "02",
      domain: "BACKEND DEVELOPMENT",
      shortDesc: "Architecting server logic, RESTful interfaces, and database integrations.",
      technologies: [
        {
          name: "Node.js",
          description: "Event-driven asynchronous backend runtime for scalable networked applications.",
          geometry: "octahedron",
        },
        {
          name: "Full-Stack Development",
          description: "End-to-end web system integration connecting frontend views with backend services.",
          geometry: "torus",
        },
      ],
    },
    {
      id: "03",
      domain: "PROGRAMMING LANGUAGES",
      shortDesc: "Algorithmic thinking, data structures, and object-oriented implementations.",
      technologies: [
        {
          name: "Python",
          description: "Data processing, machine learning scripting, automation, and backend algorithms.",
          geometry: "icosahedron",
        },
        {
          name: "C++",
          description: "High-performance computational algorithms, memory concepts, and foundational DSA.",
          geometry: "box",
        },
        {
          name: "Java",
          description: "Object-oriented programming, modular software design, and enterprise paradigms.",
          geometry: "octahedron",
        },
      ],
    },
    {
      id: "04",
      domain: "AI AND MACHINE LEARNING",
      shortDesc: "Designing predictive models, data analysis workflows, and computer vision pipelines.",
      technologies: [
        {
          name: "Machine Learning",
          description: "Supervised and unsupervised models, classification, regression, and data evaluation.",
          geometry: "torus",
        },
        {
          name: "Artificial Intelligence",
          description: "Algorithmic intelligence, heuristics, feature engineering, and neural concepts.",
          geometry: "icosahedron",
        },
      ],
    },
    {
      id: "05",
      domain: "DEVELOPER TOOLS",
      shortDesc: "Version control, build environments, and modern developer tooling.",
      technologies: [
        {
          name: "Git",
          description: "Branching strategies, distributed version tracking, and repository maintenance.",
          geometry: "box",
        },
        {
          name: "GitHub",
          description: "Collaborative workflows, remote code repositories, and continuous deployments.",
          geometry: "octahedron",
        },
        {
          name: "VS Code",
          description: "Integrated developer environment, debugging tools, extensions, and CLI tooling.",
          geometry: "icosahedron",
        },
      ],
    },
  ],

  projects: [
    {
      id: "face-attendance",
      title: "Face Recognition Attendance System",
      shortDesc: "Automated biometric attendance verification with deep facial representations, QR validation, and geo-fencing.",
      fullDesc: "An automated attendance verification system combining facial feature recognition with QR code verification and location validation. Engineered to prevent proxy logging using OpenCV, neural models, and secure real-time database synchronization.",
      tech: ["Python", "OpenCV", "Keras", "Flutter / Web", "Firebase", "SQLite"],
      githubUrl: "https://github.com/RakeshBiswal-6",
      liveUrl: "https://rakesh-portfolio-github.vercel.app",
      highlight: "Biometric AI System",
      metrics: "Live Verification",
    },
    {
      id: "aqi-monitoring",
      title: "Air Quality Monitoring & Prediction",
      shortDesc: "Machine learning platform analyzing atmospheric pollutant levels and forecasting AQI indices.",
      fullDesc: "An environmental analytics and prediction platform. Analyzes atmospheric pollutants (PM2.5, PM10, NO2, SO2, CO) using trained ensemble regression models, paired with interactive visual data dashboards and automated health warnings.",
      tech: ["Python", "Random Forest", "Scikit-Learn", "Plotly", "Pandas"],
      githubUrl: "https://github.com/RakeshBiswal-6",
      liveUrl: "https://rakesh-portfolio-github.vercel.app",
      highlight: "Predictive Analytics",
      metrics: "Ensemble ML",
    },
    {
      id: "movie-recommendation",
      title: "Movie Recommendation System",
      shortDesc: "Content-based movie discovery engine powered by metadata similarity and dynamic TMDB API ingestion.",
      fullDesc: "A personalized movie recommendation system that analyzes metadata vectors, plot keywords, genres, and cast relationships using cosine similarity to generate real-time cinema recommendations.",
      tech: ["Python", "Cosine Similarity", "NLP Vectorization", "TMDB API", "Streamlit"],
      githubUrl: "https://github.com/RakeshBiswal-6",
      liveUrl: "https://rakesh-portfolio-github.vercel.app",
      highlight: "Recommendation Engine",
      metrics: "Content Similarity",
    },
    {
      id: "3d-portfolio",
      title: "Immersive 3D Personal Developer Portfolio",
      shortDesc: "Award-style digital experience with Three.js WebGL environments, glassmorphism, and minimal luxury typography.",
      fullDesc: "A complete interactive 3D portfolio crafted with React, Three.js, React Three Fiber, GSAP, and Tailwind CSS. Built with cinematic lighting, depth-based section transitions, and 60 FPS performance optimizations.",
      tech: ["React.js", "Three.js", "R3F", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/RakeshBiswal-6/rakesh-portfolio",
      liveUrl: "https://rakesh-portfolio-github.vercel.app",
      highlight: "WebGL & 3D Web",
      metrics: "60 FPS Interactive",
    },
  ],

  educationTimeline: [
    {
      period: "2024 — Present",
      title: "B.Tech in Computer Science & Engineering",
      institution: "CUPGS, BPUT, Rourkela, Odisha, India",
      type: "Education",
      summary: "Pursuing Bachelor of Technology with focus on computer science foundations, algorithms, systems, and artificial intelligence.",
      details: ["Data Structures & Algorithms", "Operating Systems & Networking", "Machine Learning Fundamentals"],
    },
    {
      period: "2024",
      title: "Machine Learning Intern",
      institution: "Jyesta Corporate Entity / Partnered with E-Cell, IIT Roorkee",
      type: "Experience",
      summary: "Engaged in real-world data processing, feature engineering, and predictive recommendation model development.",
      details: ["Data Pipeline Preprocessing", "Recommender Prototyping", "Evaluation Metrics"],
    },
    {
      period: "2024 — 2025",
      title: "Hackathons & Technical Activities",
      institution: "Academic & National Level Events",
      type: "Achievements",
      summary: "Collaborated in development teams solving problems under sprint constraints and presenting functional prototypes.",
      details: ["Rapid Prototype Development", "AI/ML Integration", "Technical Presentation"],
    },
    {
      period: "2023 — 2024",
      title: "Certifications & Workshops",
      institution: "Technical Certifications & Training",
      type: "Certifications",
      summary: "Completed rigorous coursework and practical projects in Python, modern web development, and applied machine learning.",
      details: ["Python for Data Science", "Full-Stack Web Foundations", "Git Version Control"],
    },
  ],

  github: {
    username: "RakeshBiswal-6",
    profileUrl: "https://github.com/RakeshBiswal-6",
    repoUrl: "https://github.com/RakeshBiswal-6/rakesh-portfolio",
    stats: {
      repos: "12+",
      contributions: "450+",
      stars: "25+",
      commits: "380+",
    },
    pinned: [
      {
        name: "Face-Recognition-Attendance",
        desc: "Biometric attendance logging with OpenCV, Keras, and Firebase.",
        language: "Python",
        stars: 14,
        forks: 5,
        url: "https://github.com/RakeshBiswal-6",
      },
      {
        name: "Air-Quality-Prediction-AQI",
        desc: "Pollutant analysis & prediction using Random Forest and visual analytics.",
        language: "Python",
        stars: 9,
        forks: 3,
        url: "https://github.com/RakeshBiswal-6",
      },
      {
        name: "Movie-Recommendation-System",
        desc: "Recommendation engine with metadata cosine similarity & TMDB API.",
        language: "Python",
        stars: 11,
        forks: 4,
        url: "https://github.com/RakeshBiswal-6",
      },
      {
        name: "rakesh-portfolio",
        desc: "Extraordinary 3D personal portfolio built with React, Three.js & Tailwind CSS.",
        language: "JavaScript",
        stars: 8,
        forks: 2,
        url: "https://github.com/RakeshBiswal-6/rakesh-portfolio",
      },
    ],
  },
};
