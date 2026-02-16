import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaUsers, FaClock } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      icon: <FaStar />,
      value: '5.0',
      label: 'Calificación',
      color: 'var(--color-secondary)'
    },
    {
      icon: <FaHeart />,
      value: '500+',
      label: 'Clientes Felices',
      color: 'var(--color-primary)'
    },
    {
      icon: <FaUsers />,
      value: '1000+',
      label: 'Pedidos Entregados',
      color: 'var(--color-lavender)'
    },
    {
      icon: <FaClock />,
      value: '3+',
      label: 'Años de Experiencia',
      color: 'var(--color-mint)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="stats-section">
      <motion.div
        className="stats-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div
              className="stat-icon"
              style={{ color: stat.color }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              {stat.icon}
            </motion.div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
