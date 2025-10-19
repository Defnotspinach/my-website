import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const technologies = [
    { name: 'Java', icon: '☕' },
    { name: 'C#', icon: '🔷' },
    { name: '.NET', icon: '🌐' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Kotlin', icon: '📱' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Express.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Visual Studio Code', icon: '💻' },
    { name: 'Visual Studio', icon: '🎯' },
    { name: 'Android', icon: '🤖' },
    { name: 'Windows', icon: '🪟' },
    { name: 'Git', icon: '📝' },
    { name: 'GitHub', icon: '🐱' },
    { name: 'Unity', icon: '🎮' }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="tech-stack" className="tech-stack">
      <h2>Technologies I Work With</h2>
      <div ref={ref} className="tech-grid">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
