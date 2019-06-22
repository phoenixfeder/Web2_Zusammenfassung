# Klausur 2018

Mit einer Webanwendung wollen Sie Ordnung in Ihre Weinsammlung bringen. Sie beginnen mit den folgenden drei Weinen:

* Schwarzriesling aus der Pfalz (bah, Pfalz), 2012
* Merlot aus Baden, 2015
* Grauburgunder aus der Pfalz (noch immer bah), 2009

## Aufgabe 1
JavaScript I (10 Punkte)

### a)

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

### b)
Nennen und zeigen Sie zwei Wege in gültigem JavaScript, um das zweite Datenobjekt aus der Auflistung aus Aufgabenteil a) in einer eigenen Variable abzulegen (2 Punkte).

```TypeScript
// Square-Bracket-Notation:
const merlot = weine[1];

// Array-Destructuring-Assignment:
const [, auchMerlot] = weine;
```

### c)
Nennen und zeigen Sie drei Wege in gültigem JavaScript, um auf die Jahrgangseigenschaft des Datenobjektes aus Aufgabenteil b) zuzugreifen (3 Punkte). 

```TypeScript
// Dot-Notation:
const merlotJahr = merlot.jahr;

// Square-Bracket-Notation:
const auchMerlotJahr = merlot['jahr'];

// Object-Destructuring-Assignment:
const { jahr } = merlot;
```

### d)
Definieren Sie kurz den Begriff “Funktion höherer Ordnung” und demonstrieren Sie diesen in gültigem JavaScript anhand der Auflistung aus Aufgabenteil a) (2 Punkte).

Höherer Ordnung bedeutet, dass Funktionen auch nur Objekte sind und dadurch folgendes möglich ist:
* Funktion hat eine Funktion als Wiedergabewert
* Bzw. Funktion nimmt Funktion als Paramter über

```TypeScript
const weinePfalz = weine.filter(weinObjekt => weinObjekt.gebiet === 'Pfalz');
// Alternativ: weinObjekt => weinObjekt.gebietSchlechterAlsDasRheinland()
```

## Aufgabe 2
JavaScript II (11 Punkte)

### a)
Bitte geben Sie an, ob die unten genannten Aussagen wahr oder falsch sind. Für jede richtig zugeordnete Aussage gibt es 0,5 Punkte (insgesamt 5 Punkte).

| Aussage                                                                                                     | Wahr | Falsch |
| ----------------------------------------------------------------------------------------------------------- | ---- | ------ |
| Klassen sind syntaktischer Zucker über Generatorfunktionen.                                                 |      | ✅      |
| In JavaScript wird grundsätzlich zwischen Fließkomma- und Ganzzahlwerten unterschieden.                     |      | ✅      |
| NaN (not a number) is truthy.                                                                               |      | ✅      |
| Die Abstract Equality erkennt zwei Werte als gleich an, auch wenn sich ihr Typ unterscheidet.               | ✅    |        |
| “this” trägt in “Fat Arrow”-Funktionen die Bedeutung des umschließenden Kontextes.                          | ✅    |        |
| Einer “const”-Variable zugewiesene Arrays oder Objekte werden unveränderlich (immutable).                   |      | ✅      |
| Mit den Schlüsselwörtern “let” und “const” deklarierte Variablen sind nur innerhalb des Block-Scope gültig. | ✅    |        |
| “undefined” ist ein gültiges Schlüsselwort in JavaScript.                                                   |      | ✅      |
| Eine Konsolenausgabe lässt sich mit der Methode “console.log” erzeugen.                                     | ✅    |        |
| Fehler können mithilfe des Schlüsselwortes “throw” geworfen werden.                                         | ✅    |        |

### b)
Geben Sie bitte in gültigem JavaScript an: Eine Klasse “Person” mit der Methode “walk” und eine Klasse “Weinkenner” mit der Methode “taste”, die von der ersten Klasse erbt. (3 Punkte).

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

### c)
Nachstehend finden Sie eine Promise. Bitte definieren Sie diesen Begriff kurz und geben Sie an, welche Ausgaben bei Ausführung des nachstehenden Ausdrucks in der Konsole angezeigt werden (3 Punkte). 

```TypeScript
Promise.reject(‘boom’)
  .then(value => console.log(value)) // Übersprungen da rejected
  .catch(err => console.log(`error: ${err}`)) // Hier beruhigt er sich wieder
  .then(value => console.log(‘finalizing…’))
  .finally(() => console.log(‘done!’)); 
```

Definition: Bei einen Promise handelt es sich um ein asynchrones Objekt, welches ein Versprechen darstellt, welches im späteren Verlauf resolved (alles in Ordnung) oder rejected (Fehler) werden kann. Ein Promise wird ausgeführt, sobald die dazugehörige Stelle im Code erreicht wird (Eager).

Ablauf:
1. `error: boom`
2. `finalizing...`
3. `done`

## Aufgabe 3
Web-APIs (15 Punkte)

### a)
Bitte kreuzen Sie an, welche der nach folgenden HTTP-Verben idempotent sind (2,5 Punkte):

* Safe: Verändert die Ressource nicht
* Idempotent: Bei erneuter Ausführung ändert sich die Antwort nicht

| Verb    | Safe | Idempotent |
| ------- | ---- | ---------- |
| GET     | ✅    |            |
| PUT     |      | ✅          |
| POST    |      | ✅          |
| DELETE  |      | ✅          |
| OPTIONS | ✅    |            |
| HEAD    | ✅    |            |

### b)
Implementieren Sie mithilfe des Frameworks NestJS (ursprg. “Restify”) unter Node.js eine RESTful API,die folgende Operationen unterstützt:

1. Abrufen aller bekannten Weine aus Ihrer Weinsammlung
2. Abrufen eines einzelnen Weines anhand eines eindeutigen Bezeichners
3. Hinzufügen eines neuen Weines zur Weinsammlung
4. Aktualisieren eines Weines anhand eines eindeutigen Bezeichners
5. Löschen eines Weines anhand eines eindeutigen Bezeichners

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
  private weinStore = new Map&lt;number, Wein>();

  // Return value von Update, Add und Delete der Aufgabenstellung entnehmen!

  getAll(): Wein\[] {
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

## Aufgabe 4
Authentifizierung/Autorisierung (10 Punkte)

### a)
Definieren Sie den Begriff “Authentifizierung” (1 Punkt).

AuthN:
* Ist der Benutzer derjenige der er behauptet zu sein?
* => Kennzeichnet Identität des Benutzers!

### b)
Definieren Sie den Begriff “Autorisierung” (1 Punkt).

AuthZ:
* Ist der Benutzer berechtigt zu tun, was er tun möchte?
* => Kennzeichnet die Berechtigungen eines Benutzers für bestimmte Aktionen!

### c)