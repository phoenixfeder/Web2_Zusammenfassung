# TypeScript

## Typen angeben

```TypeScript
    let text: string;

    enum Color { RED, GREEN, BLUE };
```

## Interfaces

```TypeScript
    interface IntfLabel {
        label: string;
    }

    function printLabel(labeledObj: IntfLabel) {
        console.log(labeledObj.label);
    }

    let myObj = { label: "Meins!" }
    printLabel(myObj);
```

## Klassen

Klassen wir in Java

* public protected und private sind möglich
* readonly member möglich
* abstract klassen möglich

## Funktionen

Typisierung!

```TypeScript
    function add(zahl1: number, zahl2: number): number {
        return zahl1 + zahl2;
    }
```

Besondere Typen:

```TypeScript
    //never wenn funktion nicht terminiert
    //any für jeden Typ
    function infi(egal: any): never {
        while(true){
            // ...
        }
    }

    //void als Rückgabelos
    //? als optional 

    function names(vorname: string, nachname?: string): void {
        while(true){
            // ...
        }
    }

    // Rest Parameter

    function numb(zahl: number, ...restliche: number[]): void {
        //..
    }
    numb([1,2,3,4,5,6]);
    // zahl = 1
    //restliche = [2,3,4,5,6]
```

## Generics

```TypeScript
    function identity<T> (arg: T) : T {
        return arg;
    }

    let output = identity<string>("myString");
    let output = identity("myString"); // nimmt dennoch automatisch string an, wegen arg
```

## Enum

```TypeScript
    enum Himmelsrichtung {
        N = "Nord",
        O = "Ost",
        S = "Süd",
        W = "West",
    }
    console.log(Himmelsrichtung.N); // Nord
```

## Type Inference

ToDo .. Folie ist komisch

## Contextual Typing

ToDo .. ebenso.. schätze es geht um Kontext Typen und deren gültigkeit im Editor

## Type Compability

Editor wirft fehler bei Typenverletzung, Compiler hat kein Problem, da immer noch JavaScript!