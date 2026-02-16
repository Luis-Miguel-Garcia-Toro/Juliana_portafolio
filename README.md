# 🧁 Portafolio de Repostería - Juliana

Un hermoso portafolio web para mostrar productos de repostería artesanal, con animaciones modernas y un diseño atractivo.

## ✨ Características

- **Diseño moderno y responsivo**: Funciona perfectamente en todos los dispositivos
- **Animaciones suaves**: Utilizando Framer Motion para transiciones elegantes
- **Paleta de colores pasteles**: Perfecta para un negocio de repostería
- **Secciones organizadas**:
  - Hero con llamado a la acción
  - Sobre Mí
  - Menú completo con categorías:
    - Opciones Saludables
    - Opciones Saladas
    - Opciones Dulces
    - Desayunos Especiales
  - Contacto con enlaces a redes sociales

## 🚀 Tecnologías Utilizadas

- **React 19**: Framework principal
- **Vite**: Build tool rápido y moderno
- **Framer Motion**: Animaciones fluidas
- **React Icons**: Iconos hermosos
- **CSS3**: Estilos personalizados con gradientes y animaciones

## 🛠️ Instalación y Uso

1. **Instalar dependencias**:
```bash
npm install
```

2. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

3. **Construir para producción**:
```bash
npm run build
```

4. **Vista previa de producción**:
```bash
npm run preview
```

## 🎨 Personalización

### Cambiar información de contacto

Edita los enlaces en `src/App.jsx` en la sección de contacto:

```jsx
// WhatsApp
href="https://wa.me/573123456789"

// Instagram
href="https://instagram.com/tu_usuario"

// Email
href="mailto:tu@email.com"
```

### Modificar productos y precios

Los productos están organizados en el objeto `menuData` en `src/App.jsx`. Puedes agregar, eliminar o modificar productos fácilmente.

### Cambiar colores

Los colores están definidos como variables CSS en `src/index.css`:

```css
:root {
  --color-primary: #ff9ec1;
  --color-secondary: #ffcd9e;
  --color-accent: #ffd4f4;
  /* ... más colores */
}
```

## 📱 Responsive

El portafolio está completamente optimizado para:
- 📱 Móviles (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktop (1024px+)

## 🌟 Características Destacadas

- Scroll suave entre secciones
- Efectos hover en tarjetas de productos
- Animaciones al hacer scroll
- Elementos decorativos flotantes
- Scrollbar personalizada
- Gradientes y efectos visuales modernos

## 📄 Licencia

Este proyecto fue creado para uso personal de Juliana - Repostería Artesanal.

---

Hecho con ❤️ y mucho 🍰
