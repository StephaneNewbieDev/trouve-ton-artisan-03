@echo off
color 0A
echo ---------------------------------------------------
echo 📦 BUILD ANGULAR (production)
echo ---------------------------------------------------

ng build --configuration=production --base-href=/trouve-ton-artisan-03/

IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo ❌ ÉCHEC DU BUILD ANGULAR.
    pause
    exit /b %ERRORLEVEL%
)

echo ---------------------------------------------------
echo 🚀 DÉPLOIEMENT SUR GITHUB PAGES
echo ---------------------------------------------------

npx angular-cli-ghpages --dir=dist

IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo ❌ ÉCHEC DU DÉPLOIEMENT GITHUB PAGES.
    pause
    exit /b %ERRORLEVEL%
)

color 0A
echo ---------------------------------------------------
echo ✅ SITE EN LIGNE !
echo 🌐 https://stephanenewbievdev.github.io/trouve-ton-artisan-03/
echo ---------------------------------------------------

pause
