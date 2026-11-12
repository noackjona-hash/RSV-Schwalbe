# Hosting-Konzept & Preisvergleich – RSV „Schwalbe" Ellmendingen e. V.

Dieses Dokument enthält die Analyse des aktuellen Hostings von `rsv-ellmendingen.de`, einen Preisvergleich der günstigsten Hosting-Optionen (Stand 2026) sowie eine fertige Vorlage für die Abstimmung mit **Simon Mayer** und **Martin Rupf**.

---

## 1. Technische Bestandsaufnahme (`rsv-ellmendingen.de`)

Eine technische DNS- und Server-Prüfung der aktuellen Vereins-Domain `rsv-ellmendingen.de` ergibt folgendes Bild:

| Merkmal | Aktueller Wert | Bedeutung |
| :--- | :--- | :--- |
| **Provider / Registrar** | **IONOS SE (ehem. 1&1)** | Nameserver: `ns1027.ui-dns.de` / `.com` / `.org` / `.biz` |
| **Webserver-IP (A-Record)** | `217.160.0.211` | Klassisches IONOS Shared-Webhosting |
| **Mailserver (MX-Record)** | `mx00.ionos.de` / `mx01.ionos.de` | IONOS Mailserver sind im DNS aktiv (auf der Website selbst wird primär `rsvellmendingen@googlemail.com` genannt) |
| **Aktuelles System** | **WordPress (Theme: TwentyTen, Stand ~2011)** | Veraltete WordPress-Installation unter `/wordpress/` |
| **Kostenfalle bei IONOS** | **Alter Tarif + ggf. „PHP Extended Support"** | Ältere IONOS-Webhosting-Tarife kosten oft **10 € bis 25 € / Monat** (insbesondere wenn für alte WordPress-Versionen kostenpflichtiger „PHP Extended Support" für ~9–13 €/Monat berechnet wird). |

### Warum wird das Hosting mit der neuen Astro-Website extrem günstig?
Da die neue Website mit **Astro 5** als **statische Website** (`HTML`, `CSS`, `WebP/JPG`, kein PHP, keine MySQL-Datenbank nötig) generiert wird:
1. **Kein PHP / keine Datenbank nötig:** Es fällt **nie wieder** eine Gebühr für veraltete PHP-Versionen (PHP Extended Support) oder MySQL-Datenbanken an.
2. **Kein Wartungsaufwand & maximale Sicherheit:** Statische Seiten können nicht über WordPress-Plugin-Lücken gehackt werden.
3. **CMS trotzdem inklusive:** Über **Sveltia CMS / Decap CMS** (`/admin`) können Simon und das Presse-Team trotzdem bequem im Browser Berichte, Veranstaltungen, Trainingszeiten und Kontakte bearbeiten – komplett ohne laufende Serverkosten.

---

## 2. Die 3 günstigsten Hosting-Optionen im Vergleich (2026)

### Option 1: Cloudflare Pages + günstige Domain (**Preis-Leistungs-Sieger: ~0,00 € bis 0,70 € / Monat**)
Da Astro-Websites aus rein statischen Dateien bestehen, lässt sich das eigentliche Webhosting **dauerhaft für 0,00 € / Monat** über **Cloudflare Pages** (oder **Netlify**) betreiben (wie bereits beim ersten Test unter `schwalbewebseite.pages.dev`).

* **Webhosting + SSL + globales CDN + automatischer CMS-Build:** **0,00 € / Monat** (dauerhaft kostenlos bei Cloudflare Pages).
* **Kosten bleiben nur für die Domain `rsv-ellmendingen.de` (+ ggf. E-Mail):**
  * **Variante 1a (Domain zieht zu Netcup oder Porkbun/Cloudflare um):** Eine `.de`-Domain kostet bei **Netcup** regulär **ca. 0,42 € / Monat** (5,00 € / Jahr). Falls E-Mail-Weiterleitungen auf `rsvellmendingen@googlemail.com` reichen, liegen die **Gesamtkosten bei unter 5 € pro Jahr (~0,42 €/Monat)**.
  * **Variante 1b (Domain & E-Mail bleiben bei IONOS, großes WordPress-Paket wird gekündigt):** Martin stuft den bestehenden IONOS-Vertrag auf einen reinen **Domain-/Mail-Basic-Tarif (~1,00 € – 2,00 € / Monat)** herunter. Die Domain zeigt per DNS (`CNAME` / `A`-Record) auf Cloudflare Pages. **Vorteil:** Bestehende E-Mail-Postfächer bei IONOS bleiben zu 100 % unverändert!

---

### Option 2: Netcup „Webhosting 1000" (**All-in-One auf deutschen Servern: ~2,17 € / Monat**)
Wenn der Verein **alles aus einer Hand** bei einem deutschen Provider (Rechenzentrum Nürnberg, 100 % DSGVO-konform) inklusive eigener E-Mail-Postfächer haben möchte:

* **Tarif:** Netcup **Webhosting 1000** (oft in Aktionen sogar für **~1,00 € – 1,99 € / Monat** erhältlich)
* **Inklusive:**
  * **1x `.de`-Domain (`rsv-ellmendingen.de`) bereits im Preis enthalten!**
  * **Unbegrenzte E-Mail-Postfächer** (`@rsv-ellmendingen.de` mit IMAP/SMTP & Webmail)
  * **25–50 GB NVMe SSD-Speicher** (für tausende Vereinsfotos mehr als genug)
  * **Kostenloses Let's Encrypt SSL-Zertifikat (HTTPS)**
* **Wie funktioniert das CMS hier?**
  Über die bereits vorbereitete GitHub-Action ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) wird jede Änderung im `/admin`-CMS automatisch gebaut und per sicherem FTPS auf den Netcup-Webspace übertragen.

---

### Option 3: Hetzner „Webhosting Level 1 / S" (**Deutscher Klassiker: ~1,90 € / Monat**)
* **Tarif:** Hetzner Webhosting S (Level 1) für **ca. 1,90 € / Monat** (inkl. MwSt. und `.de`-Domain im Paket bzw. ~0,80 € Domain-Aufpreis je nach aktuellem Tarifmodell).
* **Inklusive:**
  * 10 GB Speicherplatz, E-Mail-Postfächer, kostenloses SSL-Zertifikat, Serverstandort Deutschland (Nürnberg/Falkenstein).

---

## 3. Direktvergleich auf einen Blick

| Kriterium | Aktuell (IONOS WordPress) | Option 1: Cloudflare Pages + Domain | Option 2: Netcup Webhosting 1000 | Option 3: Hetzner Webhosting S |
| :--- | :--- | :--- | :--- | :--- |
| **Monatliche Kosten** | **ca. 8 € – 20+ € / Monat** *(vermutet inkl. PHP-Support)* | **0,42 € – 1,50 € / Monat** *(Hosting 0 €, nur Domain)* | **ca. 2,17 € / Monat** *(inkl. `.de`-Domain & Mail)* | **ca. 1,90 € – 2,70 € / Monat** |
| **Jahreskosten gesamt** | ca. 100 € – 240 € / Jahr | **ca. 5 € – 18 € / Jahr** | **ca. 26 € / Jahr** | **ca. 23 € – 32 € / Jahr** |
| **`.de`-Domain inklusive?** | Ja | Über Netcup / IONOS Basic | **Ja (1x `.de` inklusive)** | Ja / je nach Aktion |
| **E-Mail-Postfächer** | IONOS Mail | Weiterleitung oder IONOS Mail Basic | **Unbegrenzt inklusive** | **Inklusive** |
| **CMS (`/admin`)** | Altes WordPress | **Direkt integriert (0 €)** | **Über GitHub Action FTPS (0 €)** | **Über GitHub Action FTPS (0 €)** |
| **Geschwindigkeit & Sicherheit** | Langsam, unsicher (WP 2011) | **Extrem schnell (Global CDN)** | **Sehr schnell (NVMe, DE)** | **Sehr schnell (DE)** |

---

## 4. Bereits vorbereitete Deployment-Dateien im Projekt

Im Repository sind bereits **alle Konfigurationsdateien für sämtliche Hosting-Varianten** fertig eingerichtet:

1. **Cloudflare Pages Konfiguration:** [wrangler.jsonc](wrangler.jsonc), [public/_headers](public/_headers), [public/_redirects](public/_redirects)
2. **Netlify Konfiguration (inkl. Git Gateway für `/admin`):** [netlify.toml](netlify.toml)
3. **Apache Webhosting (Netcup / Hetzner / IONOS):** [public/.htaccess](public/.htaccess)
   * Erzwingt automatisch `HTTPS`
   * Leitet alte WordPress-Links (`?page_id=30` → `/termine/`, `?page_id=35` → `/presse/`) und `.html`-Endungen per `301 Moved Permanently` auf die neuen URLs um
   * Aktiviert Gzip/Brotli-Komprimierung und Browser-Caching für Schriften & Bilder (`1 Jahr`)
   * Setzt die eigene Fehlerseite `/404.html`
4. **Automatische GitHub Actions Pipeline:** [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
   * Baut die Astro-Website bei jedem Commit / jeder CMS-Änderung automatisch und kann sie per FTPS direkt auf Netcup, Hetzner oder IONOS hochladen.

---

## 5. Antwort-Vorlage für die E-Mail an Simon Mayer & Martin Rupf

> **Betreff:** AW: Website RSV Schwalbe Ellmendingen – Prototyp fertig & extrem günstige Hosting-Optionen
>
> Hallo Simon, hallo Martin,
>
> ich habe euren Entwurf und das Corporate Design jetzt komplett in **Astro** umgesetzt und technisch auf Hochglanz poliert:
>
> - **Design & Schriften (100 % DSGVO-konform):** Die Schriften *Zalando Sans* und *Zalando Sans Expanded* sind lokal als schnelle `.woff2`-Dateien eingebunden – es findet keinerlei Verbindung zu Google-Servern statt.
> - **Alle echten Vereins-Medien & PDFs integriert:** Ich habe alle 11 aktuellen Sponsoren-Logos, die Galeriebilder sowie die aktuelle Beitrittserklärung (2025) und Beitragsordnung von der bisherigen Website übernommen und lokal eingebunden.
> - **Inhalte selbst pflegen (CMS ohne Zusatzkosten):** Unter `/admin` ist ein übersichtliches Redaktionssystem eingerichtet. Damit könnt ihr Berichte, Veranstaltungen, Trainingszeiten, Kontakte und Fahrerprofile komplett selbstständig im Browser über eine Eingabemaske hinzufügen und bearbeiten – ganz ohne Programmierkenntnisse.
>
> **Zum Thema Hosting & Kosten (an Martin & Simon):**
> Ich habe kurz die DNS-Einträge von `rsv-ellmendingen.de` geprüft und gesehen, dass die Domain und das aktuelle WordPress-Hosting bei **IONOS (1&1)** liegen.
> Da unsere neue Astro-Website im Gegensatz zu WordPress **keine Datenbank und kein PHP** mehr benötigt (dadurch entfallen bei IONOS u. a. auch teure Gebühren für „PHP Extended Support"), können wir die laufenden Kosten drastisch senken:
>
> **Option A – Cloudflare Pages + bestehende Domain (Hosting für 0,00 € / Monat):**
> Das eigentliche Webhosting inkl. SSL-Zertifikat und automatischer Aktualisierung über das CMS ist bei **Cloudflare Pages** (oder Netlify) **dauerhaft kostenlos (0,00 €/Monat)**. Wir müssten bei IONOS lediglich das teure WordPress-Webhosting-Paket kündigen und nur die reine Domain (ggf. inkl. E-Mail-Postfach für ~1–2 €/Monat) behalten oder die Domain zu **Netcup** (~0,42 €/Monat) umziehen.
>
> **Option B – Komplettpaket bei Netcup oder Hetzner (ca. 1,90 € – 2,17 € / Monat):**
> Falls ihr Domain, Webspace und eigene E-Mail-Postfächer (`@rsv-ellmendingen.de`) komplett zusammen auf deutschen Servern haben möchtet, kostet das Paket **Netcup Webhosting 1000** nur **ca. 2,17 €/Monat** (inklusive `.de`-Domain und E-Mail-Postfächern) bzw. **Hetzner Webhosting S** **ca. 1,90 €/Monat**.
>
> @Martin: Schreib gerne kurz, was ihr aktuell bei IONOS bezahlt und ob über `rsv-ellmendingen.de` eigene E-Mail-Postfächer aktiv genutzt werden (oder ob alles über `rsvellmendingen@googlemail.com` läuft). Ich habe technisch bereits für beide Varianten alles vorbereitet!
>
> Viele Grüße  
> Jona Noack

