# Leeslab

Literatuurportaal Nederlands voor de bovenbouw havo/vwo van KSH Haarlemmermeer.

Dit is een testversie. Het doel van deze publicatie is een eerste evaluatieronde door collega's en de Claude design-review. Op basis van die feedback gaat het portaal door naar versie 0.8 (redesign).

## Wat staat hier live

- `index.html` — gedeelde inlogpagina (v0.2) voor leerlingen en docenten
- `leerlingportaal_v0.7.19.html` — leerlingomgeving (themalijst, leeslijst, portfolio)
- `docent_v0.41.html` — docentenomgeving (klassen, voortgang, mondeling). v0.41 verbergt persoonlijke leeslijsten van collega's uit de gemeenschappelijke boekencatalogus.
- `docent_mobiel_v0.4.12.html` (nieuwste, met PWA-installatie voor Android)
- `leeslab_icon_180.png`, `leeslab_icon_192.png`, `leeslab_icon_512.png` — Leeslab-logo voor homescreen-icoon op iPhone en PWA-installatie op Android
- `manifest.json` — PWA-configuratie (Android Chrome herkent dit voor "Toevoegen aan startscherm")
- `sw.js` — service worker die de app-shell cachet voor offline-toegang — mobiele docent-app (PWA): boekenlijst, eigen leesvoortgang met paginanummer, eigen leeslijst, notities, citaten en vragen. Ondersteunt parallel lezen. Volledig SVG-pictogrammen (Lucide-stijl) op alle plekken: tabs, navigatie, knoppen, status-meldingen, leeg-states. Leeslab-logo (blauw + oranje) op login en in header.

## Hoe testen

Open de Pages-URL. Je komt direct op het gedeelde inlogscherm. Inloggen gaat via een testaccount dat je van mij krijgt; op basis van je rol (leerling of docent) word je automatisch naar de juiste omgeving gestuurd. Maak nog geen accounts zelf aan; de docent-zichtbaarheid en klassenkoppelingen worden centraal beheerd.

Wat je vooral wil bekijken:
- of de inlog werkt
- of het overzicht en de boekenlijst er goed uitzien
- of de navigatie tussen tabs logisch voelt
- of er ergens iets stuk lijkt

Feedback graag terug naar Peter (weerthuis@gmail.com) of via een gezamenlijk feedback-document.

## Techniek en privacy

Single-file HTML met vanilla JavaScript. De data-laag draait op Supabase (prototype-omgeving). Toegang tot leerlingdata wordt afgeschermd via Row Level Security en login. De Supabase-URL en publieke anon-key staan zichtbaar in de HTML; dat hoort zo bij een Supabase frontend en levert geen datalek op, omdat alleen ingelogde gebruikers met de juiste rol gegevens te zien krijgen.

Geen leerlingdata in deze repo. Geen externe analytics. Bij positieve evaluatie volgt migratie naar school-SSO (Microsoft/Magister).

## Versie

Testronde april 2026. Entry-pagina v0.2 (29-04-2026): split-keuze vervangen door gedeelde inlog in KSH-stijl met automatische rol-redirect. Docentenportaal v0.41 (29-04-2026): boekencatalogus verbergt persoonlijke leeslijsten van collega's. Docent-mobiel v0.2 (29-04-2026): PWA voor docenten met eigen leesvoortgang en eigen leeslijst. Vereist SQL-migraties `migratie_docent_app_v0.1.sql` (eerste oplevering, twee nieuwe tabellen + RLS) en `migratie_docent_app_v0.2.sql` (status `persoonlijk` op books + RLS-aanpassing zodat leerlingen die nooit zien).
