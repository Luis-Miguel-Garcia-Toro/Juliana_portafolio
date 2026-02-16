# ✅ Checklist de Personalización

## 📋 Usa esta lista para personalizar tu portafolio

### 🎯 Información Básica

- [ ] **Actualizar título del navegador**
  - Archivo: `index.html` (línea 12)
  - Cambiar: `<title>Juliana - Repostería Artesanal</title>`

- [ ] **Nombre del negocio en el navbar**
  - Archivo: `src/App.jsx` (línea ~160)
  - Personalizar el texto "Juliana"

### 📞 Información de Contacto

- [ ] **Número de WhatsApp**
  - Archivo: `src/App.jsx` (línea ~400)
  - Formato: `https://wa.me/57TUNUMERO` (sin espacios ni guiones)
  - Ejemplo: `https://wa.me/573001234567`

- [ ] **Usuario de Instagram**
  - Archivo: `src/App.jsx` (línea ~407)
  - Cambiar: `juliana_reposteria` por tu usuario real

- [ ] **Correo electrónico**
  - Archivo: `src/App.jsx` (línea ~420)
  - Cambiar: `juliana@reposteria.com` por tu email

### 🍰 Productos y Precios

- [ ] **Opciones Saludables**
  - Archivo: `src/App.jsx` (línea ~38)
  - Agregar/eliminar/modificar productos

- [ ] **Opciones Saladas**
  - Archivo: `src/App.jsx` (línea ~42)
  - Revisar precios y nombres

- [ ] **Opciones Dulces**
  - Archivo: `src/App.jsx` (línea ~51)
  - Actualizar mini torta personal ($25,000)
  - Revisar todos los precios

- [ ] **Desayunos**
  - Archivo: `src/App.jsx` (línea ~60)
  - Verificar combos y precios
  - Ajustar opciones según lo que ofrezcas

### ✍️ Textos Personales

- [ ] **Título principal (Hero)**
  - Archivo: `src/App.jsx` (línea ~194)
  - Puedes cambiarlo por tu nombre o mantener "Repostería Artesanal"

- [ ] **Subtítulo Hero**
  - Archivo: `src/App.jsx` (línea ~197)
  - Personalizar "Endulzando momentos especiales"

- [ ] **Descripción Hero**
  - Archivo: `src/App.jsx` (línea ~200)
  - Escribir tu mensaje personalizado

- [ ] **Sección "Sobre Mí"**
  - Archivo: `src/App.jsx` (líneas ~240-255)
  - Contar tu historia real
  - Agregar tu experiencia
  - Mencionar qué te hace especial

### 📊 Estadísticas

- [ ] **Actualizar números**
  - Archivo: `src/components/Stats.jsx` (línea ~8)
  - Calificación actual
  - Número real de clientes
  - Pedidos entregados
  - Años de experiencia

### 🎨 Diseño Visual (Opcional)

- [ ] **Colores del tema**
  - Archivo: `src/index.css` (línea ~7)
  - Cambiar colores si lo deseas
  - Los actuales son perfectos para repostería

- [ ] **Tiempo de carga inicial**
  - Archivo: `src/App.jsx` (línea ~31)
  - Ajustar timeout de 2000ms (2 segundos) si quieres

### 🖼️ Futuras Mejoras (Próximamente)

- [ ] **Agregar fotos de productos**
  - Toma fotos profesionales de tus productos
  - Guárdalas en `src/assets/`
  - Las agregaremos después

- [ ] **Logo personalizado**
  - Diseña o encarga un logo
  - Reemplazar el icono de cupcake

- [ ] **Galería de Instagram**
  - Integrar feed de Instagram
  - Mostrar fotos recientes

### 🧪 Pruebas

- [ ] **Probar en diferentes navegadores**
  - Chrome ✓
  - Firefox ✓
  - Safari ✓
  - Edge ✓

- [ ] **Probar en dispositivos**
  - Computadora ✓
  - Tablet ✓
  - Celular ✓

- [ ] **Verificar todos los enlaces**
  - WhatsApp abre correctamente
  - Instagram abre tu perfil
  - Email abre cliente de correo
  - Navegación entre secciones funciona

- [ ] **Scroll suave**
  - Click en menú navega correctamente
  - Botón "Ver Menú" funciona
  - Botón scroll to top aparece y funciona

### 📱 Antes de Compartir

- [ ] **Verificar ortografía**
  - Revisar todos los textos
  - Sin errores de escritura

- [ ] **Precios actualizados**
  - Todos los precios son correctos
  - Formato de moneda correcto ($X,XXX)

- [ ] **Información de contacto verificada**
  - Número de WhatsApp correcto
  - Usuario de Instagram correcto
  - Email funcional

### 🚀 Listo para Publicar

- [ ] **Construir versión de producción**
  ```bash
  npm run build
  ```

- [ ] **Elegir plataforma de hosting**
  - Vercel (recomendado)
  - Netlify
  - GitHub Pages
  - Otro

- [ ] **Desplegar**
  - Seguir guía en DESPLIEGUE.md

- [ ] **Obtener URL final**
  - Copiar tu URL
  - Guardarla para compartir

- [ ] **Compartir con el mundo**
  - Instagram Stories
  - WhatsApp Status
  - Facebook
  - Con tus clientes

---

## 📝 Notas Importantes

### Formato de Precios
Los precios se muestran automáticamente en formato colombiano:
- 2500 → $2.500
- 25000 → $25.000

### Guardar Cambios
Después de cada cambio:
1. Guarda el archivo (Ctrl + S)
2. El navegador se actualiza automáticamente
3. Verifica que se vea bien

### Agregar Nuevos Productos

Para agregar un producto nuevo:

```javascript
// En la categoría correspondiente:
{ name: 'Nombre del producto', price: 3000 }

// Con descripción:
{ name: 'Producto especial', price: 5000, description: 'Info adicional' }
```

### Agregar Nueva Categoría

Si quieres agregar una nueva categoría (ej: "Tortas Grandes"):

```javascript
// En menuData:
tortasGrandes: [
  { name: 'Torta de chocolate', price: 50000 },
  { name: 'Torta de vainilla', price: 45000 }
]

// Luego en el JSX agregar la sección
```

---

## 🎉 ¡Felicitaciones!

Cuando completes todos los items, tendrás un portafolio profesional y personalizado listo para atraer clientes.

**Consejo Final:** Ve paso a paso, sin prisa. Cada cambio que hagas hazlo con cuidado y verifica que se vea bien antes de continuar.

¡Mucho éxito con tu negocio! 🧁✨🎂
