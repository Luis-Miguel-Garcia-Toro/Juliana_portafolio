import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  const elements = [
    { emoji: '🧁', delay: 0, duration: 8 },
    { emoji: '🍪', delay: 1, duration: 10 },
    { emoji: '🍰', delay: 2, duration: 9 },
    { emoji: '🍓', delay: 0.5, duration: 7 },
    { emoji: '🥐', delay: 1.5, duration: 11 },
    { emoji: '🍩', delay: 2.5, duration: 8.5 }
  ];

  return (
    <div className="floating-elements-container">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          initial={{ y: 0, opacity: 0.6 }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay
          }}
          style={{
            left: `${(index + 1) * 15}%`,
            top: `${10 + index * 15}%`
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
