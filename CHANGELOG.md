# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.
Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/), und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [2.0.0] - 2026-11-12
### Geändert & Neu gestaltet (Corporate Design v2.0)
- **Exakte Umsetzung der visuellen Entwürfe aus `RSV-Corporate-Design.pdf` (Seiten 1, 2, 3 & 6) kombiniert mit modernem 2026 Radsport-UI/UX**:
  - **Header & Branding (CD Guide Seite 1 & 2)**: Schwalbe-Radfahrer-Signet in leuchtendem Marken-Pink (`#FA006C`), Uppercase-Navigation in `Zalando Sans SemiBold` (`START`, `VEREIN`, `RADSPORT`, `VERANSTALTUNGEN`, `MEHR`) und Signal-Gelber CTA-Button `MITGLIED WERDEN` (`#FFE940` mit `#0F172A` Text).
  - **Vollbild-Action-Hero (CD Guide Seite 2)**: Großflächiges Radsport-Peloton-Foto (`/images/home/Amateure1.webp`) mit abgedunkeltem Kontrast-Overlay, Headline *„Der Radsportverein in Baden"* in `Zalando Sans Expanded SemiBold` und Unterzeile *„Mit Tradition und Leidenschaft für den Radsport seit über 125 Jahren."*
  - **Neues aus dem Verein (CD Guide Seite 2)**: Moderne horizontale Media-Cards mit quadratischem abgerundetem Vorschaubild links, Titel in `Zalando Sans Expanded`, Datum in `#94A3B8` und pinkem `Weiterlesen`-Link (`#FA006C`).
  - **Nächste Veranstaltungen & Plakat-Banner (CD Guide Seite 2 & 6)**: Erhöhte Veranstaltungskarten mit pinker Uppercase-Dachzeile (`VERANSTALTUNG` / `RADRENNEN · HIGHLIGHT`), Datum-/Ort-Icons sowie ein Signal-Gelbes Plakat-Highlight (`#FFE940` + `#FA006C`) nach Seite 6 des Design-Guides.
  - **Sponsoren-Showcase & Artikel-Karten (CD Guide Seite 2 & 3)**: Sponsoren-Grid in abgerundetem `#F8FAFC`-Showcase mit weißen Logo-Kacheln; Berichte- und Event-Detailseiten in erhöhten weißen Content-Cards (`border-radius: 1.75rem`) mit 3er-Fotogrid und gelbem `ZURÜCK ZUR ÜBERSICHT`-Button.

## [1.3.0] - 2026-11-12
### Geändert & Optimiert
- Vollständige Umstellung von `src/styles/global.css` auf eine **100 % Mobile-First-Architektur** (Basis-Styles für Smartphones ab 320px, progressive Erweiterung über `@media (min-width: 480px | 640px | 768px | 960px)` ohne Desktop-First-Overrides).
- **Touch- & Mobile-UX-Optimierung**: Durchgehende 44×44px Mindest-Tippflächen (`--tap-target-min`), `touch-action: manipulation`, Trennung von Touch- und Maus-Hover-Effekten via `@media (hover: hover)` sowie `prefers-reduced-motion`-Support.
- **Komponenten-Optimierung (`ImageGallery.astro`, `Header.astro`, `bilder.astro`)**:
  - `ImageGallery.astro`: Echtzeit-Touch-Swipe (`touchmove`-Mitziehen mit GPU-beschleunigtem `translate3d`), Tastatursteuerung (`ArrowLeft`/`ArrowRight`), ARIA-Carousel-Rollen und priorisiertes Laden des ersten Bildes (`loading="eager"` + `decoding="async"`).
  - `Header.astro`: Semantische `<button>`-Toggles, `matchMedia('(min-width: 960px)')`-Steuerung und `Escape`-Key-Handling.
  - `bilder.astro`: Touch-Swipe-Unterstützung in der Vollbild-Lightbox und gebündelte Astro-Client-Scripts.

## [1.2.0] - 2026-11-12
### Hinzugefügt
- Hosting- & Deployment-Paket (`wrangler.jsonc`, `netlify.toml`, `public/_headers`, `public/_redirects`, `public/.htaccess`) für Cloudflare Pages (0,00 €/Monat), Netlify sowie klassisches Webhosting (Netcup, Hetzner, IONOS).
- GitHub Actions CI/CD-Workflow (`.github/workflows/deploy.yml`) für automatischen Astro-Build und optionalen FTPS-Upload.
- Detailliertes Hosting-Konzept & Preisvergleich (`HOSTING-KONZEPT.md`) inklusive technischer DNS-Analyse der bestehenden IONOS-Infrastruktur (`rsv-ellmendingen.de`) und E-Mail-Vorlage für Simon Mayer & Martin Rupf.

## [1.1.5] - 2026-11-12
### Hinzugefügt
- Vollständige SEO-, OpenGraph- und Schema.org-Integration (`SportsOrganization` JSON-LD) sowie barrierefreier `.skip-link` in `BaseLayout.astro`.
- Eigene Fehlerseite (`src/pages/404.astro`), `public/robots.txt` und dynamisch generierte XML-Sitemap (`src/pages/sitemap.xml.ts`).
- Interaktive Vollbild-Lightbox mit Tastaturnavigation (`Escape`, `ArrowLeft`, `ArrowRight`) auf der Galerie-Seite (`src/pages/bilder.astro`).

## [1.1.0] - 2026-11-12
### Hinzugefügt
- Alle 11 originalen Sponsoren-Logos von der bestehenden Vereinswebsite lokal unter `public/images/sponsoren/` eingebunden (Behebung fehlerhafter externer Platzhalter-URLs aus dem HTML-Entwurf).
- Lokale WebP-Vorschaubilder für die Startseite (`public/images/home/`) sowie offizielle Vereins-PDFs (`RSV_Beitrittserklaerung_2025.pdf`, `RSV_Beitragsordnung_03-2015.pdf`) unter `public/downloads/` hinterlegt.

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
