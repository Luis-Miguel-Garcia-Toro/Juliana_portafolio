@echo off
echo ========================================
echo   KUUK - Build para GitHub Pages
echo ========================================
echo.

echo [1/3] Limpiando carpeta dist anterior...
if exist dist rmdir /s /q dist

echo [2/3] Construyendo proyecto...
call npm run build

echo [3/3] Verificando archivos...
if exist dist\index.html (
    echo.
    echo ✅ Build completado exitosamente!
    echo.
    echo Archivos en dist/:
    dir /b dist
    echo.
    echo ========================================
    echo   Ahora puedes:
    echo   1. Copiar todo el contenido de dist/
    echo   2. Pegarlo en tu rama de GitHub Pages
    echo   3. Hacer commit y push
    echo ========================================
    echo.
    echo ¿Quieres previsualizar el build? (S/N)
    set /p preview="Respuesta: "
    if /i "%preview%"=="S" (
        echo.
        echo Iniciando preview...
        call npm run preview
    )
) else (
    echo.
    echo ❌ Error: Build falló
    echo.
)

pause
