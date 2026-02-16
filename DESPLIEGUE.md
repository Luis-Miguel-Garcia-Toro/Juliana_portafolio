# 🌐 Guía de Despliegue

## Opciones para Publicar tu Portafolio en Internet

### 1. 🚀 Vercel (Recomendado - GRATIS)

Vercel es perfecto para proyectos React y es totalmente gratuito.

**Pasos:**

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Desde la carpeta del proyecto:
   ```bash
   cd portafolio_juliana
   vercel
   ```
4. Sigue las instrucciones en pantalla
5. ¡Tu sitio estará en línea en minutos!

**Ventajas:**
- ✅ Gratis
- ✅ HTTPS automático
- ✅ Dominio gratuito (.vercel.app)
- ✅ Actualizaciones automáticas desde Git
- ✅ Muy rápido

---

### 2. 🎯 Netlify (GRATIS)

Otra excelente opción gratuita.

**Pasos:**

1. Construye tu proyecto:
   ```bash
   cd portafolio_juliana
   npm run build
   ```

2. Opción A - Arrastra y suelta:
   - Ve a [netlify.com](https://www.netlify.com)
   - Arrastra la carpeta `dist` a Netlify Drop

3. Opción B - Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

**Ventajas:**
- ✅ Gratis
- ✅ Fácil de usar
- ✅ Dominio gratuito (.netlify.app)
- ✅ HTTPS automático

---

### 3. 📦 GitHub Pages (GRATIS)

Ideal si usas GitHub.

**Pasos:**

1. Instala gh-pages:
   ```bash
   cd portafolio_juliana
   npm install --save-dev gh-pages
   ```

2. Agrega a `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/portafolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Configura `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/portafolio/',  // nombre de tu repo
     plugins: [react()],
   })
   ```

4. Despliega:
   ```bash
   npm run deploy
   ```

**Ventajas:**
- ✅ Gratis
- ✅ Integrado con GitHub
- ✅ Fácil de mantener

---

### 4. 🔵 Azure Static Web Apps (GRATIS)

Microsoft ofrece hosting gratuito.

**Pasos:**

1. Crea cuenta en [Azure](https://azure.microsoft.com)
2. Crea un "Static Web App"
3. Conecta tu repositorio de GitHub
4. Azure hará el deploy automáticamente

**Ventajas:**
- ✅ Gratis (100 GB ancho de banda)
- ✅ Integración con GitHub Actions
- ✅ API incluida

---

### 5. 🌍 Cloudflare Pages (GRATIS)

Rápido y confiable.

**Pasos:**

1. Cuenta en [Cloudflare Pages](https://pages.cloudflare.com)
2. Conecta tu repositorio Git
3. Configuración:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy automático

**Ventajas:**
- ✅ Gratis ilimitado
- ✅ CDN global incluido
- ✅ Muy rápido

---

## 📝 Checklist Antes de Desplegar

Antes de publicar, asegúrate de:

- [ ] Actualizar toda tu información de contacto
- [ ] Revisar que todos los precios sean correctos
- [ ] Verificar que todos los enlaces funcionen
- [ ] Personalizar textos con tu historia
- [ ] Probar en diferentes dispositivos (móvil, tablet, desktop)
- [ ] Revisar que no haya errores en la consola

## 🔧 Construir para Producción

Antes de desplegar en cualquier plataforma:

```bash
cd portafolio_juliana
npm run build
```

Esto creará una carpeta `dist/` optimizada para producción.

## 🌟 Dominio Personalizado (Opcional)

Si quieres tu propio dominio (ej: julianareposteria.com):

1. **Compra un dominio:**
   - [Namecheap](https://www.namecheap.com) (~$10/año)
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)

2. **Configura el dominio:**
   - En tu plataforma de hosting (Vercel/Netlify)
   - Ve a "Domains" o "Custom Domain"
   - Sigue las instrucciones para conectar tu dominio

3. **Espera la propagación:**
   - Puede tomar de 1-48 horas

## 🎨 Optimizaciones Recomendadas

### Antes de producción:

1. **Comprime imágenes** (cuando las agregues):
   - Usa [TinyPNG](https://tinypng.com)
   - Formato WebP para web

2. **SEO Básico:**
   Agrega a `index.html`:
   ```html
   <meta name="description" content="Repostería artesanal - Juliana. Postres, desayunos y más, hechos con amor.">
   <meta name="keywords" content="repostería, postres, cupcakes, desayunos, Juliana">
   ```

3. **Favicon:**
   - Agrega un icono personalizado en `public/`
   - Actualiza la referencia en `index.html`

## 📊 Analytics (Opcional)

Para saber cuánta gente visita tu sitio:

### Google Analytics:
1. Crea cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu ID de seguimiento
3. Agrega a `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
   ```

## 🆘 Soporte

Si tienes problemas:
- 📖 Lee la documentación de la plataforma elegida
- 💬 Busca en Stack Overflow
- 🔍 Revisa los logs de error en la consola

## 🎉 ¡Listo!

Una vez desplegado, comparte tu portafolio en:
- Instagram Stories
- WhatsApp Status
- Facebook
- ¡Con todos tus clientes!

---

**Recomendación Final:** Empieza con Vercel, es la opción más simple y rápida. Solo toma 5 minutos.

¡Éxito con tu negocio! 🧁✨
