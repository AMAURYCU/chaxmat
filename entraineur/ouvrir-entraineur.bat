@echo off
rem Windows : double-clic pour lancer le serveur local de l'entraineur et ouvrir le navigateur.
rem Fermer cette fenetre arrete le serveur. Dependances : requirements.txt, a la racine du depot.
setlocal
cd /d "%~dp0"

if not exist "serveur.py" goto :introuvable
if not exist "app\index.html" goto :introuvable

rem Un Python convient s'il est en version 3.7 ou plus et s'il a les modules dont
rem serveur.py a besoin. Le test affiche les modules manquants et sort avec
rem 0 (bon), 3 (trop ancien) ou 4 (incomplet). Il tourne aussi sous Python 2.
set "VERIF=import sys; v=sys.version_info; sys.exit(3) if v < (3, 7) else 0; import importlib.util as u; m=[x for x in ('http', 'socketserver', 'json', 'socket', 'threading', 'webbrowser', 'urllib') if u.find_spec(x) is None]; print(', '.join(m)); sys.exit(4 if m else 0)"

set "PY="
set "VIEUX="
set "INCOMPLET="
call :essayer py -3
if not defined PY call :essayer python
if not defined PY call :essayer python3
if defined PY goto :lancer
if defined INCOMPLET goto :incomplet
if defined VIEUX goto :ancien
goto :absent

:essayer
%* -c "%VERIF%" >nul 2>nul
set "RC=%errorlevel%"
if "%RC%"=="0" set "PY=%*"
if "%RC%"=="3" if not defined VIEUX set "VIEUX=%*"
if "%RC%"=="4" if not defined INCOMPLET set "INCOMPLET=%*"
exit /b 0

:lancer
echo Demarrage de l'entraineur avec %PY%... / Starting Chess Coach with %PY%...
%PY% serveur.py
if errorlevel 1 pause
exit /b

:incomplet
echo ------------------------------------------------------------------
echo Python est installe, mais incomplet. Modules manquants / Missing modules :
%INCOMPLET% -c "%VERIF%" 2>nul
echo.
echo Reinstalle Python depuis https://www.python.org/downloads/ en cochant
echo "Add python.exe to PATH", puis relance ce fichier.
echo.
echo Python is installed but incomplete. Reinstall it from
echo https://www.python.org/downloads/ and tick "Add python.exe to PATH",
echo then run this file again.
goto :erreur

:ancien
echo ------------------------------------------------------------------
echo Python est trop ancien / Python is too old :
%VIEUX% --version 2>&1
echo.
echo Il faut Python 3.7 ou plus recent. Installe la derniere version depuis
echo https://www.python.org/downloads/ en cochant "Add python.exe to PATH",
echo puis relance ce fichier.
echo.
echo Python 3.7 or later is required. Install the latest version from
echo https://www.python.org/downloads/ and tick "Add python.exe to PATH",
echo then run this file again.
goto :erreur

:absent
echo ------------------------------------------------------------------
echo Python 3 est introuvable. Installe-le depuis https://www.python.org/downloads/
echo en cochant "Add python.exe to PATH", puis relance ce fichier.
echo.
echo Python 3 not found. Install it from https://www.python.org/downloads/
echo and tick "Add python.exe to PATH", then run this file again.
goto :erreur

:introuvable
echo ------------------------------------------------------------------
echo serveur.py ou app\index.html est introuvable : ce fichier doit rester dans
echo le dossier entraineur, a cote de serveur.py et du dossier app.
echo.
echo serveur.py or app\index.html is missing: this file must stay in the
echo entraineur folder, next to serveur.py and the app folder.
goto :erreur

:erreur
echo ------------------------------------------------------------------
pause
exit /b 1
