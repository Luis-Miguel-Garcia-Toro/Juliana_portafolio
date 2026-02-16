# 🚀 Guía de Despliegue en GitHub Pages

## ✅ Problema Resuelto

**Problema:** Las imágenes no se veían en GitHub Pages  
**Causa:** Las rutas absolutas (`/imagen.jpeg`) no funcionan en subdirectorios  
**Solución:** Usar `import.meta.env.BASE_URL` para rutas dinámicas

---

## 🔧 Cambios Realizados

### 1. Configuración de Vite
Ya está correctamente configurado en `vite.config.js`:
```javascript
base: '/Juliana_portafolio/'
```

### 2. Rutas de Imágenes Actualizadas
Todas las rutas ahora usan:
```javascript
const baseUrl = import.meta.env.BASE_URL;
image: `${baseUrl}imagen.jpeg`
```

### 3. Archivos Modificados
- ✅ `src/App.jsx` - Rutas de productos y logo navbar
- ✅ `src/components/Loader.jsx` - Logo en pantalla de carga
- ✅ `vite.config.js` - Configuración base

---

## 📦 Cómo Construir para Producción

### 1. Construir el proyecto:
```bash
cd portafolio_juliana
npm run build
```

Esto crea la carpeta `dist/` con todos los archivos optimizados.

### 2. Verificar la carpeta dist:
```bash
dir dist        # Windows
ls dist         # Mac/Linux
```

Deberías ver:
- `index.html`
- Carpeta `assets/` con JS y CSS
- Todas tus imágenes (.jpeg)

---

## 🌐 Desplegar en GitHub Pages

### Opción 1: Despliegue Manual

1. **Copia la carpeta dist:**
   ```bash
   # Después de npm run build
   ```

2. **En tu repositorio de GitHub:**
   - Ve a la rama que uses para GitHub Pages (ej: `gh-pages`)
   - Copia todo el contenido de `dist/` a la raíz
   - Commit y push

3. **Configurar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` (o la que uses)
   - Folder: `/` (root)
   - Save

---

### Opción 2: Despliegue Automático con GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: |
        cd portafolio_juliana
        npm install
        
    - name: Build
      run: |
        cd portafolio_juliana
        npm run build
        
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        folder: portafolio_juliana/dist
        branch: gh-pages
```

---

## ✅ Verificación Post-Despliegue

### 1. Verifica que las rutas sean correctas:
Abre la consola del navegador (F12) en tu sitio:
```
https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/
```

Si ves errores 404, revisa:
- ✅ Las imágenes están en la carpeta `dist/` después del build
- ✅ Los nombres de archivo coinciden (mayúsculas/minúsculas)
- ✅ El `base` en vite.config.js es correcto

### 2. Prueba local del build:
```bash
cd portafolio_juliana
npm run build
npm run preview
```

Abre `http://localhost:4173/Juliana_portafolio/`  
(Nota: incluye `/Juliana_portafolio/` en la URL)

---

## 🔍 Solución de Problemas

### Problema: Imágenes no cargan
**Solución:**
1. Verifica que las imágenes estén en `public/`
2. Construye de nuevo: `npm run build`
3. Verifica que estén en `dist/`
4. Verifica nombres exactos (case-sensitive)

### Problema: Página en blanco
**Solución:**
1. Revisa la consola del navegador (F12)
2. Verifica que `base` en vite.config.js coincida con tu repo
3. Asegúrate de desplegar desde `dist/`, no desde `src/`

### Problema: CSS/JS no cargan
**Solución:**
1. El `base` debe ser: `/nombre-repositorio/`
2. Debe terminar con `/`
3. Debe coincidir exactamente con el nombre del repo

---

## 📂 Estructura Esperada en GitHub Pages

```
Rama: gh-pages (o tu rama de deploy)
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── index-xyz789.css
├── LOGO.jpeg
├── Cupcakes.jpeg
├── empanadas.jpeg
├── Parfait.jpeg
└── ... (todas las demás imágenes)
```

---

## 🎯 URLs Correctas

### Desarrollo:
```
http://localhost:5173/
```

### Producción (GitHub Pages):
```
https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/
```

### Rutas de imágenes en producción:
```
https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/logo.jpeg
https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/Cupcakes.jpeg
```

---

## 📋 Checklist de Despliegue

Antes de desplegar, verifica:

- [ ] `vite.config.js` tiene `base: '/Juliana_portafolio/'`
- [ ] Todas las imágenes están en `portafolio_juliana/public/`
- [ ] Ejecutaste `npm run build`
- [ ] La carpeta `dist/` contiene todas las imágenes
- [ ] `index.html` está en `dist/`
- [ ] GitHub Pages está configurado correctamente
- [ ] La rama de deploy tiene el contenido de `dist/`

---

## 🔄 Flujo Completo de Actualización

1. **Hacer cambios en el código**
2. **Probar localmente:**
   ```bash
   npm run dev
   ```
3. **Construir para producción:**
   ```bash
   npm run build
   ```
4. **Probar el build:**
   ```bash
   npm run preview
   ```
5. **Desplegar a GitHub Pages:**
   - Copia `dist/` a tu rama de GitHub Pages
   - Commit y push

---

## 💡 Tips Importantes

### ✅ DO (Hacer):
- Usa `import.meta.env.BASE_URL` para rutas dinámicas
- Pon todas las imágenes en `public/`
- Construye antes de desplegar
- Prueba con `npm run preview`

### ❌ DON'T (No hacer):
- No uses rutas absolutas como `/imagen.jpeg`
- No olvides el `/` final en `base`
- No despliegues desde `src/`, usa `dist/`
- No cambies `base` sin reconstruir

---

## 🎉 Resultado Esperado

Después de seguir estos pasos:

✅ Tu sitio funciona en: `https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/`  
✅ Todas las imágenes cargan correctamente  
✅ El logo aparece en navbar y carga  
✅ Los productos muestran sus fotos  
✅ El modal funciona perfectamente  
✅ Todo responsive y animado  

---

## 📞 Comandos Rápidos

```bash
# Desarrollo
npm run dev

# Construir
npm run build

# Previsualizar build
npm run preview

# Limpiar y reconstruir
rm -rf dist node_modules
npm install
npm run build
```

---

**¡Tu portafolio KUUK ahora está listo para GitHub Pages! 🎉**

Fecha: 10 de Febrero, 2026
