import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const socials = [
  { Icon: FaTwitter, label: "X", href: "https://twitter.com/yourprofile" },
  { Icon: FaLinkedin, label: "Linkedin", href: "https://linkedin.com/yourprofile" },
  { Icon: FaGithub, label: "Github", href: "https://github.com/yourprofile" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2, 
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 19px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-black to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-2">Asad Murtaza</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                href={href}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-400 hover:text-white text-2xl transition-colors duration-300"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400">
              &copy; {currentYear} Asad Murtaza. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with React & Tailwind CSS
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;