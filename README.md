# Calcolution Best Practice Club Client

## Allgemeine Beschreibung

Dieses Repository enthält einen ersten MVP des Best Practice Clubs der Calcolution GmbH. Mit dem Best Practice Club verfolgt Calcolution das Ziel, eine Plattform zum Austausch über Nachhaltigkeitsthemen zu schaffen. Hierfür können die Mitglieder des Calcolution Best Practice Clubs verschiedenen Clubs beitreten, in denen Nachhaltigkeitsthemen aus verschiedenen Bereichen diskutiert werden.

Dieser MVP wurde in Form des Nordakademie Master Projekts erstellt. In diesem Projekt trat Calcolution als Auftraggeber der Nordakademie Studierendengruppe auf. Die Umsetzung dieses MVPs beruht auf einem Architekturkonzept, das in dem Projektbericht näher beschrieben wird.

Dieser MVP hat das Ziel, als Implementierungsvorlage für die tatsächliche Umsetzung des Best Practice Clubs, sowie als Grundlage für die Akquise von Kunden genutzt zu werden. Dabei lag der Fokus in der Auswahl der umzusetzenden Komponenten des Calcolution Best Practice Clubs in der Visualisierung der Idee der Best Practice Clubs. Von einem tatsächlichen produktiven Einsatz dieses MVPs sollte abgesehen werden.

## Getting Started

Der MVP des Calcolution Best Practice Clubs kann sowohl lokal gestartet werden oder über das Firebase Hosting erreicht werden.
Das Firebase Hosting kann [hier](https://calcolution-best-practice-club.web.app/) erreicht werden.

### Testuser

| username                          | password |
|-----------------------------------|----------|
| christian.schwehm@calcolution.com | Geheim   |
| max.mustermann@nordakademie.de    | Geheim   |

### Voraussetzungen lokales starten 

* Node.js
* npm
* AngularCLI (14.2.10)
* firebaseCLI (^9.15.0)

### Unterstützte Browser

Die folgenden Browser werden ausschließlich in der Desktop-Variante unterstützt:

* Google Chrome
* Edge
* Safari
* Firefox

### MVP lokal starten 

#### Best Practice Club Client initialisieren

* Ein Terminal / cmd öffnen. 
* In das Package `calcolution-best-practice-club` navigieren
* Den Befehl `npm ci` ausführen - er installiert alle Abhängigkeiten.

#### Client starten

- Zum Starten des Clients sollte vorab ein der Server gestartet sein.
- Im Terminal / cmd den Befehl `ng serve --open` ausführen. Anschließend öffnet sich der Default-Browser mit dem Best Practice Club.
- es öffnet sich in einem Borwser `localhost:4200`

## Firebase Hosting

### Firebase Projekt

Firebase wurde in diesem Projekt lediglich als Hosting-Plattform verwendet. Jedoch bietet Firebase deutlich mehr Feature wie eine Datenpersistierung, Monitoring, Authentifizierungsmechanismen, User-Management. Diese können für die Weiterentwicklung des MVPs in Betrachtung gezogen werden.

Das Firebase-Projekt kann über die [Firebase-Console](https://console.firebase.google.com/) erreicht werden. Hierfür ist Christian Schwehm als Maintainer des Projektes eingetragen und kann weitere Mitglieder hinzufügen.

### Firebase Deploy

Zum Updaten der Sourcen auf Firebase muss das MVP-Projekt lokal auf dem Rechner vorliegen. Liegt das Projekt lokal vor, muss sich mithilfe der Firebase CLI gegen den Firebase Server verbunden und authentifiziert werden. Die Firebase CLI kann durch `npm ci` installiert werden, da das MVP-Projekt diese als Dependency referenziert. An den Install anschließend muss sich mit `firebase login` gegen das Firebase Projekt authentifiziert werden. Hierfür muss der Nutzer im Firebase-Projekt hinterlegt sein. Ist der Nutzer nun authentifiziert, kann dieser über `firebase deploy` die Sourcen auf den Firebase-Server aktualisieren. Eine ausführliche Doku der Firebase-CLI ist [hier](https://firebase.google.com/docs/cli) zu finden.

### Troubleshooting

Es kann passieren, dass beim Öffnen des MVPs über das Firebase Hosting eine leere Seite jedoch mit FavIcon im Tab gezeigt wird.
Der Grund hierfür kann sein, dass der Cache und/oder Cookies nicht korrekt abgeräumt wurden.

Mögliche Problemlösungen:

* Neuladen der Seite
* Löschen des Caches und der Cookies über die Browsereinstellungen
* Öffnen des MVPs über den Incognito Mode (Chrome / Safari) / Private Mode (Edge) / Safe Mode (Firefox)

## Weiterentwicklung des MVPs

Auf diesem Git Repo können lediglich zugelassene Nutzer Änderungen über Pull Requests commiten. Um den MVP weiter zu entwickeln, ist von diesem Repository ein Git-Fork zu machen. Dies stellt eine unabhängige Entwicklung sicher. Zudem liegt so die Hoheit über das Repository somit bei dem späteren Entwicklungsteam.

### Allgemeine Architektur

Der MVP verfolgt einen MVC-Ansatz mit einem extra Service-Layer.
Diese folgenden dem Angular Standard.
Zudem werden die Daten derzeit statisch in einem Repository erzeugt und gehalten. 

Das Modell des MVPs besteht aus den beiden Aggregaten *User* und *Club*. Dem *User* sind dabei verschiedene Profile zugeordnet. An diesen Profilen hängt eine Organisation, die der *User* im Best Pracitce Club vertritt. Zudem hängt an dem Profil ein Fragebogen, den der User für die Organisation ausgefüllt hat.

Am *Club* hängen Mitglieder und Moderatoren. Zudem verfügt der *Club* über eine Liste von Fragen, die beantwortet werden müssen, um den *Club* beizutreten.

Eine detaillierte Übersicht über die Architektur des MVPs ist im Projektbericht beschrieben.

### Modul-Struktur

Nachfolgend wird die Struktur des MVPs dargestellt:

````
/src/              
|- app/
|-- _models/                          # enthält die Modelle des MVPs
|-- clubs-component/                  
|--- club-assessment/                 # Clubs-Selbsteinschätzung Subkomponente
|--- club-measure/                    # Clubs-Maßnahmen Subkomponente
|--- club-member/                     # Clubs-Mitglieder Subkomponente
|--- club-questionnaire/              # Clubs-Fragebogen Subkomponente
|--- club-questions-choose-dialog/    # Fragebogen Auswahl Dialog
|--- club-start-page/                 # Clubs-Startseite Subkomponente
|--- club-clubs/                      # verlinkt Subkomponenten und stellt die Navigation zur Verfügung
|
|-- dashboard/                        # enthält die Dashboard Komponente
|-- login/                            # enthält die Login Komponente
|-- questionnaire/                    # enthält die Nutzer Fragebogen Komponente 
|-- repository/                       # enthält die statische Datenhaltung für Repositories
|-- services/                         # enthält die Services
|-- toolbar/                          # enthält die Toolbar Komponente
|
|- assets/img                         # enthält die Logos etc.
````
