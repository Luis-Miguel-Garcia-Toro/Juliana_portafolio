import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loader-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="loader-logo-container"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="KUUK Logo" className="loader-icon" />
        </motion.div>
        <motion.h2
          className="loader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          KUUK
        </motion.h2>
        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Repostería Artesanal
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
