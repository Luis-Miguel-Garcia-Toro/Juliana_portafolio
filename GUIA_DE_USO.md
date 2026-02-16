# 📖 Guía de Uso - Portafolio de Repostería

## 🎯 Acceso al Portafolio

Tu portafolio está disponible en: **http://localhost:5173/**

El servidor de desarrollo ya está corriendo. ¡Abre el navegador y disfruta de tu hermoso portafolio!

## ✏️ Personalización Rápida

### 1. Cambiar Información de Contacto

Abre `src/App.jsx` y busca la sección de contacto (línea ~430):

```jsx
// WhatsApp - Cambia el número
href="https://wa.me/573123456789"

// Instagram - Cambia tu usuario
href="https://instagram.com/juliana_reposteria"

// Email - Cambia tu correo
href="mailto:juliana@reposteria.com"
```

### 2. Modificar Productos y Precios

En `src/App.jsx`, encuentra el objeto `menuData` (línea ~37) y edita los productos:

```jsx
const menuData = {
  saludables: [
    { name: 'Vaso de frutas mixto', price: 2500 },
    { name: 'Parfait', price: 3500 }
  ],
  // ... más categorías
};
```

**Para agregar un producto:**
```jsx
{ name: 'Nombre del producto', price: 3000 }
```

**Para agregar descripción:**
```jsx
{ name: 'Producto', price: 5000, description: 'Descripción adicional' }
```

### 3. Cambiar Colores del Diseño

Abre `src/index.css` y modifica las variables de color (línea ~7):

```css
:root {
  --color-primary: #ff9ec1;      /* Color principal (rosa) */
  --color-secondary: #ffcd9e;    /* Color secundario (durazno) */
  --color-accent: #ffd4f4;       /* Color de acento (rosa claro) */
  --color-mint: #b4e7ce;         /* Verde menta */
  --color-lavender: #d4b3ff;     /* Lavanda */
  --color-peach: #ffccb3;        /* Durazno */
}
```

### 4. Modificar Textos del Hero (Portada)

En `src/App.jsx`, busca la sección Hero (línea ~200):

```jsx
<motion.h1>
  Repostería Artesanal  {/* Título principal */}
</motion.h1>
<motion.p className="hero-subtitle">
  Endulzando momentos especiales  {/* Subtítulo */}
</motion.p>
<motion.p className="hero-description">
  Tu descripción personalizada aquí...
</motion.p>
```

### 5. Actualizar Sección "Sobre Mí"

Busca la sección About (línea ~250) y modifica los textos:

```jsx
<motion.p className="about-text">
  Tu historia personalizada aquí...
</motion.p>
```

### 6. Modificar Estadísticas

Abre `src/components/Stats.jsx` y edita las estadísticas:

```jsx
const stats = [
  {
    icon: <FaStar />,
    value: '5.0',              // Cambia el valor
    label: 'Calificación',     // Cambia el texto
    color: 'var(--color-secondary)'
  },
  // ... más estadísticas
];
```

## 🎨 Características del Portafolio

### ✨ Animaciones
- Elementos flotantes de emojis de repostería
- Animaciones suaves al hacer scroll
- Efectos hover en tarjetas
- Transiciones elegantes entre secciones
- Pantalla de carga inicial con logo animado

### 📱 Responsive Design
- Menú hamburguesa para móviles
- Diseño adaptable a todos los tamaños de pantalla
- Overlay al abrir menú móvil

### 🎯 Navegación
- Scroll suave entre secciones
- Navbar con efecto al hacer scroll
- Botón "Scroll to Top" que aparece automáticamente
- Enlaces directos a redes sociales

### 🎨 Diseño Visual
- Paleta de colores pasteles
- Gradientes suaves
- Scrollbar personalizada
- Elementos decorativos animados
- Fuentes elegantes (Playfair Display + Poppins)

## 🚀 Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la versión de producción
npm run preview

# Ver posibles problemas de código
npm run lint
```

## 📂 Estructura de Archivos

```
portafolio_juliana/
├── src/
│   ├── components/
│   │   ├── FloatingElements.jsx    # Emojis flotantes
│   │   ├── ScrollToTop.jsx         # Botón scroll arriba
│   │   ├── Stats.jsx               # Sección estadísticas
│   │   └── Loader.jsx              # Pantalla de carga
│   ├── App.jsx                     # Componente principal
│   ├── App.css                     # Estilos principales
│   └── index.css                   # Estilos globales
├── public/                         # Archivos públicos
└── package.json                    # Dependencias
```

## 💡 Consejos

1. **Guarda cambios**: Los cambios se aplican automáticamente (Hot Reload)
2. **Revisa el navegador**: Abre las herramientas de desarrollo (F12) si algo no funciona
3. **Usa buenos colores**: Mantén la paleta de colores pasteles para el tema de repostería
4. **Actualiza precios**: Revisa y actualiza los precios regularmente
5. **Agrega fotos**: Considera agregar imágenes de tus productos en el futuro

## 🆘 Solución de Problemas

**El servidor no inicia:**
```bash
cd portafolio_juliana
npm install
npm run dev
```

**Los cambios no se reflejan:**
- Guarda el archivo (Ctrl + S)
- Actualiza el navegador (F5)
- Verifica que no haya errores en la consola

**Error en el código:**
- Revisa que todas las comillas estén cerradas
- Verifica que las llaves `{}` y corchetes `[]` estén balanceados
- Lee los mensajes de error en la terminal

## 📞 Próximos Pasos

1. ✅ Actualiza tu información de contacto
2. ✅ Personaliza los textos con tu historia
3. ✅ Revisa y ajusta los precios
4. 📸 Agrega fotos de tus productos (próxima actualización)
5. 🌐 Despliega en un hosting (Vercel, Netlify, etc.)

---

¡Tu portafolio está listo para brillar! 🌟✨
