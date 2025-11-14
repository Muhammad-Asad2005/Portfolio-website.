import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "API Integration", "Chart.js", "Geolocation"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveLink: "#",
    githubLink: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-[#1cd8d2] to-[#00bf8f] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-white text-center rounded-lg font-medium transition-all"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 text-center rounded-lg font-medium hover:border-[#1cd8d2] hover:text-[#1cd8d2] transition-all"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;