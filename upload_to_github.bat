@echo off
echo ===================================================
echo   Game Roulette - GitHub Upload Script (Versie 0.5)
echo ===================================================

:: 1. Controleer of Git werkt
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [FOUT] Git is niet geinstalleerd of niet gevonden!
    pause
    exit /b
)

:: 2. Initialiseer de lokale repository
if not exist ".git" (
    echo [INFO] Git repository initialiseren...
    git init
    git branch -m main
)

:: 3. Controleer de Remote
git remote -v | find "origin" >nul 2>&1
if %errorlevel% neq 0 goto ask_remote
goto do_checkout

:ask_remote
echo [INFO] Er is nog geen GitHub repository gekoppeld.
set /p REMOTE_URL="Voer je GitHub URL in (bijv. https://github.com/JouwNaam/GameRoulette.git): "
git remote add origin "%REMOTE_URL%"

:do_checkout
:: 4. Switch over naar 'Versie 0.5' branch
echo [INFO] Switchen naar branch 'Versie_0.5'...
git checkout -b "Versie_0.5" 2>nul || git checkout "Versie_0.5"

:: 5. Stage de bestanden
echo [INFO] Bestanden klaarzetten voor verzending...
git add .

:: 6. Commit de voortgang
set timestamp=%date% %time%
echo [INFO] Opslaan met stempel: %timestamp%
git commit -m "Auto-Upload: Versie 0.5 voortgang - %timestamp%"

:: 7. Force Push naar GitHub
echo [INFO] Push naar GitHub (Branch: Versie_0.5)...
git push --force origin "Versie_0.5"

echo ===================================================
echo   Upload Voltooid!
echo ===================================================
pause
