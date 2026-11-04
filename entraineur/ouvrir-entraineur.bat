@echo off
rem Windows : double-clic pour lancer le serveur local de l'entraineur et ouvrir le navigateur.
rem Fermer cette fenetre arrete le serveur.
cd /d "%~dp0"
where py >nul 2>nul && (py -3 serveur.py & goto :fin)
where python >nul 2>nul && (python serveur.py & goto :fin)
echo Python 3 est introuvable. Installe-le depuis https://www.python.org/downloads/ (coche "Add python.exe to PATH"), puis relance ce fichier.
echo Python 3 not found. Install it from https://www.python.org/downloads/ (tick "Add python.exe to PATH"), then run this file again.
pause
:fin
