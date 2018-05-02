# mayanachbrasilien/spenden

[Link zur Online Version](https://mayanachbrasilien.github.io/spenden/de.html)

## Bearbeiten der Website

- `VSCode`/`Visual Studio Code` öffnen
- Explorer Menü öffnen `Strg + Shift + e`
- Ordner öffnen: `Desktop/website`
- Console mit `Strg + j` öffnen
- Aktuellen Stand herunterladen mit `git pull origin master` ❌ WICHTIG
- Projekt bauen mit `npm run build`
- Nun die lokale Version der Website unter folgendem Pfad öffnen: `Dektop/website/de.html`
- Speichern mit `Strg + S`
- Browser neuladen mit F5

## Texte

Die Texte befinden sich in den Dateien `_de.pug` und `_en.pug` im Ordner `src/mixins`.

## Änderungen hochladen

- Öffnen der Console `Strg + j`
- Beenden des Build prozesses mit `Strg + c`, `Batchvorgang beenden` mit `j` bestätigen
- `git add *`
- `git commit -m"Beschreibung der änderung"`
- `git push origin master`
