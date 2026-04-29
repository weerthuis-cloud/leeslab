# Leeslab

Literatuurportaal Nederlands voor de bovenbouw havo/vwo van KSH Haarlemmermeer.

Dit is een testversie. Het doel van deze publicatie is een eerste evaluatieronde door collega's en de Claude design-review. Op basis van die feedback gaat het portaal door naar versie 0.8 (redesign).

## Wat staat hier live

- `index.html` — gedeelde inlogpagina (v0.2) voor leerlingen en docenten
- `leerlingportaal_v0.7.19.html` — leerlingomgeving (themalijst, leeslijst, portfolio)
- `docent_v0.39.html` — docentenomgeving (klassen, voortgang, mondeling)

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

Testronde april 2026. Entry-pagina v0.2 (29-04-2026): split-keuze vervangen door gedeelde inlog in KSH-stijl met automatische rol-redirect.
