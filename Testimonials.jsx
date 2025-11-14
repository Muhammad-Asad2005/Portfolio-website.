import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Working with Asad was an absolute pleasure. He delivered exceptional code and was always proactive in suggesting improvements.",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Mike Chen",
    role: "CTO at StartupXYZ",
    content: "Asad's technical expertise and attention to detail helped us build a robust application that exceeded our expectations.",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Emily Davis",
    role: "Design Lead at CreativeCo",
    content: "A talented developer who truly understands the importance of design and user experience. Highly recommended!",
    avatar: "/api/placeholder/100/100"
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="w-full min-h-screen py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What people I've worked with have to say
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#1cd8d2] transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-[#1cd8d2] text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            Ready to start your next project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:shadow-xl transition-all"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;