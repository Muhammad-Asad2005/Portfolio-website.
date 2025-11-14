import { motion } from "framer-motion";
import { FaJava, FaReact } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFastapi, 
  SiPython, 
  SiDocker, 
  SiMongodb,
  SiAngular 
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

const skillsData = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <DiNodejsSmall />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiAngular />, name: "Angular" },
];

const skillCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 65 },
      { name: "Next.js", level: 60 },
      { name: "Angular", level: 65 },
      { name: "Tailwind CSS", level: 75 }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "FastAPI", level: 70 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 80 },
      { name: "AWS", level: 65 },
      { name: "Framer Motion", level: 80 },
      { name: "REST APIs", level: 75 }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] mx-auto mt-6"></div>
        </motion.div>

        {/* Skills Grid with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300 group"
              >
                <div className="text-4xl text-[#1cd8d2] mb-3 group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-[#1cd8d2]">
                {skillCategory.category}
              </h3>
              
              <div className="space-y-4">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-300">{tech.name}</span>
                      <span className="text-sm text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: techIndex * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Fast</h4>
              <p className="text-gray-300">Lightning fast load times and smooth interactions</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">📱</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Responsive</h4>
              <p className="text-gray-300">Layouts that work on any device, big or small</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Intuitive</h4>
              <p className="text-gray-300">User-friendly interfaces with great UX</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;