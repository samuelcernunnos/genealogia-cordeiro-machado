#!/bin/bash
cd /storage/emulated/0/Download/genealogia-cordeiro-machado || exit 1

git add .
git commit -m "Subindo pasta pelo celular" || echo "Nada novo para commitar"
git branch -M main

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin https://github.com/samuelcernunnos/genealogia-cordeiro-machado.git
fi

git push -u origin main
