import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/projects/ecommerce.jpg',
      liveLink: 'https://ecommerce-demo.com',
      githubLink: 'https://github.com/yourusername/ecommerce',
      color: '#2563eb'
    },
    {
      title: 'AI Task Manager',
      description: 'Smart task management app that uses AI to prioritize and categorize tasks automatically.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: '/projects/taskmanager.jpg',
      liveLink: 'https://ai-tasks-demo.com',
      githubLink: 'https://github.com/yourusername/ai-tasks',
      color: '#059669'
    },
    {
      title: 'Mobile Game',
      description: 'A cross-platform mobile game with realistic physics and multiplayer support.',
      tech: ['Unity', 'C#', 'Photon', 'Blender'],
      image: '/projects/game.jpg',
      liveLink: 'https://game-demo.com',
      githubLink: 'https://github.com/yourusername/mobile-game',
      color: '#7C3AED'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media managers with AI-powered insights.',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
      image: '/projects/dashboard.jpg',
      liveLink: 'https://dashboard-demo.com',
      githubLink: 'https://github.com/yourusername/dashboard',
      color: '#DC2626'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div ref={ref} className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div 
              className="project-content"
              style={{ backgroundColor: project.color + '10' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <p>{project.description}</p>
              <motion.div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
                <motion.div 
                  className="image-overlay"
                  style={{ backgroundColor: project.color + '20' }}
                  whileHover={{ opacity: 0 }}
                />
              </motion.div>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <motion.span 
                    key={tech} 
                    className="tech-tag"
                    style={{ backgroundColor: project.color + '20', color: project.color }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
