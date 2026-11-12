# RSV „Schwalbe" Ellmendingen e. V. – Website (Astro Prototyp)

Moderne, schnelle und DSGVO-konforme Vereinswebsite für den **RSV „Schwalbe" Ellmendingen e. V.**, umgesetzt mit [Astro](https://astro.build/) auf Basis des neuen Corporate Designs.

## Highlights & Architektur

- **Corporate Design (2026):**
  - **Farbpalette:** Slate-Grautöne (`#0F172A`, `#475569`, `#F8FAFC`) kombiniert mit den Vereins-Akzentfarben **Pink (`#FA006C`)** und **Gelb (`#FFE940`)**.
  - **Typografie (100 % DSGVO-konform lokal eingebunden):**
    - `Zalando Sans` (Regular 400 & SemiBold 600) für Fließtext, Navigation und Buttons.
    - `Zalando Sans Expanded` (SemiBold 600) für Überschriften (`h1–h6`) und Vereinsnamen.
    - Keine externen Anfragen an Google-Server (`fonts.googleapis.com` / `fonts.gstatic.com`).
  - **Kein Dark Mode:** Konsistente helle Darstellung gemäß Corporate-Design-Vorgabe.
- **Unabhängige Inhaltspflege (CMS & strukturierte Daten):**
  - **Berichte & Veranstaltungen:** Über Astro Content Collections (`src/content/berichte/` & `src/content/veranstaltungen/`) in einfachem Markdown pflegbar.
  - **Stammdaten (Trainingszeiten, Sponsoren, Fahrer, Beiträge, Kontakt):** Übersichtlich ausgelagert in JSON-Dateien unter `src/data/`.
  - **Visuelles Web-CMS (`/admin`):** Vorkonfiguriert für Sveltia CMS / Decap CMS (`public/admin/config.yml`), sodass Redakteure Berichte, Bilder, Termine und Trainingszeiten direkt im Browser ohne Programmierkenntnisse bearbeiten können.
- **Mobile-First & Performance:**
  - Statische Seitengenerierung (SSG) mit Astro für minimale Ladezeiten.
  - Vollständig responsive Navigation inkl. Mobile-Menü und Touch-fähiger Bildergalerie (Swipe-Unterstützung).

## Projektstruktur

```text
├── public/
│   ├── admin/               # Visuelles CMS-Interface (Decap / Sveltia CMS)
│   ├── blog/images/         # Beitragsbilder der Berichte
│   ├── fonts/               # Lokal gehostete Schriftarten (Zalando Sans & Expanded)
│   ├── images/              # Galerie- und Seitenbilder
│   └── Logo.svg             # Offizielles Vereinslogo (Schwalbe)
├── src/
│   ├── components/          # Wiederverwendbare UI-Komponenten (Header, Footer, ImageGallery)
│   ├── content/
│   │   ├── berichte/        # Vereinsberichte als Markdown-Dateien
│   │   └── veranstaltungen/ # Termine & Events als Markdown-Dateien
│   ├── data/                # Einfach pflegbare JSON-Daten (Training, Fahrer, Sponsoren, Verein)
│   ├── layouts/             # BaseLayout.astro (HTML-Grundgerüst, Meta-Tags, lokale Fonts)
│   ├── pages/               # Alle Routen und Unterseiten der Website
│   └── styles/              # Globales Corporate-Design-Stylesheet (global.css)
├── CMS-ANLEITUNG.md         # Anleitung zur unabhängigen Inhaltspflege für den Verein
├── CHANGELOG.md             # Versionshistorie nach Keep a Changelog / SemVer
└── astro.config.mjs         # Astro-Konfiguration
```

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:4321)
npm run dev

# Produktions-Build erstellen (Ausgabe in ./dist)
npm run build

# Produktions-Build lokal testen
npm run preview
```
