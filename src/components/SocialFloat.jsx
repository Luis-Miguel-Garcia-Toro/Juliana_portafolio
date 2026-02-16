import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './SocialFloat.css';

const SocialFloat = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/573182111122',
      icon: <FaWhatsapp />,
      color: '#25D366',
      delay: 0
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kuuk.dulce?igsh=MTRucGMyempvNDJrYw==',
      icon: <FaInstagram />,
      color: '#E4405F',
      delay: 0.1
    }
  ];

  return (
    <div className="social-float-container">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-float-button"
          style={{ backgroundColor: social.color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: social.delay,
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.15,
            boxShadow: `0 8px 30px ${social.color}66`
          }}
          whileTap={{ scale: 0.9 }}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialFloat;
