# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.
Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/), und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [1.0.0] - 2026-11-12
### Hinzugefügt
- Produktionsreifer Astro-Prototyp (`v1.0.0`) mit 26 statisch generierten Seiten.
- Vollständige Dokumentation der Versionshistorie und Abschluss des Release-Zyklus (`release/v1.0.0`).

## [0.9.5] - 2026-11-12
### Hinzugefügt
- Visuelles Web-CMS (`/admin/index.html` & `/admin/config.yml` auf Basis von Sveltia/Decap CMS) für die unabhängige Inhaltspflege durch den Verein.
- Redaktions-Handbuch (`CMS-ANLEITUNG.md`) für Berichte, Veranstaltungen und Stammdaten.

## [0.9.0] - 2026-11-12
### Hinzugefügt
- Startseite (`index.astro`) mit Hero-Sektion, Termin-Teaser, aktuellen Berichten, Bildergalerie-Vorschau, Leidenschafts-Banner und Sponsorenleiste.
- Berichte-Übersicht (`berichte.astro`) und dynamische Beitragsseiten (`blog/[slug].astro`).
- Veranstaltungsübersicht (`veranstaltungen.astro`) sowie Detailseiten (`jhv-2026.astro`, `veranstaltung-detail.astro`, `weihnachtsfeier-2026.astro`, `veranstaltungen/[slug].astro`).
- Medien- und Zusatzseiten: `bilder.astro`, `links.astro` und `archiv.astro`.

## [0.8.0] - 2026-11-12
### Hinzugefügt
- Radsport-Seiten: `fahrer.astro` (Kaderübersicht), `rsv-kids.astro` (Nachwuchs) und `training.astro` (Sommer-/Wintertraining & Treffpunkt).

## [0.7.0] - 2026-11-12
### Hinzugefügt
- Vereinsseiten: `verein.astro`, `sponsoren.astro`, `wandergruppe.astro`, `verwaltung.astro`, `kontakt.astro`, `mitglied-werden.astro` (inkl. Beitragstabellen & PDF-Downloads) und `impressum.astro`.

## [0.6.0] - 2026-11-12
### Hinzugefügt
- Astro Content Collections (`src/content/config.ts`) für `berichte` und `veranstaltungen`.
- Alle bestehenden Vereinsberichte und Termine als Markdown-Dateien migriert.
- Strukturierte JSON-Datenspeicher (`src/data/verein.json`, `training.json`, `fahrer.json`, `sponsoren.json`, `galerie.json`).

## [0.5.0] - 2026-11-12
### Hinzugefügt
- `BaseLayout.astro` mit lokalem Font-Preloading und SEO-Metadaten.
- `Header.astro` mit eingebettetem SVG-Logo, Dropdown-Menüs und responsivem Mobile-Drawer.
- `Footer.astro` und Touch-/Swipe-fähige `ImageGallery.astro`-Komponente.

## [0.4.0] - 2026-11-12
### Hinzugefügt
- Globales Stylesheet (`src/styles/global.css`) nach den Vorgaben des RSV Corporate Designs (Slate-Palette, Pink `#FA006C`, Gelb `#FFE940`, Verzicht auf Dark Mode).
- Lokale `@font-face`-Einbindung und optimierte Mobile-Navigation.

## [0.3.0] - 2026-11-12
### Hinzugefügt
- Offizielles Vereinslogo (`Logo.svg` & `favicon.svg`) sowie sämtliche Galerie- und Beitragsbilder (`public/images/`, `public/blog/images/`).
- DSGVO-konforme lokale Schriftdateien (`Zalando Sans` & `Zalando Sans Expanded` als `.woff2`) unter `public/fonts/`.

## [0.2.0] - 2026-11-12
### Hinzugefügt
- Astro 5 Projektkonfiguration (`package.json`, `astro.config.mjs`, `tsconfig.json`).

## [0.1.0] - 2026-11-12
### Hinzugefügt
- Initiales Projekt-Repository mit `.gitignore`, `README.md` und `CHANGELOG.md`.
