import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// ...existing code...
import '../styles/techstack.css';

const TechStack = () => {
  const technologies = [
    { name: 'Java', icon: 'fab fa-java', color: '#007396' },
    { name: 'C#', icon: 'fab fa-microsoft', color: '#239120' },
    { name: '.NET', icon: 'fab fa-microsoft', color: '#512BD4' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
    { name: 'Kotlin', icon: 'fab fa-android', color: '#7F52FF' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Express', icon: 'fab fa-node-js', color: '#000000' },
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
    { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
    { name: 'Visual Studio', icon: 'fas fa-code', color: '#5C2D91' },
    { name: 'Android', icon: 'fab fa-android', color: '#3DDC84' },
    { name: 'Windows', icon: 'fab fa-windows', color: '#0078D4' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
    { name: 'Unity', icon: 'fas fa-gamepad', color: '#000000' }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="tech-stack" className="tech-stack" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technologies I Work With
      </motion.h2>

      <div className="logo-loop-container">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="logo-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="logo-wrapper">
              <i 
                className={tech.icon}
                style={{ color: tech.color, fontSize: '2.5rem' }}
              />
              <motion.span
                className="tech-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {tech.name}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
