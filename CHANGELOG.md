# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.
Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/), und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [2.7.0] - 2026-11-17

### Geändert
- **Radsport-Offset-Design & Print-Medien-Synergie (`v2.3.0` + Illustrator-Medien)**:
  - Wiedereinführung des handgefertigten Radsport-Offset-Button-Systems aus `v2.3.0` (4px-Ecken, klare `#0F172A`-Konturen, markante Pink/Dark-Schlagschatten und taktile Klick-Physik beim Hovern und Drücken) auf allen CTA-, Zurück-, Outline-, Formular- und Download-Buttons sowie beim Header-CTA und Mobile-Menü-Schalter in `src/styles/global.css`.
  - Kompakter `Mitglied werden`-Header-Button ohne Zusatz-Pfeil in `src/components/Header.astro`, exakt abgestimmt auf den freigegebenen Design-Screenshot.
  - Direkt benannte Download-Buttons (`Beitrittserklärung 2025 (PDF)` / `Beitragsordnung (PDF)`) mit vorangestelltem Download-Icon in `src/pages/mitglied-werden.astro`.
  - Angleichung der Highlight-Badges und Teaser-Boxen (`.poster-banner`, `.poster-kicker`, `.termin-card--highlight .termin-date-badge`, `.social-callout`) an das angepasste Gelb/Pink/Slate-Grafikdesign der Vereinsmedien bei vollständigem Erhalt aller WCAG-AA-Kontraste, Lighthouse-100-Werte und SEO-Strukturen aus `v2.6.0`.

## [2.6.0] - 2026-11-14

### Hinzugefügt
- **Seiteneinstiege & Editorial Components**: Einheitliche `.page-header`-Sektionen mit Kicker und Einleitung auf allen Unterseiten sowie `.info-card-grid`, `.fact-grid`, `.fee-cards-grid` und `.page-cta-box` für strukturierte Inhaltsblöcke.
- **Termine & Kalender**: `.termin-date-badge` mit Tag/Monat, strukturierte Termin-Karten mit `.termin-card-action` auf Startseite und `/veranstaltungen` sowie ausgearbeitete Veranstaltungsseiten für JHV und Weihnachtsfeier 2026.
- **Footer & Navigation**: 4-spaltiger Editorial-Footer mit Vereinsanschrift, E-Mail-Kontakt, Social-Links und kategorisierten Navigationsspalten.
- **Vollständige Vereinsinhalte**: Ausgearbeitete Seiten für `/rsv-kids`, `/wandergruppe`, `/verwaltung`, `/archiv`, `/verein`, `/kontakt`, `/mitglied-werden`, `/training`, `/sponsoren` sowie bereinigte Fahrerprofile in `src/data/fahrer.json`.

### Geändert & Behoben
- **UI-Präzision**: Geschärfte Button-Konturen, Inset-Highlights und Hover-Übergänge; eigene Kalender-Layoutspalten (`.termine-grid`) unabhängig von `.gallery-page-grid`; `.footer-grid` sauber auf CSS Grid umgestellt.
- **SEO & Konsistenz**: Optionales `canonicalPath`-Override in `BaseLayout.astro`, einheitliches „Archiv“-Label in Header und Seite, korrigierte Heading-Hierarchie in `radrennen-2026.md` (`h1` → `h2`), und gefilterte `sitemap.xml.ts` mit `<lastmod>` und `<priority>`.

## [2.5.0] - 2026-11-14

### Changed
- **Button-System & UI-Strukturen auf Agentur-Niveau überarbeitet**:
  - Ersetzt Pill-Gradienten, innere Highlight-Schatten und kreisförmige Unicode-Pfeil-Kapseln durch eine präzise geometrische UI-Architektur (`border-radius: 0.5rem`, klare 1px-Rahmen, dezente Tiefe, gestochen scharfe `16x16` Inline-SVG-Pfeil- und Download-Icons sowie ruhigere Hover-/Active-Übergänge in `src/styles/global.css`, `src/components/Header.astro` und den Seiten-Templates).
  - `.btn-back` als ruhigen Surface-/Outline-Button innerhalb einer strukturierten `.article-footer`-Aktionsleiste mit sekundärer Kontakt-/Mitglied-Aktion gestaltet.
  - Auf `src/pages/mitglied-werden.astro` beide PDF-Downloads in strukturierte `.download-card`-Container mit Dokumenten-Icon, Metadaten und Download-SVG-Button eingebettet.
  - Auf `src/pages/training.astro` und `src/pages/verein.astro` abschließende `.page-cta-box`-Bereiche sowie auf `src/pages/index.astro` den Bereichs-CTA „Alle Veranstaltungen“ ergänzt.
- **100/100 SEO- & Barrierefreiheits-Architektur**:
  - `src/layouts/BaseLayout.astro` um `robots`-Meta (`noindex` für 404), konsistente Trailing-Slash-Canonicals/`og:url` passend zu `sitemap.xml`, Twitter-Card-Tags, `og:image:alt` und ein JSON-LD `@graph` (`SportsOrganization`, dynamische `BreadcrumbList` und Seitenschemata) erweitert.
  - Aussagekräftige Meta-Descriptions und sichtbare `.breadcrumb-nav`-Navigation auf allen Inhaltsseiten ergänzt.
  - `BlogPosting` JSON-LD auf `src/pages/blog/[slug].astro` und `SportsEvent` JSON-LD auf allen Veranstaltungs-Detailseiten integriert.
  - Lighthouse-`link-text`-Blocker behoben (`<span class="sr-only">`-Kontext bei „Weiterlesen“- und PDF-Download-Links) sowie `h1 -> h2 -> h3`-Überschriftenhierarchie auf `src/pages/impressum.astro` und Kontrast auf `src/pages/404.astro` korrigiert.

## [2.4.0] - 2026-11-14
### Geändert & Optimiert
- **Signature Radsport-Button-System („Das gewisse Etwas“)**:
  - Aerodynamische Pill-Silhouette (`border-radius: 999px`) mit feinem Top-Glanzlicht und integrierter kreisrunder Action-Kapsel (`.btn-arrow` / `.btn-arrow-left` bzw. `::after` bei `.btn-header-cta`), deren Farbe beim Hover dynamisch zwischen den Vereinsfarben (`#0F172A`, `#FA006C`, `#FFE940`) wechselt.
  - Aufwertung des *Alle Vereinsberichte*-Links (`.view-all`) zu einem dezenten Outline-Pill-Button mit Pink-Badge sowie konsistente `.btn-arrow`-Struktur auf `404.astro`, `bilder.astro` und `berichte.astro`.
- **Technische & Mobile Optimierung**:
  - **Touch- vs. Maus-Trennung**: Alle Button-`:hover`-Effekte strikt in `@media (hover: hover)` gekapselt (verhindert Sticky-Hover auf Smartphones) und um ein unmittelbares physisches `:active`-Druckfeedback (`scale(0.97)`) ergänzt.
  - **Mobile Daumen-Ergonomie (`< 480px`)**: `.hero-actions .btn` und `.btn-download` spannen auf schmalen Smartphones sauber auf `100 %` Breite mit linksbündigem Label und rechtsbündiger Kapsel.
  - **CSS-Deduplizierung & Payload**: Gemeinsame Basisklassen für `.btn, .btn-back, .btn-download`, Entfernen von totem CSS (`.banner-leidenschaft`, `.hero-buttons`) und Bereinigung des `:focus-visible`-Radius für runde Pill-Buttons.

## [2.3.1] - 2026-11-14
### Geändert & Verbessert
- **Modernes, einheitliches Button-System (Corporate Design v2.0)**:
  - Entfernung der harten `1.5px`-Konturen, eckigen `4px`-Radien und Offset-Schatten (`3px 3px 0`) bei sämtlichen Buttons (`.btn`, `.btn-yellow`, `.btn-primary`, `.btn-dark`, `.btn-header-cta`, `.mobile-menu-toggle`, `.btn-back`, `.btn-download`, `.btn-submit`).
  - Einführung abgerundeter, sportlich-eleganter Buttons (`border-radius: 0.65rem` bzw. `0.55rem` im Header) mit weichen Ebenen-Schatten, `44px` Mindest-Tippfläche (`--tap-target-min`) und ruhigem `translateY(-2px)` Hover-Lift.
  - Harmonisierung des Hero-Button-Paars auf `index.astro` durch einen sekundären Glas-Button (`.btn-secondary`) für *Training & Ausfahrten* sowie Spezifitäts-Fix für den mobilen Drawer-CTA (`.site-nav a:not(.btn)`).
  - Konsistente animierte Richtungspfeile (`→` / `←`) bei Zurück- (`.btn-back`) und Download-Buttons (`.btn-download`).

## [2.3.0] - 2026-11-12
### Geändert & Verbessert
- **Mobile Header-Bar für kleine Smartphones (`320px–360px` wie Galaxy S20 / iPhone SE)**:
  - Offizielles 2-zeiliges Logo-Lockup (`RSV Schwalbe` / `Ellmendingen` aus Seite 1 des CD-Guides) auf kleinen Bildschirmen implementiert, sodass die Titelzeile niemals rechts abgeschnitten wird.
  - Taktiler `MENÜ`-Button mit animiertem 2-Balken-Icon (`X` im geöffneten Zustand) sowie 3px Team-Trikot-Akzentstreifen (`#FA006C` + `#FFE940`) am oberen Bildschirmrand.
- **Charakterstarke Radsport-Buttons & Editorial-Hero (ohne generischen AI-Look)**:
  - Entfernung des grauen Pill-Badges und der klobigen 100%-Breite-Button-Blöcke, die das Fahrerfeld verdeckt haben.
  - Neue, kompakte Radsport-Buttons mit scharfer `#0F172A`-Kontur (`1.5px`), **hartem Marken-Offset-Schatten (`3px 3px 0 #FA006C`)** und animiertem Pfeil (`→`), kombiniert mit einem Editorial-Link-CTA (`Training & Ausfahrten →`).
  - Hero-Inhalt unten links mit `4px` Pink-Akzentbalken positioniert, sodass die RSV-Rennfahrer in den Vereinsfarben im oberen Bildbereich frei und kontrastreich sichtbar bleiben.

## [2.2.0] - 2026-11-12
### Hinzugefügt
- **Vercel Web Analytics & Speed Insights**: Installation von `@vercel/analytics` und `@vercel/speed-insights` sowie globale Einbindung von `<Analytics />` und `<SpeedInsights />` in `src/layouts/BaseLayout.astro`.
- **Vercel Deployment-Konfiguration (`vercel.json`)**: Clean-URLs und 1-Jahres-Cache-Header (`immutable`) für lokale Schriftarten und Bild-Assets.

## [2.1.0] - 2026-11-12
### Optimiert (Lighthouse 100/100 Performance & Barrierefreiheit)
- **Barrierefreiheit (100/100)**:
  - **WCAG AA/AAA Farbkontrast**: Anpassung von `--text-muted` (`#475569`, Kontrast `7.5:1`), `--accent-text` (`#C40054`, Kontrast `5.8:1` auf Weiß für Fließtext-Links, Kicker und Buttons) sowie kontraststarker Plakat-Badge (`14.8:1`).
  - **Lückenlose Überschriften-Hierarchie (`h1` → `h2` → `h3`)**: Beseitigung übersprungener Heading-Level in `Footer.astro` (`.footer-heading`), `mitglied-werden.astro`, `fahrer.astro` und `bilder.astro`.
- **Performance & Diagnose (100/100)**:
  - **0 ms Render-Blocking CSS**: Aktivierung von `inlineStylesheets: 'always'` in `astro.config.mjs`.
  - **LCP & Netzwerkabhängigkeitsbaum**: Einbindung des Hero-Bildes (`/images/home/hero.webp`) als direktes `<img fetchpriority="high" width="1280" height="720">` im HTML statt als nachgeladenes CSS-Hintergrundbild.
  - **Bildübermittlung (> 400 KiB eingespart)**: Generierung passgenauer `220×220` WebP-Thumbnails (`thumb-1.webp`, `thumb-6.webp`, `thumb-8.webp` mit je ~8–14 KB statt >100 KB JPEGs) sowie verlustarme Komprimierung aller Startseiten-WebPs und Sponsoren-Logos mit Sharp.
  - **Explizite `width` & `height` Attribute (0 CLS)**: Alle `<img>`-Elemente auf sämtlichen Seiten mit expliziten `width`- und `height`-Attributen ausgestattet.

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
