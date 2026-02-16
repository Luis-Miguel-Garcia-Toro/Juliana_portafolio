@echo off
chcp 65001 >nul
echo.
echo ╔════════════════════════════════════════╗
echo ║  KUUK - Deploy Automático GitHub      ║
echo ╔════════════════════════════════════════╝
echo.

REM Paso 1: Build
echo [1/5] 🔨 Construyendo proyecto...
call npm run build
if errorlevel 1 (
    echo.
    echo ❌ Error en build
    pause
    exit /b
)

REM Paso 2: Verificar
echo [2/5] ✅ Verificando archivos...
if not exist dist\index.html (
    echo ❌ Error: No se encontró dist\index.html
    pause
    exit /b
)

REM Contar imágenes
set count=0
for %%f in (dist\*.jpeg) do set /a count+=1
echo    ✓ Imágenes encontradas: %count%
if %count% LSS 18 (
    echo ⚠️  ADVERTENCIA: Se esperaban al menos 18 imágenes
)

REM Paso 3: Crear carpeta temporal
echo [3/5] 📁 Preparando carpeta de deploy...
if exist ..\DEPLOY_TEMP (
    echo    Limpiando carpeta anterior...
    rmdir /s /q ..\DEPLOY_TEMP
)
mkdir ..\DEPLOY_TEMP

REM Paso 4: Copiar archivos
echo [4/5] 📋 Copiando archivos...
xcopy dist\* ..\DEPLOY_TEMP\ /E /Y /I /Q >nul

REM Paso 5: Crear instrucciones
echo [5/5] 📝 Creando instrucciones...
(
echo INSTRUCCIONES DE DEPLOY
echo =======================
echo.
echo Tu build está listo en la carpeta: DEPLOY_TEMP
echo.
echo PASOS PARA SUBIR A GITHUB:
echo.
echo 1. Ve a tu repositorio en GitHub
echo 2. Cambia a la rama: gh-pages
echo 3. BORRA todo el contenido actual
echo 4. Sube TODO el contenido de esta carpeta DEPLOY_TEMP
echo 5. Espera 3-5 minutos
echo 6. Visita: https://luis-miguel-garcia-toro.github.io/Juliana_portafolio/
echo.
echo CONTENIDO DE ESTA CARPETA:
dir /b
) > ..\DEPLOY_TEMP\INSTRUCCIONES.txt

echo.
echo ╔════════════════════════════════════════╗
echo ║  ✅ BUILD COMPLETADO                   ║
echo ╚════════════════════════════════════════╝
echo.
echo 📂 Archivos listos en: ..\DEPLOY_TEMP\
echo 📄 Lee: INSTRUCCIONES.txt
echo.
echo Archivos generados:
dir /b ..\DEPLOY_TEMP
echo.
echo ¿Abrir carpeta DEPLOY_TEMP? (S/N)
set /p open="Respuesta: "
if /i "%open%"=="S" explorer ..\DEPLOY_TEMP

echo.
echo ════════════════════════════════════════
echo   ¡Listo para subir a GitHub! 🚀
echo ════════════════════════════════════════
pause
