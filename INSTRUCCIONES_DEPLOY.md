# 🚀 INSTRUCCIONES RÁPIDAS - Desplegar en GitHub Pages

## ✅ Problema Solucionado

Las rutas de las imágenes ahora funcionan correctamente en GitHub Pages.

---

## 🎯 PASOS PARA DESPLEGAR (Método Simple)

### 1️⃣ Construir el Proyecto

Abre la terminal en la carpeta `portafolio_juliana` y ejecuta:

```bash
npm run build
```

O simplemente ejecuta el archivo: `build-and-preview.bat`

---

### 2️⃣ Verificar la Carpeta dist

Después del build, verifica que existe la carpeta `dist/` con:
- ✅ `index.html`
- ✅ Carpeta `assets/` (con archivos .js y .css)
- ✅ Todas tus imágenes (.jpeg)
- ✅ `LOGO.jpeg`

---

### 3️⃣ Desplegar en GitHub

**Opción A - Manual (Recomendado para primera vez):**

1. Ve a tu repositorio de GitHub
2. Cambia a la rama `gh-pages` (o créala si no existe)
3. **Borra todo** el contenido actual de esa rama
4. **Copia TODO** el contenido de la carpeta `dist/`
5. Pega en la raíz de la rama
6. Commit: "Deploy actualizado con imágenes"
7. Push

**Opción B - Desde terminal:**

```bash
# Después de npm run build
cd dist
git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:luis-miguel-garcia-toro/Juliana_portafolio.git main:gh-pages
cd ..
```

---

### 4️⃣ Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. **Source:** Deploy from a branch
4. **Branch:** `gh-pages`
5. **Folder:** `/ (root)`
6. Click **Save**

---

### 5️⃣ Esperar y Verificar

1. GitHub tarda 1-3 minutos en desplegar
2. Ve a: https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/
3. ¡Verifica que todo funcione!

---

## ✅ Checklist Rápido

- [ ] Ejecuté `npm run build`
- [ ] La carpeta `dist/` tiene todas las imágenes
- [ ] Copié TODO el contenido de `dist/` a GitHub
- [ ] Lo copié en la rama `gh-pages`
- [ ] Configuré GitHub Pages
- [ ] Esperé 1-3 minutos
- [ ] Abrí https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/
- [ ] ¡Las imágenes se ven! 🎉

---

## 🔍 Verificación

### ¿Las imágenes no cargan todavía?

1. **Abre la consola del navegador** (F12)
2. **Ve a la pestaña Network**
3. Recarga la página
4. Busca errores 404

### ¿Ves errores 404 en las imágenes?

- Verifica que las imágenes estén en `dist/` después del build
- Verifica que los nombres coincidan exactamente
- Asegúrate de haber copiado TODO de `dist/`, no solo algunos archivos

---

## 💡 Consejos

### Cada vez que hagas cambios:

1. Guarda tus cambios
2. `npm run build`
3. Copia `dist/` a GitHub Pages
4. Espera 1-3 minutos
5. Recarga con Ctrl+Shift+R (forzar recarga)

### Para desarrollo local:

```bash
npm run dev
```
Abre: http://localhost:5173/

### Para probar el build localmente:

```bash
npm run build
npm run preview
```
Abre: http://localhost:4173/Juliana_portafolio/

---

## 🎉 ¡Listo!

Una vez desplegado correctamente:
- ✅ Tu sitio: https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/
- ✅ Todas las imágenes funcionando
- ✅ Logo visible
- ✅ Productos con fotos
- ✅ Todo perfecto

---

## ❓ Ayuda Rápida

**¿No sabes si el build funcionó?**
- Ejecuta `npm run preview` y prueba localmente

**¿Las imágenes no están en dist/?**
- Verifica que estén en la carpeta `public/` antes de hacer build

**¿La página no se actualiza?**
- Espera 3-5 minutos más
- Recarga con Ctrl+Shift+R
- Limpia caché del navegador

---

**¡Tu portafolio KUUK está listo para brillar en internet! 🧁✨**
