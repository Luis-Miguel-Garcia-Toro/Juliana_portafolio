import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { GiCupcake, GiDonut, GiFruitBowl } from 'react-icons/gi';
import FloatingElements from './components/FloatingElements';
import ScrollToTop from './components/ScrollToTop';
import Stats from './components/Stats';
import Loader from './components/Loader';
import SocialFloat from './components/SocialFloat';
import ImageModal from './components/ImageModal';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalImage, setModalImage] = useState({
    isOpen: false,
    src: '',
    alt: '',
    price: '',
    name: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Datos del menú organizados por categorías
  const baseUrl = import.meta.env.BASE_URL;
  const menuData = {
    saludables: [
      { name: 'Vaso de frutas mixto', price: 8000, description: 'Hecho con frutas de temporada', image: `${baseUrl}Vaso de frutas mixto.jpeg` },
      { name: 'Parfait', price: 10000, image: `${baseUrl}Parfait.jpeg` }
    ],
    saladas: [
      { name: 'Empanadas', price: 4000, image: `${baseUrl}empanadas.jpeg` },
      { name: 'Mini perros', price: 5000, image: `${baseUrl}mini perros.jpeg` },
      { name: 'Mini tostadas con pesto', price: 4500, image: `${baseUrl}Mini tostadas con pesto.jpeg` },
      { name: 'Mini hamburguesa', price: 8000, image: `${baseUrl}Mini hamburguesa.jpeg` },
      { name: 'Arepas medianas de pollo', price: 8000, description: 'Hechas con mix de verdura, queso y queso-crema', image: `${baseUrl}Mini arepas rellenas de pollo.jpeg` },
      { name: 'Sándwich de pollo', price: 8000, image: `${baseUrl}Sandwich de pollo.jpeg` },
      { name: 'Mini wraps de pollo', price: 5000, image: `${baseUrl}Mini wraps de pollo.jpeg` }
    ],
    dulces: [
      { name: 'Cupcakes unidad', price: 4000, image: `${baseUrl}Cupcakes.jpeg` },
      { name: 'Mini torta personal', price: 26000, image: `${baseUrl}Mini torta personal.jpeg` },
      { name: 'Mini postre de cheesecake', price: 4000, description: 'Sabor de chocolate, frutos rojos o amarillo. Con base de galleta, crema de queso crema y salsa según el sabor', image: `${baseUrl}Mini postre de cheesecake.jpeg` },
      { name: 'Fresa con malvavisco', price: 4000, image: `${baseUrl}Fresa con masmelo.jpeg` },
      { name: 'Galleta con queso crema y mermelada', price: 3000, image: `${baseUrl}Galleta con queso crema y mermelada.jpeg` },
      { name: 'Vaso con mini galletas de chips y salsa de chocolate', price: 10000, description: '30 unidades', image: `${baseUrl}Vaso con mini galletas de chips.jpeg` }
    ],
    desayunos: [
      { 
        name: 'Opción 1', 
        price: 36000, 
        items: ['Sándwich', 'Jugo', 'Fruta'],
        image: `${baseUrl}Opción 1.jpeg`
      },
      { 
        name: 'Opción 2', 
        price: 41000, 
        items: ['Sándwich', 'Jugo', 'Parfait', 'Chocolatina'],
        image: `${baseUrl}Opción 2.jpeg`
      },
      { 
        name: 'Opción 3', 
        price: 26000, 
        items: ['Sándwich', 'Cupcake', 'Jugo'],
        image: `${baseUrl}Opción 3.jpeg`
      }
    ]
  };

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const openModal = (image, name, price) => {
    setModalImage({
      isOpen: true,
      src: image,
      alt: name,
      price: formatPrice(price),
      name: name
    });
  };

  const closeModal = () => {
    setModalImage({
      isOpen: false,
      src: '',
      alt: '',
      price: '',
      name: ''
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <FloatingElements />
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Navbar */}
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="navbar-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('inicio')}
          >
            <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="KUUK Logo" className="logo-image" />
            <span className="logo-text">KUUK</span>
          </motion.div>
          
          <motion.button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a onClick={() => scrollToSection('inicio')}>Inicio</a></li>
            <li><a onClick={() => scrollToSection('sobre-mi')}>Sobre Mí</a></li>
            <li><a onClick={() => scrollToSection('menu')}>Menú</a></li>
            <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <GiDonut style={{ fontSize: '5rem', color: 'var(--color-primary)', marginBottom: '1rem' }} />
          </motion.div>
          <motion.h1 variants={fadeInUp}>
            Repostería Artesanal
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Endulzando momentos especiales
          </motion.p>
          <motion.p className="hero-description" variants={fadeInUp}>
            Cada creación está hecha con amor y los mejores ingredientes. 
            Desde opciones dulces hasta saladas, todo preparado con dedicación 
            para hacer de tu día algo memorable.
          </motion.p>
          <motion.button 
            className="cta-button"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('menu')}
          >
            Ver Menú
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="about">
        <div className="decoration-1"></div>
        <div className="decoration-2"></div>
        <motion.div 
          className="about-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <GiFruitBowl style={{ fontSize: '4rem', color: 'var(--color-secondary)', marginBottom: '1rem' }} />
          </motion.div>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Sobre Mí
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeInUp}>
            Pasión por la repostería
          </motion.p>
          <motion.p className="about-text" variants={fadeInUp}>
            ¡Hola! Somos KUUK, apasionados por crear delicias que 
            alegran el día. Nuestro amor por la cocina comenzó en casa, y desde entonces 
            hemos dedicado nuestro tiempo a perfeccionar recetas y crear experiencias únicas 
            a través de sabores. Cada producto es preparado con ingredientes frescos 
            y de calidad, porque creemos que cada bocado debe ser especial.
          </motion.p>
          <motion.p className="about-text" variants={fadeInUp} style={{ marginTop: '1.5rem' }}>
            Ofrezco opciones para todos los gustos: desde desayunos completos hasta 
            postres irresistibles. ¡Espero poder endulzar tu día pronto!
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="decoration-3"></div>
        <motion.div 
          className="menu-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Nuestro Menú</h2>
            <p className="section-subtitle">Delicias para cada ocasión</p>
          </motion.div>

          {/* Opciones Saludables */}
          <motion.div 
            className="menu-category"
            variants={fadeInUp}
          >
            <h3 className="category-title">🥗 Opciones Saludables</h3>
            <motion.div 
              className="menu-grid"
              variants={staggerContainer}
            >
              {menuData.saludables.map((item, index) => (
                <motion.div 
                  key={index}
                  className="menu-item"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.image && (
                    <div 
                      className="item-image-container"
                      onClick={() => openModal(item.image, item.name, item.price)}
                    >
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="image-overlay">
                        <span className="click-text">👁️ Ver más grande</span>
                      </div>
                    </div>
                  )}
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-price">{formatPrice(item.price)}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Opciones Saladas */}
          <motion.div 
            className="menu-category"
            variants={fadeInUp}
          >
            <h3 className="category-title">🥪 Opciones Saladas</h3>
            <motion.div 
              className="menu-grid"
              variants={staggerContainer}
            >
              {menuData.saladas.map((item, index) => (
                <motion.div 
                  key={index}
                  className="menu-item"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.image && (
                    <div 
                      className="item-image-container"
                      onClick={() => openModal(item.image, item.name, item.price)}
                    >
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="image-overlay">
                        <span className="click-text">👁️ Ver más grande</span>
                      </div>
                    </div>
                  )}
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-price">{formatPrice(item.price)}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Opciones Dulces */}
          <motion.div 
            className="menu-category"
            variants={fadeInUp}
          >
            <h3 className="category-title">🧁 Opciones Dulces</h3>
            <motion.div 
              className="menu-grid"
              variants={staggerContainer}
            >
              {menuData.dulces.map((item, index) => (
                <motion.div 
                  key={index}
                  className="menu-item"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.image && (
                    <div 
                      className="item-image-container"
                      onClick={() => openModal(item.image, item.name, item.price)}
                    >
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="image-overlay">
                        <span className="click-text">👁️ Ver más grande</span>
                      </div>
                    </div>
                  )}
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-price">{formatPrice(item.price)}</p>
                  {item.description && (
                    <p className="item-description">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Desayunos */}
          <motion.div 
            className="menu-category"
            variants={fadeInUp}
          >
            <h3 className="category-title">☕ Desayunos Especiales</h3>
            <motion.div 
              className="breakfast-options"
              variants={staggerContainer}
            >
              {menuData.desayunos.map((option, index) => (
                <motion.div 
                  key={index}
                  className="breakfast-option"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                >
                  {option.image && (
                    <div 
                      className="breakfast-image-container"
                      onClick={() => openModal(option.image, option.name, option.price)}
                    >
                      <img src={option.image} alt={option.name} className="breakfast-image" />
                      <div className="image-overlay breakfast-overlay">
                        <span className="click-text">👁️ Ver más grande</span>
                      </div>
                    </div>
                  )}
                  <div className="breakfast-content">
                    <div className="option-header">
                      <h4 className="option-name">{option.name}</h4>
                      <p className="option-price">{formatPrice(option.price)}</p>
                    </div>
                    <div className="option-items">
                      {option.items.map((item, idx) => (
                        <span key={idx} className="option-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact">
        <motion.div 
          className="contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <FaHeart style={{ fontSize: '4rem', color: 'var(--color-primary)', marginBottom: '1rem' }} />
          </motion.div>
          <motion.h2 className="section-title" variants={fadeInUp}>
            ¡Hagamos tu pedido!
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeInUp}>
            Contáctame para hacer tu orden
          </motion.p>
          
          <motion.div className="contact-info" variants={staggerContainer}>
            <motion.a 
              href="https://wa.me/573182111122" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp className="contact-icon" />
              <span>WhatsApp: +57 318 211 1122</span>
            </motion.a>
            
            <motion.a 
              href="https://www.instagram.com/kuuk.dulce?igsh=MTRucGMyempvNDJrYw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <FaInstagram className="contact-icon" />
              <span>@kuuk.dulce</span>
            </motion.a>
            
            <motion.a 
              href="mailto:julysary@hotmail.com"
              className="contact-item"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="contact-icon" />
              <span>julysary@hotmail.com</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Hecho con <FaHeart style={{ color: 'var(--color-primary)', margin: '0 0.3rem' }} /> por KUUK | 
          Repostería Artesanal © 2026
        </motion.p>
      </footer>
      
      <ImageModal 
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
        price={modalImage.price}
        name={modalImage.name}
      />
      
      <SocialFloat />
      <ScrollToTop />
    </div>
  );
}

export default App;
