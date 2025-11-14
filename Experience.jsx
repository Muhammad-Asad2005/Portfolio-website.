import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    technologies: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create user-friendly interfaces.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Junior Web Developer",
    company: "Startup Ventures",
    period: "2019 - 2020",
    description: "Built and maintained company websites and web applications, focusing on frontend development.",
    technologies: ["JavaScript", "HTML/CSS", "React", "Firebase"]
  }
];

function Experience() {
  return (
    <section id="experience" className="w-full min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and the companies I've worked with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-[#1cd8d2] to-[#00bf8f]"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-lg text-[#1cd8d2] font-semibold">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-white rounded-full text-sm font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;