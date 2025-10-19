import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'project1.jpg' // Add your project image
    },
    {
      title: 'Project 2',
      description: 'Mobile app developed with Kotlin for Android',
      tech: ['Kotlin', 'Android', 'Firebase'],
      image: 'project2.jpg' // Add your project image
    },
    {
      title: 'Project 3',
      description: 'Game developed with Unity and C#',
      tech: ['Unity', 'C#', 'Blender'],
      image: 'project3.jpg' // Add your project image
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div ref={ref} className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
