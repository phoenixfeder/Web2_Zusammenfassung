- [Klausur 2018](#Klausur-2018)
  - [Aufgabe 1: JavaScript I (10 Punkte)](#Aufgabe-1-JavaScript-I-10-Punkte)
    - [a) Objekte](#a-Objekte)
    - [b) Array-Zugriffe](#b-Array-Zugriffe)
    - [c) Objekt-Zugriffe](#c-Objekt-Zugriffe)
    - [d) Higher-Order-Functions](#d-Higher-Order-Functions)
  - [Aufgabe 2: JavaScript II (11 Punkte)](#Aufgabe-2-JavaScript-II-11-Punkte)
    - [a) Fakten](#a-Fakten)
    - [b) Vererbung](#b-Vererbung)
    - [c) Promises](#c-Promises)
  - [Aufgabe 3: Web-APIs (15 Punkte)](#Aufgabe-3-Web-APIs-15-Punkte)
    - [a) Safe/Idempotent](#a-SafeIdempotent)
    - [b) Wein-API mit NestJS](#b-Wein-API-mit-NestJS)
  - [Aufgabe 4: Authentifizierung/Autorisierung (10 Punkte)](#Aufgabe-4-AuthentifizierungAutorisierung-10-Punkte)
    - [a) Authentifizierung](#a-Authentifizierung)
    - [b) Autorisierung](#b-Autorisierung)
    - [c) Grant Flows](#c-Grant-Flows)
    - [d) Erkennen des Grant Flows](#d-Erkennen-des-Grant-Flows)
    - [e) Vorteil / Nachteil Resource Owner Password Credentials](#e-Vorteil--Nachteil-Resource-Owner-Password-Credentials)
    - [f) JWTs](#f-JWTs)
    - [g) JWTs Aufbau](#g-JWTs-Aufbau)
  - [Aufgabe 5: SPA & Angular-Templates (10 Punkte)](#Aufgabe-5-SPA--Angular-Templates-10-Punkte)
    - [a) SPAs](#a-SPAs)
    - [b) Data-Binding](#b-Data-Binding)
    - [c) Pipes](#c-Pipes)
    - [d) Event-Binding](#d-Event-Binding)
    - [e) Property-Binding](#e-Property-Binding)
  - [Aufgabe 6: Angular & Dependency Injection (10 Punkte)](#Aufgabe-6-Angular--Dependency-Injection-10-Punkte)
    - [a) Directives](#a-Directives)
    - [b) c) d) Injection Tokens](#b-c-d-Injection-Tokens)
    - [e) Gründe für Dependency Injection](#e-Gr%C3%BCnde-f%C3%BCr-Dependency-Injection)
    - [Aufgabe 7: Angular & Web-APIs (17 Punkte)](#Aufgabe-7-Angular--Web-APIs-17-Punkte)
    - [a) Service](#a-Service)
    - [b) Wein-Service in Angular mit TS](#b-Wein-Service-in-Angular-mit-TS)
    - [c)](#c)
  - [Aufgabe 8: Routing und Formulare (7 Punkte)](#Aufgabe-8-Routing-und-Formulare-7-Punkte)

# Klausur 2018

Mit einer Webanwendung wollen Sie Ordnung in Ihre Weinsammlung bringen. Sie beginnen mit den folgenden drei Weinen:

-   Schwarzriesling aus der Pfalz (bah, Pfalz), 2012
-   Merlot aus Baden, 2015
-   Grauburgunder aus der Pfalz (noch immer bah), 2009

## Aufgabe 1: JavaScript I (10 Punkte)

### a) Objekte

Deklarieren Sie in gültigem JavaScript eine Variable und initialisieren Sie diese mit einer Auflistung, welche die drei oben aufgeführten Weine mit Sorte, Anbaugebiet und Jahrgang erfasst (3 Punkte).

```TypeScript
const weine = [
  {
    name: 'Schwarzriesling',
    gebiet: 'Pfalz',
    jahr: 2012
  },
  {
    name: 'Merlot',
    gebiet: 'Baden',
    jahr: 2015
  },
  {
    name: 'Grauburgunder',
    gebiet: 'Pfalz',
    jahr: 2009
  }
];
```

### b) Array-Zugriffe

Nennen und zeigen Sie zwei Wege in gültigem JavaScript, um das zweite Datenobjekt aus der Auflistung aus Aufgabenteil a) in einer eigenen Variable abzulegen (2 Punkte).

```TypeScript
// Square-Bracket-Notation:
const merlot = weine[1];

// Array-Destructuring-Assignment:
const [, auchMerlot] = weine;
```

### c) Objekt-Zugriffe

Nennen und zeigen Sie drei Wege in gültigem JavaScript, um auf die Jahrgangseigenschaft des Datenobjektes aus Aufgabenteil b) zuzugreifen (3 Punkte). 

```TypeScript
// Dot-Notation:
const merlotJahr = merlot.jahr;

// Square-Bracket-Notation:
const auchMerlotJahr = merlot['jahr'];

// Object-Destructuring-Assignment:
const { jahr } = merlot;
```

### d) Higher-Order-Functions

Definieren Sie kurz den Begriff "Funktion höherer Ordnung" und demonstrieren Sie diesen in gültigem JavaScript anhand der Auflistung aus Aufgabenteil a) (2 Punkte).

Höherer Ordnung bedeutet, dass Funktionen auch nur Objekte sind und dadurch folgendes möglich ist:

-   Funktion hat eine Funktion als Wiedergabewert
-   Bzw. Funktion nimmt Funktion als Paramter über

```TypeScript
const weinePfalz = weine.filter(weinObjekt => weinObjekt.gebiet === 'Pfalz');
// Alternativ: weinObjekt => weinObjekt.gebietSchlechterAlsDasRheinland()
```

## Aufgabe 2: JavaScript II (11 Punkte)

### a) Fakten

Bitte geben Sie an, ob die unten genannten Aussagen wahr oder falsch sind. Für jede richtig zugeordnete Aussage gibt es 0,5 Punkte (insgesamt 5 Punkte).

| Aussage                                                                                                     | Wahr | Falsch |
| ----------------------------------------------------------------------------------------------------------- | ---- | ------ |
| Klassen sind syntaktischer Zucker über Generatorfunktionen.                                                 |      | ✅      |
| In JavaScript wird grundsätzlich zwischen Fließkomma- und Ganzzahlwerten unterschieden.                     |      | ✅      |
| NaN (not a number) is truthy.                                                                               |      | ✅      |
| Die Abstract Equality erkennt zwei Werte als gleich an, auch wenn sich ihr Typ unterscheidet.               | ✅    |        |
| "this" trägt in "Fat Arrow"-Funktionen die Bedeutung des umschließenden Kontextes.                          | ✅    |        |
| Einer "const"-Variable zugewiesene Arrays oder Objekte werden unveränderlich (immutable).                   |      | ✅      |
| Mit den Schlüsselwörtern "let" und "const" deklarierte Variablen sind nur innerhalb des Block-Scope gültig. | ✅    |        |
| "undefined" ist ein gültiges Schlüsselwort in JavaScript.                                                   |      | ✅      |
| Eine Konsolenausgabe lässt sich mit der Methode "console.log" erzeugen.                                     | ✅    |        |
| Fehler können mithilfe des Schlüsselwortes "throw" geworfen werden.                                         | ✅    |        |

### b) Vererbung

Geben Sie bitte in gültigem JavaScript an: Eine Klasse "Person" mit der Methode "walk" und eine Klasse "Weinkenner" mit der Methode "taste", die von der ersten Klasse erbt. (3 Punkte).

```TypeScript
class Person {
  constructor() { /* Foo(); */ }

  walk() {
    console.log('🚶‍');
  }
}

class Weinkenner extends Person {
  constructor() { /* Bar(); */ }

  taste() {
    console.log('🍷');
  }
}

const allrounder = new Weinkenner();
allrounder.walk();  // 🚶 ‍
allrounder.taste(); // 🍷
```

### c) Promises

Nachstehend finden Sie eine Promise. Bitte definieren Sie diesen Begriff kurz und geben Sie an, welche Ausgaben bei Ausführung des nachstehenden Ausdrucks in der Konsole angezeigt werden (3 Punkte). 

```TypeScript
Promise.reject('boom')
  .then(value => console.log(value)) // Übersprungen da rejected
  .catch(err => console.log(`error: ${err}`)) // Hier beruhigt er sich wieder
  .then(value => console.log('finalizing…'))
  .finally(() => console.log('done!')); 
```

Definition: Bei einen Promise handelt es sich um ein asynchrones Objekt, welches ein Versprechen darstellt, welches im späteren Verlauf resolved (alles in Ordnung) oder rejected (Fehler) werden kann. Ein Promise wird ausgeführt, sobald die dazugehörige Stelle im Code erreicht wird (Eager).

Ablauf:
1\. `error: boom`
2\. `finalizing...`
3\. `done`

## Aufgabe 3: Web-APIs (15 Punkte)

### a) Safe/Idempotent

Bitte kreuzen Sie an, welche der nach folgenden HTTP-Verben safe und/oder idempotent sind (2,5 Punkte):

-   Safe: Verändert die Ressource nicht
-   Idempotent: Bei erneuter Ausführung ändert sich die Antwort nicht

| Verb    | Safe | Idempotent |
| ------- | ---- | ---------- |
| GET     | ✅    | ✅          |
| PUT     |      | ✅          |
| POST    |      |            |
| DELETE  |      | ✅          |
| OPTIONS | ✅    | ✅          |
| HEAD    | ✅    | ✅          |

### b) Wein-API mit NestJS

Implementieren Sie mithilfe des Frameworks NestJS (ursprg. "Restify") unter Node.js eine RESTful API,die folgende Operationen unterstützt:

1.  Abrufen aller bekannten Weine aus Ihrer Weinsammlung
2.  Abrufen eines einzelnen Weines anhand eines eindeutigen Bezeichners
3.  Hinzufügen eines neuen Weines zur Weinsammlung
4.  Aktualisieren eines Weines anhand eines eindeutigen Bezeichners
5.  Löschen eines Weines anhand eines eindeutigen Bezeichners

Für bessere Handhabung eine Weinklasse `wein.ts` mit `nest g class wein`:

```TypeScript
export class Wein {
  constructor(
    public name: string,
    public gebiet: string,
    public jahr: number,
    public id?: number,
  ) {}
}
```

Service `wein.service.ts` mit `nest g service wein`:

```TypeScript
import { Wein } from './../wein';
import { Injectable } from '@nestjs/common';

let fakeId = 0; // Simulation einer einmaligen ID

@Injectable()
export class WeinService {
  private weinStore = new Map<number, Wein>();

  // Return value von Update, Add und Delete der Aufgabenstellung entnehmen!

  getAll(): Wein[] {
    return Array.from(this.weinStore.values());
  }

  get(id: number): Wein {
    return this.weinStore.get(id);
  }

  addWein(wein: Wein): void {
    this.weinStore.set(fakeId, new Wein(wein.name, wein.gebiet, wein.jahr, fakeId++));
  }

  updateWein(wein: Wein): void {
    this.weinStore.set(wein.id, wein);
  }

  deleteWein(id: number): void {
    this.weinStore.delete(id);
  }
}
```

Controller `wein.controller.ts` mit `nest g controller wein`:

```TypeScript
import { Wein } from './../wein';
import { WeinService } from './wein.service';
import { Controller, Get, Param, HttpCode, Post, HttpStatus, Body, NotFoundException, Put, Delete } from '@nestjs/common';

@Controller('wein')
export class WeinController {
  constructor(public weinService: WeinService) {}

  @Get()
  getAll() {
    return this.weinService.getAll();
  }

  @Get('/:id')
  get(
    @Param('id') id: string) {
    const wein = this.weinService.get(+id);

    if (wein) {
      return wein;
    }

    throw new NotFoundException();

  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body('name') name: string,
    @Body('gebiet') gebiet: string,
    @Body('jahr') jahr: number,
  ) {
    this.weinService.addWein(new Wein(name, gebiet, jahr));
  }

  @Put('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('gebiet') gebiet: string,
    @Body('jahr') jahr: number,
  ) {
    this.weinService.updateWein(new Wein(name, gebiet, jahr, +id));
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.weinService.deleteWein(+id);
  }
}
```

## Aufgabe 4: Authentifizierung/Autorisierung (10 Punkte)

### a) Authentifizierung

Definieren Sie den Begriff "Authentifizierung" (1 Punkt).

AuthN:

-   Ist der Benutzer derjenige der er behauptet zu sein?
-   => Kennzeichnet Identität des Benutzers!

### b) Autorisierung

Definieren Sie den Begriff "Autorisierung" (1 Punkt).

AuthZ:

-   Ist der Benutzer berechtigt zu tun, was er tun möchte?
-   => Kennzeichnet die Berechtigungen eines Benutzers für bestimmte Aktionen!

### c) Grant Flows

Nennen Sie jeweils einen Anwendungstyp, der sich für die Verwendung mit den nachfolgenden OAuth-2.0-Flows eignet (4 Punkte):

| Flow                                      | Anwendungsbeispiel                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------ |
| Resource Owner Password Credentials Grant | Wenn dem Client vollständig vertraut wird (Überreichen von Name und Passwort!) |
| Authorization Code Grant                  | Serverseitig ausgeführte WebApp                                                |
| Client Credentials Grant                  | Server-zu-Server Authentifizierung                                             |
| Implicit Grant                            | Clientseitig ausgeführte WebApp (SPA)                                          |

### d) Erkennen des Grant Flows

```JSON
{
  "username": "alice@example.com",
  "password": "passwort123",
  "audience": "https://example.com/api",
  "scope": "read:wine-collection",
  "client_id": "my-wine-guide",
  "client_secret": "geheim"
}
```

=> Resource Owner Password Credentials Grant Flow, da Fluss von Passwort und Username.

### e) Vorteil / Nachteil Resource Owner Password Credentials

Ist der in Aufgabenteil d)gezeigte OAuth-2.0-Flow zur Verwendung in clientseitig ausgeführten Webanwendungen empfehlenswert? Bitte begründen Sie Ihre Antwort kurz. (1,5 Punkte)

Nein, da hier das Passwort und der Nutzername nicht durch die Anwendung geheim gehalten werden kann. Sprich eine Anwendung, die sich unter der gleichen client-id und secret ausgibt könnte die hier gesendeten Daten abfangen.

### f) JWTs

In einer Textdatei entdecken Sie die nachfolgende Zeichenkette, deren Aufbau Sie aus der Vorlesung kennen. Worum handelt es sich hierbei? (0,5 Punkte) 

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIYWxsbyI6IldpciBob2ZmZW4sIGxlcm5lbiBnZWh0IGd1dCIsIldpZXNvIjoiTWFjaHN0IGR1IGRpciBkZW4gQXVmd2FuZCwgZGVuIEpXVCB6dSBkZWtvZGllcmVuPyEiLCJTY2jDtm4iOiJEYXNzIGVzIGRpY2ggc28gYnJlbm5lbmQgaW50ZXJlc3NpZXJ0IiwiU2Now7ZuZW4iOiJHcnXDnyEifQ.fqNbMCEs_LVlUnMOpxqfHgMLi3f2k0LdswYUFo9a3ww`

=> JWT: JSON Web Token

### g) JWTs Aufbau

Bitte nennen Sie in Stichpunkten, in welche Bestandteile Sie die Zeichenkette aus Aufgabenteil f) zerlegen können. 

Jeweils getrennt durch die Punkte!
1\. Header
2\. Payload
3\. Signature

## Aufgabe 5: SPA & Angular-Templates (10 Punkte)

### a) SPAs

Nennen Sie einen Vorteil und einen Nachteil von Single- Page Web Applications (2 Punkte). 

-   Vorteil: Performance, da alles beim Client ausgeführt werden kann und so einfache Logik nicht mehr über den Server erfolgt.
-   Nachteil: Fat-Applications! Sprich beim initialen Aufruf der SPA müssen sehr viele Daten geladen werden, da zum Beispiel die Seiten nicht auf Serverseite navigiert werden.

### b) Data-Binding

b)	Nachstehend sehen Sie die Implementierung einer Komponentenklasse. Bitte zeigen Sie, wie der Name des dort definierten Weines im zugehörigen HTML-Template eingefügt werden kann. Bitte benennen Sie das Konstrukt (2 Punkte). 

`wine.component.ts`:

```TypeScript
@Component({ 
  selector: 'app-wine', 
  template: './wine-component.html' 
}) 
export class WineComponent { 
  public wine = { name: 'Grauburgunder' }; 
} 
```

`wine.component.html`:

```HTML
<!-- Data-Binding -->
{{ wine.name }}
```

### c) Pipes

Der Name des Weines soll in GROßBUCHSTABEN ausgegeben werden. Bitte zeigen Sie, wie dies im HTML- Template definiert werden kann. Bitte benennen Sie das eingesetzte Konstrukt (2 Punkte). 

`wine.component.html`:

```HTML
<!-- Pipe -->
{{ wine.name || uppercase }}
```

### d) Event-Binding

In der nachfolgenden Komponente möchten Sie sich auf das Ereignis "click" einer Schaltfläche binden. Bei einem Klick auf die Schaltfläche soll die Methode "onClick" aufgerufen werden, 	die 	in 	der 	Komponentenklasse 	definiert 	ist. Vervollständigen Sie bitte das Code-Fragment im Template entsprechend und benennen Sie das eingesetzte Konstrukt (2 Punkte).

`wine.component.ts`:

```TypeScript
@Component({
  selector: 'app-wine', 
  template: './wine.component.html' 
}) 
export class WineComponent { 
  public buttonColor = 'limegreen'; 

  public onClick(): void { /* */ } 
} 
```

`wine.component.html`:

```HTML
<!-- Event-Binding -->
<button (click)="onClick()">Click</button> 
```

### e) Property-Binding

Weiterhin möchten Sie die Textfarbe des Buttons (CSS-Eigenschaft "color") über das in der Komponente definierte Feld "buttonColor" setzen. Vervollständigen Sie bitte das Code-Fragment im Template entsprechend und benennen Sie das eingesetzte Konstrukt (2 Punkte). 

`wine.component.html`:

```HTML
<!-- Property-Binding -->
<button [style.color]="buttonColor" (click)="onClick()">Click</button> 
```

## Aufgabe 6: Angular & Dependency Injection (10 Punkte)

### a) Directives

a)	Nachstehend sehen Sie ein benutzerdefiniertes Attribut "appColor" auf einem DOM-Knoten. Um welches Angular- Konstrukt handelt es sich dabei? Nennen Sie zwei Aspekte, in denen sich dieses von einer Komponente unterscheidet (2,5 Punkte). 

```HTML
<app-wine appColor="blue"></app-wine>
```

=> Directive!

-   Hat kein eigenes Template oder Stylesheet
-   Ist kein eigenes DOM-Element, sondern ändert das bestehende.

### b) c) d) Injection Tokens

In Ihrer Anwendung möchten Sie den Mehrwertsteuersatz über die Dependency Injection verwalten, sodass dieser bei einer möglichen Änderung zentral geändert werden kann. Zeigen Sie nachstehend:

-   Mit welchem Hilfskonstrukt ein nicht-klassenbasierter Wert dem DI-Container bekannt gemacht werden kann (2 Punkte). 
-   Wie der Wert in den DI-Container eingehängt wird (Wein wird derzeit mit 19% MwSt. besteuert, 2 Punkte).
-   Wie der Wert über den DI-Container angefordert werden kann. (direkt im AppModule, 2 Punkte).

Mit Injection Tokens!

`irgendwo.ts`

```TypeScript
export const VAT = new InjectionToken<number>('VAT')
```

`app.module.ts`

```TypeScript
import { VAT } from 'PFAD_ZU/irgendwo.ts';

@NgModule({ 
  providers: [{
    provider: VAT, 
    useValue: 0.19 
  }] 
}) 
export class AppModule { 
  constructor (@Inject(VAT) private readonly vat: number ) { 
    console.log( this.vat ); 
  } 
} 
```

### e) Gründe für Dependency Injection

Nennen Sie drei Gründe, warum man Dependency 
Injection in Anwendungen einsetzen sollte (1,5 Punkte). 

-   Low Coupling
-   High Cohesion
-   Wiederverwendbarkeit bzw. Modularität

### Aufgabe 7: Angular & Web-APIs (17 Punkte)

Ihre RESTful-Webschnittstelle zur Verwaltung von Wein- datensätzen haben Sie auf einem Webserver veröffentlicht. Darauf möchten Sie nun aus Ihrer Angular-Anwendung heraus zugreifen. 

### a) Service

Aus der Vorlesung kennen Sie ein Anuglar-Architektur- mittel, das die Implementierung fachlicher, nicht-UI-bezogener Softwarebausteine erlaubt und sich somit zur Kapselung des Datenzugriffs eignet. Wie nennt man dieses Konstrukt (0,5 Punkte)? 

=> Service

### b) Wein-Service in Angular mit TS

Implementieren Sie nun die Datenzugriffsschicht. Fügen Sie Methoden hinzu, um die nachfolgenden Operationen abzubilden. Geben Sie jeweils die Typen der Parameter und der Rückgabe an. Verwenden Sie zum Zugriff auf die Webschnittstelle den HttpClient und fordern Sie diesen über die Dependency Injection an (16 Punkte).
Die jeweiligen URLs, an die Sie die Anfragen senden müssen, sind nachstehend wiedergegeben. Wählen Sie passende HTTP-Verben zum Zugriff auf die Ressourcen. Import-Direktiven sowie die Behandlung von Fehlern können Sie vernachlässigen.

1.  Abrufen aller Weine <https://wine.invalid/wines>
2.  Abrufen eines einzelnen Weines über seinen eindeutigen Bezeichner <https://wine.invalid/wines/ID> 
3.  Hinzufügen eines Weines <https://wine.invalid/wines>
4.  Bearbeiten eines Weines <https://wine.invalid/wines/ID>
5.  Löschen eines Weines <https://wine.invalid/wines/ID>

```TypeScript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wein } from './wein';

@Injectable({
  providedIn: 'root'
})
export class WeinService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  // Return-Typen abhängig von Aufgabenstellung oder Geschmack

  public getAll(): Observable<Wein[]> {
    return this.httpClient.get<Wein[]>('<https://wine.invalid/wines> ');
  }

  public get(id: number): Observable<Wein> {
    return this.httpClient.get<Wein>(`https://wine.invalid/wines${id}`);
  }

  public add(wein: Wein): Observable<void> {
    return this.httpClient.post<void>('<https://wine.invalid/wines'>, wein);
  }

  public update(wein: Wein): Observable<void> {
    return this.httpClient.put<void>(`https://wine.invalid/wines/${wein.id}`, wein);
  }

  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`https://wine.invalid/wines/${id}`);
  }

}
```

### c)

Bitte kreuzen Sie an, auf welcher Ebene die Klasse `WeinService` in den Dependency-Injection-Container eingefügt wird (0,5 Punkte). 

| Ebene            |     |
| ---------------- | --- |
| Anwendungsebene  | ✅   |
| Modulebene       |     |
| Komponentenebene |     |

Da in `root` provided.

## Aufgabe 8: Routing und Formulare (7 Punkte)

N/A
