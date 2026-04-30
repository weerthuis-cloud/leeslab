# Leeslab

Literatuurportaal Nederlands voor de bovenbouw havo/vwo van KSH Haarlemmermeer.

Dit is een testversie. Het doel van deze publicatie is een eerste evaluatieronde door collega's en de Claude design-review. Op basis van die feedback gaat het portaal door naar versie 0.8 (redesign).

## Wat staat hier live

### Toegangspoort
- `index.html` (v0.3) — gedeelde inlogpagina. Leerlingen worden automatisch doorgestuurd naar het leerlingportaal. Docenten op een laptop/tablet gaan direct naar de desktop-tool; docenten op een smartphone krijgen een keuzescherm tussen mobiele app of desktop-versie.

### Leerling
- `leerlingportaal_v0.7.19.html` — themalijst, leeslijst, portfolio.

### Docent (desktop)
- `docent_v0.41.html` — klassen, voortgang, mondeling, vragenbank. Verbergt persoonlijke leeslijsten van collega's uit de gemeenschappelijke boekencatalogus.

### Docent (mobiel)
- `docent_mobiel_v0.4.12.html` — boekenlijst met covers, eigen leesvoortgang met paginanummer en percentage, parallel lezen, eigen leeslijst, notities, citaten, vragen toevoegen aan vragenbank, cover-acquisitie via ISBN of plak-URL of foto. Volledig SVG-pictogrammen, Leeslab-logo op login en in header.
- `manifest.json` + `sw.js` — PWA-configuratie en service worker, voor "echte" app-installatie op Android Chrome.
- `leeslab_icon_180.png`, `leeslab_icon_192.png`, `leeslab_icon_512.png` — Leeslab-logo (zwart-met-oranje L) voor het homescreen-icoon.

## Hoe testen

Open de Pages-URL: `https://weerthuis-cloud.github.io/leeslab/`. Je komt direct op het gedeelde inlogscherm. Inloggen gaat via een testaccount dat je van mij krijgt; op basis van je rol word je automatisch doorgestuurd. Maak nog geen accounts zelf aan; docent-zichtbaarheid en klassenkoppelingen worden centraal beheerd.

### Op iPhone (Safari)
Open de URL in Safari, log in. Op een smartphone krijg je een keuze tussen mobiele app en desktop. Kies "Mobiele app". Wil je hem installeren: deel-knop → "Zet op beginscherm". Niet via Chrome installeren — daar werken inputs in standalone-modus niet betrouwbaar (iOS-systeembeperking).

### Op Android (Chrome)
Open de URL in Chrome, log in, kies de app. Installeren: drie puntjes → "Toevoegen aan startscherm" of "Installeren". Wordt fullscreen geïnstalleerd met Leeslab-logo.

### Op laptop/desktop
Inloggen brengt docenten direct op `docent_v0.41.html`.

Feedback graag terug naar Peter (weerthuis@gmail.com).

## Techniek en privacy

Single-file HTML met vanilla JavaScript. De data-laag draait op Supabase (prototype-omgeving, project `vygkciuiptfyridhrxbp`). Toegang tot data wordt afgeschermd via Row Level Security en login. De Supabase-URL en publieke anon-key staan zichtbaar in de HTML; dat hoort zo bij een Supabase frontend en levert geen datalek op, omdat alleen ingelogde gebruikers met de juiste rol data te zien krijgen.

Geen leerlingdata in deze repo. Geen externe analytics. Externe API's voor cover-acquisitie (Open Library, Google Books, weserv.nl als CORS-proxy) ontvangen alleen ISBN's of cover-URL's, geen persoonsgegevens.

Bij positieve evaluatie volgt migratie naar school-SSO (Microsoft/Magister).

## Versie

Testronde april 2026.
- Entry-pagina v0.3 (29-04-2026): mobiele keuze voor docenten op smartphone.
- Docent v0.41: persoonlijke leeslijsten verborgen uit gemeenschappelijke catalogus.
- Docent-mobiel v0.4.12: PWA met manifest en service worker.

Vereiste SQL-migraties op Supabase: `migratie_docent_app_v0.1.sql` t/m `migratie_docent_app_v0.6.sql` (zie projectroot lokaal).
