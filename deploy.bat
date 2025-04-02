@echo off
echo 📦 Suppression de l'ancien dossier docs...
rmdir /s /q docs

echo ⚙️ Construction du projet Angular...
ng build --output-path=dist/trouve-ton-artisan-03

echo 📁 Copie des fichiers générés dans docs...
xcopy dist\trouve-ton-artisan-03 docs /E /I /Y

echo 📄 Duplication index.html → 404.html...
copy docs\index.html docs\404.html

echo 🚀 Déploiement terminé. Tu peux vérifier ici :
echo https://stephanenewbiedev.github.io/trouve-ton-artisan-03/
pause
