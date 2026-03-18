@echo off
echo =========================================================
echo  Iniciando tu Servidor Local para Aprender Fullstack...
echo =========================================================
echo.
echo  Manten esta ventana abierta mientras estudias.
echo  Si la cierras, la pagina web dejara de funcionar.
echo.
echo  Abriendo tu navegador en 3 segundos...
timeout /t 3 /nobreak >nul
start http://localhost:8000/videosestudos/espaciodeestudos.html
python -m http.server 8000
