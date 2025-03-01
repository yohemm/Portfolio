# Portfolio Yohem

## Dev init

1. Clone the repo
2. `npm install` for node dependancies
3. `npm run dev` for start server in dev mode

# In dev

[Listing des expériences](./docs/experience.md)

[Update web/Composants react](./docs/Front.md)

## A faire

### Dev

- [ ] WebTechno:
  - [ ] Apparition:
    - [ ] Apparition backend puis front end
    - [ ] la bar central s'active uniquement à la fin
- [ ] Formations:
  - remplacé la barre central par un element avec un background pour pourvoir changer ca background possition
  - [ ] Apparition:
    - [ ] barre central apparait du bas avec un mouvement du background
    - [ ] les formations apparaisse sur leur coté repectif via un transform translate
- [x] ProjectShowing
  - [x] Redisign
  - [x] liens
  - [ ] Apparition:
- [x] components/Projects.tsx
  - [x] Laisons entre project showing et projects liste (en rajoutant la connection au image)
  - [ ] Apparition:
- [x] Compétences
  - [ ] Apparition:
- [ ] Home Page:

  - [x] Faire un schema de la CI-CD du site
  - [x] Ajouté WebTechno
  - [ ] Ajout de la section contact sur l'accueil
  - [ ] Apparition:

- [x] Refractor toutes les props en type et non interface
- [x] Renomer les Props Avec comme format ComponentNameProps
- [ ] refaire & styliser les cards project
- [ ] Fix les titles animate aleternate
- [ ] Responsive
  - [ ] enlever les subtitles animé
  - [ ] Revision du MenuNav
- [ ] Reduire les textes
- [ ] Configurer Nav et Footer en temps que Layer
- [ ] faire des effets d'apparition pour les élements:
  - [ ] Configurer des Class css pour les diffents styles d'apparitions

### Redaction

- [ ] homepage
- [ ] Projects:
- [ ] formation
  - [ ] details des formation
  - [ ] sectio autodidact
- [ ] Compétance

# CI-CD

## [Format](https://semantic-release.gitbook.io/semantic-release#commit-message-format)

    <type>(<scope>): <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>

exemple avec un changement de version:

    feat: Changes welcome message

    BREAKING CHANGE:
      My message to describe new version

type de commit :

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

changement de version

- _BREAKING CHANGE: major version_, à ecrire dans le body du commit
- _feat: minor version_
- _fix: fix index_

ci n'execute pas semantic release
