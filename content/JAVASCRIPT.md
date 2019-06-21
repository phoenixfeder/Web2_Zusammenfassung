# JavaScript

## Basics

```JavaScript
    //Variable
    let x;

    //Konstante
    const y;
    //Konstanten können nicht überschrieben werden, Felder innerhalb eines Konstanten Objektes schon
```

## Typing

* Weak: Implizite Typenumwandlung
* Dynamic: Typenüberprüfung während Laufzeit
* Duck Typing: Typ wird von Object-Form bestimmt (Methoden und Felder)

## Var vs. Let

* var: ist außerhalb des block scopes verfügbar
* let: ist nur im block scope verfügbar

Eselsbrücke:
"***Let*** it only be inside!"

## Objects

```JavaScript
{
    a: 3,
    b: "zeichenkette",
    //key: value,
}
```

## Array

```JavaScript
[
    1, 2, 3,
]
```

## Template Strings

```JavaScript
    "x" 
    'x’
    `x ${expression}` //expression wird in String geschrieben
```

## Property Access Expression (Elements)

```JavaScript
const persons = [
    {
        name: 'Peter',
        age: 17
    },
    {
        name: 'Astrid',
        age: 31
    }
];
//Folgendes gibt exakt das gleiche aus:
//Square bracket notation
persons[1];
//destructoring assignment
const [, astrid] = persons;
astrid;
```

## Property Access Expression (Properties)

```JavaScript
const astrid = {
    name: 'Astrid',
    age: 31
};
//Folgendes gibt exakt das gleiche aus:
//Dot notation
astrid.name;
//Square bracket notation
astrid['name'];
//destructoring assignment
const { name } = astrid;
name;
```

* Abfrage auf nicht existente Felder ergeben ein **undefined**
* Zugriff auf Feld in einem undefinierten Feld wirft **TypeError**

## Abstract Equality

```JavaScript
    x == y;
```

## Strict Equality

```JavaScript
    x === y;
```

## Abstract vs. Strict Equality

| x | y | == | === |
| - | - | -- | --- |
|undefined|undefined|true|true|
|null|null|true|true|
|true|true|true|true|
|false|false|true|true|
|"foo"|"foo"|true|true|
|{ foo: "bar" }|x|true|true|
|0|0|true|true|
|+0|-0|true|true|
|0|false|true|false|
|""|false|true|false|
|""|0|true|false|
|"0"|0|true|false|
|"17"|17|true|false|
|[1,2]|"1,2"|true|false|
|new String("foo")|"foo"|true|false|
|null|undefined|true|false|
|null|false|false|false|
|undefined|false|false|false|
|{ foo: "bar" }|{ foo: "bar" }|false|false|
|new String("foo")|new String("foo")|false|false|
|0|null|false|false|
|0|NaN|false|false|
|"foo"|NaN|false|false|
|NaN|NaN|false|false|

## Truthy / Falsy

Diese Werte ergeben false:

* false
* 0
* null
* undefined
* NaN
* ""

**Alle anderen Werte ergeben true!**

## Functions

### First-Class Citizens

```JavaScript
//Funktion als Variable
const add = function (x, y) {
    return x + y;
};
add(1, 3);
```

### Constructor Functions

```JavaScript
//Fungiert wie ein Konstruktor einer Klasse
function Person(name) {
    this.name = name;
}
const peter = new Person('Peter');
peter.name;
```

### Classes

```JavaScript
class Person {
    constructor(name) {
        this.name = name;
    }
}
const peter = new Person('Peter');
peter.name;
```

## this

**this** ist an den aktuell gültigen Bereich gebunden.

```JavaScript
function test() {
    this.name = 'Alfred';
    return {
        getName: function () {
            // this der äußeren Funktion ist hier nicht mehr gültig.
            return this.name;
        }
    }
}
test().getName(); // undefined
```

## Fat Arrow Function

Andere schreibweise

(input) => {output}

Hinweis: Input kann leer sein

( ) => {output};

```JavaScript
const add = (a, b) => a + b;
add(3,4); // 7
```

## this2

**this** an dieser Stelle ist nicht gebunden bei Fat Arrow Functions

```JavaScript
function test() {
    this.name = 'Alfred';
    return {
        getName: () => this.name;
    };
}
test().getName(); // Alfred
```

## Higher order Functions

**Da First-Class Citizen:**

Funktionen als Rückgabewert.

```JavaScript
function getMultiplier(multiplier) {
    return x => x * multiplier;
}
getMultiplier(10)(3); // 30
```

Funktionen in Parameterübergabe

```JavaScript
[1, 2, 3].filter(value => value >= 2);
```

## Closure

Innere Funktionen haben zugriff auf äußere Variablen (anders als beim this).

## Generator Functions

Wiederholter Aufruf generiert stuff (aber nur so oft wie yield vorhanden ist!):

```JavaScript
function* generator(number) {
    yield 1;
    yield 10 * number;
}

const gen = generator(10);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 100
console.log(gen.next().value); // undefined
```

## Prototypes

Objekte im Nachgang verändern.

**Beachte: this ist gültig!**

```JavaScript
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi, call me ${this.name}`);
};

const alfred = new Person('Alfred');
alfred.sayHello();
```

## Inheritance (Vererbung)

Im folgenden bekommt Student von Person vererbt:

Ein erstelltes Student-Objekt ist gleichzeitig eine Instanz von Student und auch von Person.

```JavaScript
function Person() {
    this.walk = () => console.log('I can walk.');
}

function Student() {
    Person.call(this);
    this.drink = () => console.log('I can drink.');
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
```

### Mit Klassen

Selber Output wie oben

```JavaScript
class Person {
    walk() {
        console.log('I can walk.');
    }
}

class Student extends Person {
    
    constructor() {
        super();
    }
    
    drink() {
        console.log('I can drink.');
    }
}
```

**Wichtig: class/extends sind nur "syntaktischer Zucker". Unter der Haube steckt Prototyping.**

## Sachen die wie Java sind

* Control Structures: if / else if / else / switch / for / while / do .. while / try .. catch

## Promises

Asynchrone Operationen (alles was > 16 ms (60fps) dauern könnte sollte als asynchron behandelt werden)

```JavaScript
httpService.get('https://example.com/customers', customers => {
    // Callback: Wenn Operation fertig ist, lande hier
    // Customers sind hier bekannt!
}, err => {
    // Operation fertig, hat aber fehler geworfen.
});
```

Problem: "Pyramid of Doom" wenn weitere Callbacks verschachtelt werden baut sich eine eingerückte Pyramide auf

=> "Callback Hell"

Lösung:

## Chaining

Mit Hilfe von Handler wie then, catch, finally

```JavaScript
httpService.get('https://example.com/customers')
.then(customers => {
    //Customers bekannt. Operation damit durchführbar, zB Selektion
}, err => {
    // Fehler auflösung
}).then(selection => {
    //Selektion bekannt, können zB. hier gelöscht o.ä. werden
}).then(() => {
    // wird in Folge ausgeführt
}, err => {
    // Löschen o.ä. fehlgeschlagen
}).finally(() => {
    // wird IMMER ausgeführt auch im Fehlerfall!
});

```

## Convenience Methods

```JavaScript
Promise.all([p1, p2, p3]); // Versprechen löst sich, wenn alle (p1 - p3) auch gelöst wurden
Promise.race([p1, p2, p3]); // Löst sich, sobald das erste (p1 - p3) gelöst wurde
Promise.reject(new Error('boom')); // direktes ablehnen (zB um ein Promise direkt abgelehnt zurückzugeben)
Promise.resolve({ result: 123 }); // direktes lösen (zB um ein Promise direkt gelöst zurückzugeben)
```

Error Handling genauso wie das Chaining.

```JavaScript
Promise.resolve(true)
    .then(value => {
        return Promise.reject('boom');
    }).then(() => {
        // Hier nur dann wenn voriges nicht platzt (was aber in diesem Beispiel passiert)
    }).catch(err => {
        // Hier nur wenn es irgendeinen vorigen Fehler gab (was hier der Fall ist)
        return 'test';
    }).then(value => {
        throw new Error(value); // What’s value here?
    }).finally(() => {
        // Erhält kein Wert, wird allerdings immer ausgeführt.
    });

    //obiges Beispiel wird 'test' im catch block an das then danach geben und Error(test) werfen.
```

## Await / Async

Alle Funktionenaufrufe die länger als 16 ms dauern könnten werden mit await versehen.

Funktionen in denen await verwendet wurde, werden mit async versehen.

=> Syntaktischer Zucker über then und catch

```JavaScript
async function getPlanet() {
    try {
        const response = await fetch('https://swapi.co/api/planets/1');
        const planet = await response.json();
        alert(`Hello my name is ${planet.name}`);
    } catch (ex) {
        err => alert(`Oh no: ${err}`);
    }
}

getPlanet();
```

## Probleme mit Promises

* Nicht abbrechbar
* Promise chain einmalig durchlaufen => nur ein ausgabe Wert
* wird ausgeführt ohne zu schauen ob überhaupt jemand den Wert möchte
* ?
* Nicht behandelte Fehler wird node.js terminieren
* Besser: Observables von Angular

## Modules

Statt alles in eine Datei zu klatschen kann das Programm modularisiert auf verschiedene Dateien aufgeteilt werden und mit export/import anderswo verwendet werden. (Vergleich mit packages/namespaces/ ...)

* Named export (s.o.)

    ```JavaScript
    // math.js
    export function add(a, b) { return a + b; }

    // calculator.js
    import { add } from './math';
    console.log(add(1, 3)); // 4
    ```


* default export (eins pro datei)

    ```JavaScript
    // cube.js
    export default function cube(x) { return x ** 3};

    // calculator.js
    import cube from './cube';
    ```

* re-exports

    ```JavaScript
    export * from './andereDatei';
    ```

* Side-effect import

    ```JavaScript
    import './andereDatei';
    ```