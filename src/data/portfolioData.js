// Portfolio data for the PortfolioDetails component
// Add new projects by extending this object

export const portfolioData = {
  1: {
    title: "Mobile Banking App",
    badge: "UI/UX Design",
    date: "September 2024",
    client: "FinTech Solutions Inc.",
    website: "banking-app.example.com",
    websiteUrl: "#",
    description: "A comprehensive mobile banking application designed for modern financial management with intuitive user experience and robust security features.",
    mainImages: [
      "assets/img/portfolio/portfolio-1.webp",
      "assets/img/portfolio/portfolio-2.webp",
      "assets/img/portfolio/portfolio-4.webp"
    ],
    thumbnailImages: [
      "assets/img/portfolio/portfolio-5.webp",
      "assets/img/portfolio/portfolio-6.webp",
      "assets/img/portfolio/portfolio-7.webp",
      "assets/img/portfolio/portfolio-8.webp"
    ],
    techStack: ["React Native", "Node.js", "PostgreSQL", "Firebase", "Stripe API"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "This mobile banking app was designed to revolutionize how users interact with their finances. Our team focused on creating an intuitive interface while maintaining the highest security standards.",
        expanded: true
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "The main challenge was balancing user-friendly design with stringent security requirements while ensuring compatibility across different mobile platforms and banking regulations.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "We implemented a modular architecture with biometric authentication, real-time fraud detection, and an AI-powered financial assistant to enhance user experience while maintaining security.",
        expanded: false
      }
    ],
    features: [
      "Biometric Authentication",
      "Real-time Notifications",
      "Budget Tracking",
      "Investment Portfolio",
      "Bill Payment System",
      "Cross-platform Support"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  },
  2: {
    title: "E-Learning Platform",
    badge: "Development",
    date: "August 2024",
    client: "EduTech Global",
    website: "elearning-platform.example.com",
    websiteUrl: "#",
    description: "A comprehensive e-learning platform designed to deliver engaging educational content with interactive features and advanced analytics.",
    mainImages: [
      "assets/img/portfolio/portfolio-10.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp"
    ],
    thumbnailImages: [
      "assets/img/portfolio/portfolio-1.webp",
      "assets/img/portfolio/portfolio-2.webp",
      "assets/img/portfolio/portfolio-4.webp",
      "assets/img/portfolio/portfolio-5.webp"
    ],
    techStack: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "This e-learning platform was built to provide scalable online education solutions with interactive content delivery and comprehensive progress tracking.",
        expanded: true
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "Creating a platform that could handle thousands of concurrent users while delivering high-quality video content and maintaining engagement through interactive elements.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "We implemented a microservices architecture with CDN integration, adaptive streaming, and gamification elements to create an engaging learning environment.",
        expanded: false
      }
    ],
    features: [
      "Video Streaming",
      "Interactive Quizzes",
      "Progress Tracking",
      "Certificate Generation",
      "Discussion Forums",
      "Mobile App Support"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  },
  3: {
    title: "Smart Home Interface",
    badge: "UI/UX Design",
    date: "July 2024",
    client: "IoT Innovations Ltd.",
    website: "smarthome-interface.example.com",
    websiteUrl: "#",
    description: "An intuitive smart home control interface that seamlessly integrates multiple IoT devices into a unified, user-friendly dashboard.",
    mainImages: [
      "assets/img/portfolio/portfolio-2.webp",
      "assets/img/portfolio/portfolio-6.webp",
      "assets/img/portfolio/portfolio-8.webp"
    ],
    thumbnailImages: [
      "assets/img/portfolio/portfolio-10.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp",
      "assets/img/portfolio/portfolio-1.webp"
    ],
    techStack: ["React", "TypeScript", "Node.js", "MQTT", "MongoDB"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "A revolutionary smart home interface that connects and controls various IoT devices through a single, elegant dashboard designed for maximum usability.",
        expanded: true
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "Integrating multiple device protocols and ensuring real-time responsiveness while maintaining an intuitive user experience across different device categories.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "We developed a unified API layer with real-time WebSocket connections and implemented an adaptive UI that responds to different device capabilities and states.",
        expanded: false
      }
    ],
    features: [
      "Device Integration",
      "Real-time Control",
      "Energy Monitoring",
      "Automation Scheduling",
      "Voice Commands",
      "Remote Access"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  }
  // Add more projects here...
};

// Helper function to get project by ID
export const getProjectById = (id) => {
  return portfolioData[id] || null;
};

// Helper function to get all projects
export const getAllProjects = () => {
  return Object.values(portfolioData);
};

// Helper function to get projects by category/badge
export const getProjectsByCategory = (category) => {
  return Object.values(portfolioData).filter(project => 
    project.badge.toLowerCase().includes(category.toLowerCase())
  );
};

