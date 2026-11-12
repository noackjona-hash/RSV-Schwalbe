# Anleitung zur unabhängigen Inhaltspflege (CMS & Datenstruktur)

Diese Website ist so aufgebaut, dass der **RSV „Schwalbe" Ellmendingen e. V.** sämtliche regelmäßigen Inhalte (Berichte, Veranstaltungen) sowie Stammdaten (Trainingszeiten, Kontaktdaten, Beiträge, Fahrer, Sponsoren) **komplett unabhängig von einem Entwickler** pflegen kann.

Es gibt dafür **zwei komfortable Wege**:

---

## Option 1: Visuelles Web-CMS im Browser (`/admin`)

Unter der Adresse `https://ihre-domain.de/admin/` (bzw. lokal unter `http://localhost:4321/admin/`) ist ein modernes, leichtgewichtiges Redaktionssystem (**Sveltia / Decap CMS**) integriert.

- **Funktionen:**
  - **Vereinsberichte erstellen & bearbeiten:** Titel, Datum, Kategorie, Vorschaubild, Bildergalerie (mehrere Fotos hochladen) und Text in einem gewohnten Editor eingeben.
  - **Veranstaltungen & Termine pflegen:** Neue Termine für die Startseite und Veranstaltungsübersicht anlegen.
  - **Trainingszeiten, Kontaktdaten & Vorstand ändern:** Direkt über Formularfelder anpassen, ohne HTML-Code zu berühren.

---

## Option 2: Direkte Pflege über Markdown- & JSON-Dateien

Alle Inhalte sind strikt vom Design-Code getrennt:

### 1. Neue Berichte hinzufügen (`src/content/berichte/`)
Jeder Bericht ist eine einfache `.md`-Datei im Ordner `src/content/berichte/`.
Beispiel (`src/content/berichte/mein-neuer-bericht.md`):

```markdown
---
title: "Erfolgreiches Rennen in Ellmendingen"
date: "2026-11-15"
dateDisplay: "15. November 2026"
category: "Radsport"
excerpt: "Kurze Zusammenfassung für die Übersichtsseite."
thumbnail: "/blog/images/mein-foto.jpg"
images:
  - src: "/blog/images/mein-foto.jpg"
    alt: "Beschreibung des Fotos"
showInOverview: true
showOnHome: true
---

Hier steht der eigentliche Text des Berichts. Absätze werden einfach durch eine Leerzeile getrennt.

> Zitate (wie im Bericht von Paul Kuhn) beginnen einfach mit einem `>` Zeichen.
```

### 2. Veranstaltungen verwalten (`src/content/veranstaltungen/`)
Termine liegen als `.md`-Dateien in `src/content/veranstaltungen/` und erscheinen automatisch sortiert auf der Startseite und unter `/veranstaltungen`.

### 3. Trainingszeiten, Vorstand, Beiträge & Sponsoren (`src/data/`)
- **`src/data/training.json`**: Sommer- und Wintertrainingszeiten sowie Treffpunkt.
- **`src/data/verein.json`**: Vereinsadresse, E-Mail, Vorstand, Mitgliedsbeiträge und externe Links.
- **`src/data/fahrer.json`**: Fahrer-Kader nach Lizenzklassen.
- **`src/data/sponsoren.json`**: Sponsoren-Logos, Links und Anzeige auf der Startseite (`"showOnHome": true`).
- **`src/data/galerie.json`**: Bilder für die Startseite und die Galerie-Unterseite (`/bilder`).
