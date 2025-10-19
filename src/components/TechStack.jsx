import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import * as SimpleIcons from 'simple-icons';

const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  const technologies = [
    { name: 'Java', icon: SimpleIcons.siJava, color: '#007396' },
    { name: 'C#', icon: SimpleIcons.siCsharp, color: '#239120' },
    { name: '.NET', icon: SimpleIcons.siDotnet, color: '#512BD4' },
    { name: 'MongoDB', icon: SimpleIcons.siMongodb, color: '#47A248' },
    { name: 'Kotlin', icon: SimpleIcons.siKotlin, color: '#7F52FF' },
    { name: 'Python', icon: SimpleIcons.siPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SimpleIcons.siJavascript, color: '#F7DF1E' },
    { name: 'HTML5', icon: SimpleIcons.siHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SimpleIcons.siCss3, color: '#1572B6' },
    { name: 'Express', icon: SimpleIcons.siExpress, color: '#000000' },
    { name: 'React', icon: SimpleIcons.siReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SimpleIcons.siNodedotjs, color: '#339933' },
    { name: 'MySQL', icon: SimpleIcons.siMysql, color: '#4479A1' },
    { name: 'Vue.js', icon: SimpleIcons.siVuedotjs, color: '#4FC08D' },
    { name: 'VS Code', icon: SimpleIcons.siVisualstudiocode, color: '#007ACC' },
    { name: 'Visual Studio', icon: SimpleIcons.siVisualstudio, color: '#5C2D91' },
    { name: 'Android', icon: SimpleIcons.siAndroid, color: '#3DDC84' },
    { name: 'Windows', icon: SimpleIcons.siWindows, color: '#0078D4' },
    { name: 'Git', icon: SimpleIcons.siGit, color: '#F05032' },
    { name: 'GitHub', icon: SimpleIcons.siGithub, color: '#181717' },
    { name: 'Unity', icon: SimpleIcons.siUnity, color: '#000000' }
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % technologies.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [inView, technologies.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
        <div className="logo-ring">
          {technologies.map((tech, index) => {
            const rotation = (360 / technologies.length) * index;
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={tech.name}
                className={`logo-item ${isActive ? 'active' : ''}`}
                initial={false}
                animate={{
                  rotate: rotation,
                  scale: isActive ? 1.2 : 1,
                  opacity: isActive ? 1 : 0.5
                }}
                style={{
                  originX: '50%',
                  originY: '250px'
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <div className="logo-wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      fill: tech.color,
                      width: '100%',
                      height: '100%'
                    }}
                    dangerouslySetInnerHTML={{ __html: tech.icon.path }}
                  />
                  <motion.span
                    className="tech-name"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.8
                    }}
                  >
                    {tech.name}
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="active-tech">
          <motion.div
            key={technologies[activeIndex].name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="active-tech-content"
          >
            <h3>{technologies[activeIndex].name}</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
