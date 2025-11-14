import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="w-full min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Crafting Digital Excellence</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I specialize in creating responsive, performant, and user-friendly applications 
              that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in computer science and years of hands-on experience, 
              I bring ideas to life through clean code and innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-2">
                <p className="font-semibold">Name:</p>
                <p className="text-gray-300">Asad Murtaza</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Email:</p>
                <p className="text-gray-300">asadmurtaza@gmil.com</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Location:</p>
                <p className="text-gray-300">Karachi, Pakistan</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Availability:</p>
                <p className="text-green-400">Open for opportunities</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#1cd8d2] to-[#00bf8f] p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                <h4 className="text-2xl font-bold mb-4">My Journey</h4>
                <p className="text-gray-300 mb-4">
                  Started coding at a young age and never looked back. 
                  From simple websites to complex web applications, 
                  I've continuously evolved with the technology landscape.
                </p>
                <p className="text-gray-300">
                  I believe in writing maintainable code, following best practices, 
                  and constantly learning new technologies to stay ahead.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;