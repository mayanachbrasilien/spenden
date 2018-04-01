# maya-website

[Latest live version](https://mayanachbrasilien.github.io/spenden/index.html)

## Project bauen

- `cmd` öffnen
- `cd Desktop\website`
- `npm run build`

## Project öffnen

- Auf dem Desktop den Ordner `website` öffnen
- `index.html` im Browser öffnen

## Bearbeiten der Dateien

- `VSCode` öffnen
- Ordner öffnen: `website`
- Zum bearbeiten des HTML code: index.pug
- Zum bearbeiten der Styles: style.scss
- Speichern mit Strg+S
- Browser neuladen mit F5

## Änderungen hochladen

Im Ordner `Desktop/website`:

- Öffnen der Console `Strg - j`
- Beenden des Build prozesses mit `Strg - c`
- `git add *`
- `git commit -m"Beschreibung der Änderung"`
- `git push origin master`

## Site Hosting

**Github:**

Schema: `www.github.io/<username>/<title>`

Example: `www.github.io/maya00/website`

**Surge:**

Schema: `www.<title>.surge.sh`

Example: `www.maya-website.surge.sh`
