import testVideo from "../assets/test.mp4";

const projects = [
  {
    id: 0,
    title: "Project Alpha",
    description: "A cutting-edge mobile app for e-commerce with advanced features including real-time notifications, secure payment integration, and intuitive user interface. Built with React Native and Node.js backend, featuring responsive design and optimized performance across all devices.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    video: testVideo,
    githubUrl: "https://github.com/yourusername/project-alpha",
    liveUrl: "https://project-alpha-demo.vercel.app",
  },
  {
    id: 1,
    title: "Beta Build",
    description: "A responsive website for a fintech startup featuring modern UI/UX design, advanced analytics dashboard, and seamless user experience. Developed using React, TypeScript, and integrated with various financial APIs for real-time data processing.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    video: testVideo,
    githubUrl: "https://github.com/yourusername/beta-build",
    liveUrl: "https://beta-build-demo.netlify.app",
  },
  {
    id: 2,
    title: "Gamma Grid",
    description: "An interactive portfolio for a photographer showcasing stunning visual galleries, smooth animations, and responsive design. Features include image optimization, lazy loading, filtering capabilities, and contact form integration with email notifications.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
    video: testVideo,
    githubUrl: "https://github.com/yourusername/gamma-grid",
    liveUrl: "https://gamma-grid-portfolio.com",
  },
];

export default projects;
