# Pokémon Finder Webapp

En enkel og responsiv webapplikasjon som lar brukere søke etter en Pokémon ved navn for å se dens bilde, typer og basestatistikk (HP, Attack, Defense).

## Funksjonalitet
* Søk i sanntid etter Pokémon (fungerer med både store og små bokstaver).
* Henter live data dynamisk fra det eksterne API-et [PokeAPI](https://pokeapi.co/).
* Inkluderer feilhåndtering dersom en Pokémon ikke finnes i databasen.
* Modern og ryddig design med animasjoner.

## Teknologier brukt
* **HTML5** – Struktur og oppbygning.
* **CSS3** – Custom styling, Flexbox, Grid og CSS-animasjoner.
* **JavaScript (ES6)** – Fetch API for asynkrone forespørsler (Async/Await) og DOM-manipulasjon.

## Hvordan starte prosjektet lokalt
1. Klone dette GitHub-repositoriet til din egen maskin.
2. Åpne mappen i Visual Studio Code.
3. Høyreklikk på `index.html` og velg **Open with Live Server** (eller bare dobbeltklikk på `index.html`-filen for å åpne den direkte i nettleseren).
4. Skriv inn et pokémon-navn (f.eks. `charizard`) og trykk på **Søk** eller tast **Enter**.