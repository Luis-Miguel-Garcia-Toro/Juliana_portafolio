# 🖼️ Guía Rápida - Cambiar o Agregar Imágenes

## 📸 Cómo Cambiar una Imagen de Producto

### Paso 1: Preparar la imagen
1. Asegúrate que tu foto esté bien iluminada y clara
2. Nombre recomendado: igual al nombre del producto
3. Formato: `.jpeg`, `.jpg` o `.png`

### Paso 2: Agregar la imagen a la carpeta public
1. Abre la carpeta: `portafolio_juliana/public/`
2. Copia tu imagen allí
3. Ejemplo: `Cupcakes.jpeg`

### Paso 3: Actualizar el código
Abre el archivo: `src/App.jsx`

Busca el producto en `menuData` (línea ~37) y actualiza la ruta:

```javascript
// Ejemplo: Cambiar imagen de Cupcakes
{ 
  name: 'Cupcakes', 
  price: 3000, 
  image: '/Cupcakes.jpeg'  // ← Cambiar por el nombre de tu archivo
}
```

### Paso 4: Guardar y verificar
1. Guarda el archivo (Ctrl + S)
2. El navegador se actualiza automáticamente
3. Verifica que la imagen se vea bien

---

## ➕ Cómo Agregar un Nuevo Producto

### Ejemplo: Agregar "Brownies"

1. **Prepara la imagen:**
   - Guarda `Brownies.jpeg` en `/public/`

2. **Agrega el producto al menú:**
   
En `src/App.jsx`, busca la categoría correcta y agrega:

```javascript
// En la categoría "dulces":
dulces: [
  { name: 'Cupcakes', price: 3000, image: '/Cupcakes.jpeg' },
  { name: 'Brownies', price: 3500, image: '/Brownies.jpeg' },  // ← NUEVO
  // ... resto de productos
]
```

3. **Guarda y verifica**

---

## 🔄 Reemplazar una Imagen

### Opción 1: Mismo nombre
Si tu nueva foto tiene el mismo nombre, solo:
1. Elimina la imagen antigua de `/public/`
2. Copia la nueva con el mismo nombre
3. Recarga el navegador (F5)

### Opción 2: Nombre diferente
1. Copia la nueva imagen a `/public/`
2. Actualiza el nombre en `src/App.jsx`:
   ```javascript
   image: '/NuevoNombre.jpeg'
   ```
3. (Opcional) Elimina la imagen antigua

---

## 📏 Consejos para Mejores Imágenes

### Tamaño Recomendado:
- **Productos individuales:** 800x800 px (cuadrado)
- **Desayunos:** 1200x800 px (horizontal)

### Calidad:
- ✅ Luz natural o buena iluminación
- ✅ Fondo limpio y simple
- ✅ Producto como protagonista
- ✅ Colores vibrantes y apetitosos

### Optimización:
- 🔧 Comprime las imágenes antes de subirlas
- 🌐 Usa herramientas como [TinyPNG](https://tinypng.com)
- 📉 Mantén el tamaño de archivo bajo (< 200 KB ideal)

---

## 🆕 Agregar Nueva Categoría

Si quieres agregar una nueva categoría (ej: "Tortas para Eventos"):

### 1. Agregar al menuData:

```javascript
const menuData = {
  saludables: [...],
  saladas: [...],
  dulces: [...],
  tortasEventos: [  // ← NUEVA CATEGORÍA
    { 
      name: 'Torta de Chocolate Grande', 
      price: 80000, 
      image: '/TortaChocolate.jpeg' 
    },
    { 
      name: 'Torta de Vainilla Grande', 
      price: 75000, 
      image: '/TortaVainilla.jpeg' 
    }
  ],
  desayunos: [...]
};
```

### 2. Agregar la sección visual:

Copia una sección existente y modifica:

```javascript
{/* Nueva Categoría: Tortas para Eventos */}
<motion.div 
  className="menu-category"
  variants={fadeInUp}
>
  <h3 className="category-title">🎂 Tortas para Eventos</h3>
  <motion.div 
    className="menu-grid"
    variants={staggerContainer}
  >
    {menuData.tortasEventos.map((item, index) => (
      <motion.div 
        key={index}
        className="menu-item"
        variants={scaleIn}
        whileHover={{ scale: 1.05 }}
      >
        {item.image && (
          <div className="item-image-container">
            <img src={item.image} alt={item.name} className="item-image" />
          </div>
        )}
        <h4 className="item-name">{item.name}</h4>
        <p className="item-price">{formatPrice(item.price)}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>
```

---

## ❌ Eliminar un Producto

1. Abre `src/App.jsx`
2. Busca el producto en `menuData`
3. Elimina toda la línea:
   ```javascript
   // ELIMINAR esta línea completa:
   { name: 'Producto a eliminar', price: 3000, image: '/imagen.jpeg' },
   ```
4. Guarda el archivo
5. (Opcional) Elimina la imagen de `/public/`

---

## 🎨 Cambiar Emoji de Categoría

En cada categoría puedes cambiar el emoji:

```javascript
<h3 className="category-title">🥗 Opciones Saludables</h3>
//                              ↑ Cambiar este emoji
```

**Emojis sugeridos:**
- 🧁 🍰 🎂 - Postres
- 🥗 🍎 🍓 - Saludables
- 🥪 🍔 🌮 - Saladas
- ☕ 🥐 🍳 - Desayunos
- 🍪 🍩 🧈 - Dulces

---

## 🔍 Ubicaciones Clave

### Archivo principal:
```
portafolio_juliana/src/App.jsx
```

### Carpeta de imágenes:
```
portafolio_juliana/public/
```

### Línea del menú:
```
Línea ~37 en App.jsx
```

---

## 💡 Atajos Rápidos

### Encontrar un producto en el código:
1. Abre `src/App.jsx`
2. Presiona Ctrl + F (Cmd + F en Mac)
3. Busca el nombre del producto
4. Edita y guarda

### Verificar imágenes en la carpeta:
```bash
cd portafolio_juliana/public
dir  # Windows
ls   # Mac/Linux
```

---

## ⚠️ Problemas Comunes

### La imagen no aparece:
- ✅ Verifica que el nombre del archivo sea exacto (mayúsculas y minúsculas importan)
- ✅ Asegúrate que la imagen esté en `/public/`
- ✅ Verifica que la ruta empiece con `/` (ej: `/imagen.jpeg`)
- ✅ Recarga el navegador con Ctrl + F5

### La imagen se ve distorsionada:
- ✅ Usa imágenes de mejor calidad
- ✅ Respeta las proporciones recomendadas

### El sitio no actualiza:
- ✅ Guarda el archivo (Ctrl + S)
- ✅ Espera unos segundos
- ✅ Recarga el navegador (F5)
- ✅ Verifica que no haya errores en la consola

---

**¡Con esta guía puedes actualizar tus productos e imágenes fácilmente! 📸✨**
