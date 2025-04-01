@echo off
color 0A
echo ---------------------------------------------------
echo 📦 Construction de l'application Angular...
echo ---------------------------------------------------

ng build --output-path=dist --base-href=/trouve-ton-artisan-03/

IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo ❌ Échec du build Angular.
    pause
    exit /b %ERRORLEVEL%
)

echo ---------------------------------------------------
echo 🚀 Déploiement vers GitHub Pages...
echo ---------------------------------------------------

npx angular-cli-ghpages --dir=dist

IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo ❌ Échec du déploiement GitHub Pages.
    pause
    exit /b %ERRORLEVEL%
)

color 0A
echo ---------------------------------------------------
echo ✅ Déploiement terminé avec succès !
echo 🌐 Ton site est disponible à l'adresse :
echo https://stephanenewbievdev.github.io/trouve-ton-artisan-03/
echo ---------------------------------------------------

pause
