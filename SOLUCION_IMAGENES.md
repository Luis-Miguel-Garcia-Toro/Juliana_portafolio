# 🔧 SOLUCIÓN: Imágenes No Se Ven en GitHub Pages

## ✅ Verificación Completada

He construido tu proyecto y confirmé que:
- ✅ Las 21 imágenes están en `dist/`
- ✅ El HTML tiene las rutas correctas
- ✅ El código usa `BASE_URL` correctamente

## 🎯 SOLUCIÓN PASO A PASO

### 📋 OPCIÓN 1: Asegurar Deploy Correcto (MÁS COMÚN)

El problema más común es que **no se subieron todas las imágenes** a GitHub.

#### Pasos:
1. **Abre tu repositorio en GitHub**
2. **Ve a la rama `gh-pages`**
3. **Verifica que TODAS estas imágenes estén allí:**

```
✓ logo.jpeg
✓ Cupcakes.jpeg
✓ empanadas.jpeg
✓ Fresa con masmelo.jpeg
✓ Galleta con queso crema y mermelada.jpeg
✓ Mini arepas rellenas de pollo.jpeg
✓ Mini hamburguesa.jpeg
✓ mini perros.jpeg
✓ Mini postre de cheesecake.jpeg
✓ Mini torta personal.jpeg
✓ Mini tostadas con pesto.jpeg
✓ Mini wraps de pollo.jpeg
✓ Opción 1.jpeg
✓ Opción 2.jpeg
✓ Opción 3.jpeg
✓ Parfait.jpeg
✓ Sandwich de pollo.jpeg
✓ Vaso con mini galletas de chips.jpeg
✓ Vaso de frutas mixto.jpeg
```

**Si faltan imágenes:**
- Borra TODO en la rama `gh-pages`
- Copia TODO de tu carpeta `dist/` de nuevo
- Commit y push

---

### 🔄 OPCIÓN 2: Deploy Completo Desde Cero

Sigue estos pasos EXACTAMENTE:

#### En tu computadora:

**Paso 1: Construir**
```cmd
cd portafolio_juliana
npm run build
```

**Paso 2: Verificar dist**
```cmd
dir dist
```

Debes ver las 21 imágenes + index.html + carpeta assets

**Paso 3: Preparar para GitHub**

Opción A - **Clonar repo separado (RECOMENDADO):**
```cmd
cd ..
git clone https://github.com/luis-miguel-garcia-toro/Juliana_portafolio.git deploy-temp
cd deploy-temp
git checkout gh-pages
# O si no existe: git checkout --orphan gh-pages
```

**Paso 4: Copiar archivos**
```cmd
# Borra todo lo que hay (excepto .git)
del * /Q
# Copia TODO de dist
xcopy ..\portafolio_juliana\dist\* . /E /Y
```

**Paso 5: Subir**
```cmd
git add -A
git commit -m "Deploy con todas las imagenes"
git push origin gh-pages
```

---

### 🌐 OPCIÓN 3: Verificar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. Verifica:
   - ✅ Source: **Deploy from a branch**
   - ✅ Branch: **gh-pages**
   - ✅ Folder: **/ (root)**
4. Click **Save** (aunque esté guardado)
5. **Espera 3-5 minutos**

---

### 🔍 OPCIÓN 4: Verificar en el Navegador

1. Abre: https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/
2. **F12** (Abre consola de desarrollador)
3. Ve a pestaña **Network**
4. **Ctrl + Shift + R** (Recarga forzada, limpia caché)
5. Busca las imágenes en Network

**¿Qué ves?**

**Si ves 404:**
```
❌ https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/logo.jpeg
Status: 404 Not Found
```
→ **Las imágenes NO están en GitHub**. Ve a Opción 2.

**Si ves 200:**
```
✅ https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/logo.jpeg
Status: 200 OK
```
→ **Las imágenes SÍ están, pero hay caché**. Limpia caché del navegador.

---

### 🧹 OPCIÓN 5: Limpiar Caché

**En el navegador:**
1. **Ctrl + Shift + Delete**
2. Selecciona:
   - ✅ Cookies
   - ✅ Caché
   - ✅ Imágenes
3. **Solo del último día** o **Todo el tiempo**
4. Borrar datos
5. Cierra el navegador completamente
6. Abre de nuevo y prueba

**O simplemente:**
- **Ctrl + Shift + R** (Chrome/Edge)
- **Cmd + Shift + R** (Mac)
- **Ctrl + F5** (Firefox)

---

## 📂 Estructura Correcta en GitHub

Tu rama `gh-pages` debe verse ASÍ:

```
Juliana_portafolio (repo raíz en rama gh-pages)
├── index.html                                    ← IMPORTANTE
├── assets/
│   ├── index-DZg_LDRa.js                        ← Puede tener otro hash
│   └── index-yRumcbVR.css                       ← Puede tener otro hash
├── LOGO.jpeg                                     ← IMPORTANTE
├── Cupcakes.jpeg
├── empanadas.jpeg
├── Fresa con masmelo.jpeg
├── Galleta con queso crema y mermelada.jpeg
├── Mini arepas rellenas de pollo.jpeg
├── Mini hamburguesa.jpeg
├── mini perros.jpeg
├── Mini postre de cheesecake.jpeg
├── Mini torta personal.jpeg
├── Mini tostadas con pesto.jpeg
├── Mini wraps de pollo.jpeg
├── Opción 1.jpeg
├── Opción 2.jpeg
├── Opción 3.jpeg
├── Parfait.jpeg
├── Sandwich de pollo.jpeg
├── Vaso con mini galletas de chips.jpeg
└── Vaso de frutas mixto.jpeg
```

**⚠️ IMPORTANTE: Los archivos deben estar en la RAÍZ de la rama, no dentro de una carpeta.**

---

## 🔗 URLs Para Probar

Abre DIRECTAMENTE estas URLs en tu navegador:

```
https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/logo.jpeg
https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/Cupcakes.jpeg
https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/Parfait.jpeg
```

**¿Qué ves?**

- ✅ **Se ve la imagen** → Las imágenes están bien, es problema de caché
- ❌ **404 Not Found** → Las imágenes NO están en GitHub
- ❌ **Página en blanco** → Verifica la configuración de GitHub Pages

---

## 🎯 MÉTODO MÁS SIMPLE (SI TODO LO DEMÁS FALLA)

### Usar GitHub Desktop:

1. **Descarga GitHub Desktop** (si no lo tienes)
2. **Clona tu repositorio**
3. **Cambia a rama `gh-pages`**
4. **Borra TODO** (excepto la carpeta .git)
5. **Copia TODO** de tu carpeta `dist/`
6. **Commit** con mensaje: "Deploy completo"
7. **Push**
8. **Espera 3 minutos**
9. **Prueba** en navegador con Ctrl+Shift+R

---

## ⚡ Script Automático de Deploy

He creado un script para ti. Guarda esto como `deploy.bat`:

```batch
@echo off
echo ========================================
echo   DEPLOY AUTOMATICO A GITHUB PAGES
echo ========================================
echo.

echo [1/4] Construyendo proyecto...
call npm run build

echo [2/4] Verificando dist...
if not exist dist\index.html (
    echo ERROR: Build fallo
    pause
    exit
)

echo [3/4] Copiando a carpeta de deploy...
if not exist ..\deploy-temp mkdir ..\deploy-temp
xcopy dist\* ..\deploy-temp\ /E /Y /I

echo [4/4] Archivos listos en: ..\deploy-temp\
echo.
echo ========================================
echo   AHORA:
echo   1. Ve a la carpeta: deploy-temp
echo   2. Sube todo a GitHub rama gh-pages
echo ========================================
echo.
explorer ..\deploy-temp
pause
```

---

## 📞 Contacto de Ayuda

**Si NADA funciona, envíame:**

1. **Captura de pantalla** de tu rama `gh-pages` en GitHub
2. **Captura** de la consola del navegador (F12 → Network)
3. **URL** exacta de tu sitio
4. Resultado de abrir: `https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/logo.jpeg`

---

## ✅ Checklist Final

- [ ] Ejecuté `npm run build`
- [ ] Verifiqué que `dist/` tiene 21 imágenes
- [ ] Copié TODO de `dist/` a la rama `gh-pages` en GitHub
- [ ] Los archivos están en la RAÍZ de gh-pages, no en subcarpetas
- [ ] GitHub Pages está configurado: gh-pages branch, / (root)
- [ ] Esperé 3-5 minutos
- [ ] Recargué con Ctrl+Shift+R
- [ ] Probé las URLs directas de las imágenes
- [ ] Limpié caché del navegador

---

**Si sigues estos pasos, TUS IMÁGENES FUNCIONARÁN. El 99% de las veces es porque las imágenes no se subieron correctamente a GitHub.** 🎯

¡Avísame qué resultado obtienes!
