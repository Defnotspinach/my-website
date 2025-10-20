import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import TechStack from './TechStack';
import Projects from './Projects';
import ParticlesBackground from './ParticlesBackground';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="main-container">
      <ParticlesBackground />
      <div className="sections-container">
        <section id="home" className="hero-section">
          <motion.div 
            className="content"
            initial={{ opacity: 0, y: 20 }}   
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Marc Aedrian</h1>
            <div className="type-wrapper">
              <TypeAnimation
                sequence={[ 
                  'Full-Stack Developer',
                  2000,
                  'Mobile App Developer',
                  2000,
                  'Game Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typed-text"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Crafting web applications with modern technologies and best practices.
            </motion.p>
          </motion.div>
        </section>
        <TechStack />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
