Dringend hier selbst die Todo-App nachbauen um die Zusammenhänge wirklich zu verstehen!

- [Angular](#Angular)
  - [SPA](#SPA)
  - [PWA](#PWA)
  - [Angular-CLI](#Angular-CLI)
  - [Kernstrukturen von Angular](#Kernstrukturen-von-Angular)
  - [Bindings](#Bindings)
    - [Data-Bindings](#Data-Bindings)
    - [Property-Binding](#Property-Binding)
    - [Event-Binding](#Event-Binding)
      - [Eigenes Event](#Eigenes-Event)
  - [Pipes](#Pipes)
  - [Directives](#Directives)
  - [HostBinding](#HostBinding)
  - [HostListener](#HostListener)
  - [Dependency Injection](#Dependency-Injection)
    - [InjectionTokens](#InjectionTokens)
  - [Strucutural Directives](#Strucutural-Directives)
  - [Observables](#Observables)

# Angular

Angular ist ein SPA-Framework, welches auch zur Entwicklung von PWAs beigezogen werden kann.

## SPA

Steht für Single-Page-Application Framework, sprich nur aus einem einzigen HTML-Dokument besteht und deren Inhalte dynamisch nachgeladen werden.

Vorteile:

-   Performant (Fat-Clients (lade alles während initial Aufruf) & keine serverseitige Seitennavigation)
-   Offlinefunktionalität
-   Keine besonderen Serveranforderungen

Nachteile:

-   Rechenintensive Logik kann nur auf einem Server ausgeführt werden (sinnvollerweise)
-   Ergebnisse und einzelne Logikschritte beim Client => teils ungeheimer Code

## PWA

Steht für progressive Web-App. Ziel von PWAs ist es Webanwendungen stärker an native Apps anzulehnen, was durch Offline-Kapazitäten (ServiceWorker.js im Cache) und Weiterentwicklungen verschiedner Technologien wie Push API oder bald File API erreicht werden soll. Die Konfiguration findet über die WebApp Manifest statt.

## Angular-CLI

1.  Installieren mit `npm i -g @angular/cli`
2.  Angular Project anlegen mit `ng new appName`
3.  Entwicklungsserver starten mit `ng serve`

## Kernstrukturen von Angular

| Bezeichner | Kommando                       | Funktion                                      | Wiederverwendbar? | UI-bezogen?                              |
| ---------- | ------------------------------ | --------------------------------------------- | ----------------- | ---------------------------------------- |
| Pipe       | `ng g pipe pipeName`           | Transformiert gebundenen Wert für Anzeige     | ✅                 | ✅                                        |
| Directive  | `ng g directive directiveName` | Manipuliert Verhalten / Aussehen              | ✅                 | ✅                                        |
| Service    | `ng g service serviceName`     | Umsetzung von Infrastruktur bzw. Domänenlogik | ✅                 | ❌                                        |
| Component  | `ng g component componentName` | Benutzerdefiniertes HTML-Element              | ✅                 | ✅                                        |
| Modul      | `ng g module moduleName`       | Gruppierung von Angular-Bausteinen            | ✅                 | ❌ (enthält selbst jedoch UI-Komponenten) |

## Bindings

### Data-Bindings

Instanzvariable einer Component, die in der Anzeige bei Änderungen ohne Neuladen der Seite aktualisiert wird.

Component-Logik:

```TypeScript
@Component(/* BLub */)
export class AppComponent {
  public value= 'Hello!';
}
```

In Component-Anzeige:

```HTML
<p>{{ value }}</p>
```

### Property-Binding

Übergibt Daten in die Component! Kann auf Standardattribute oder in eigene Instantvariablen übergeben werden.

```HTML
<div [style.backgroundColor]="color">Test</div>
```

Oder auch:

```HTML
<app-blub [name]="Hanswurst"></app-blub>
```

```TypeScript
@Component(/* BLub */)
export class BlubComponent {
  @Input()
  public name: string;
}
```

### Event-Binding

Gibt Daten nach draußen weg!

```HTML
<app-fasel (click)="onClick($event)"></app-fasel>
```

```TypeScript
@Component(/* Blub */)
export class BlubComponent {
  public onClick(event: MouseEvent): void {
    console.log(`${event} wurde mir aus app-fasel hochgereicht! Selbstverständlich hätte mir app-fasel auch was anderes liefern können...`);
  }
}
```

#### Eigenes Event

Fasel-Component:

```HTML
<label (click)="onDone($event)">Mach mich fertig!</label>
```

```TypeScript
@Output()
public done = newEventEmitter<any>();
public fasel: Fasel;
...
onDone() {
  this.done.emit(fasel);
}
```

Blub-Component:

```HTML
<app-fasel (done)="handleOnDone($event)"></app-fasel>
```

```TypeScript
...
handleOnDone(fasel: Fasel) {
  console.log(`Mir wurde das Fasel Objekt ${$event} übergeben!`);
}
```

## Pipes

Werten auf Data-Bindings wie folgt angewendet (fügt wenn angegeben eine Prefix hinzu):

```TypeScript
{{ stringValue | prefix: 'Hallo ' }} // Hallo Wert_Aus_stringValue
```

Ausschnitt aus dazugehöriger Pipe-Datei:

```TypeScript
transform(value: string, args?: string): string {
  if (args) {
    return `${args}${value}`;
  }
  return `${value}`;
}
```

Standardgemäß kommt Angular mit einigen Pipes, zum Beispiel:

-   uppercase
-   lowercase
-   date
-   number
-   percent
-   currency
-   json

## Directives

Hängen sich mit auf eine Component und arbeiten in der Regel mit HostListener und HostBinding um Manipulationen vorzunehmen.

```HTML
<app-blub myDirective (done)="foo($event)"></app-blub>
```

## HostBinding

Ändern die Attribute des gerade betroffenen Hosts. Bei Directives sprich wo draufgehangen, bei Component stets selbst.

```TypeScript
@HostBinding('style.backgroundColor')
public color = 'hotpink';
```

Im Sinne von `myDirective` würde dieses HostBinding app-blub pink färben.

## HostListener

Lauscht auf getriggerte Events auf dem betroffenen Hosts. Bei Directives sprich wo draufgehangen, bei Component stets selbst.

```TypeScript
@HostListener('done')
onDone() {
  console.log(`Auf app-blub wurde (done) getriggert!`);
}
```

## Dependency Injection

Ziel: High Coupling, Low Cohesion! Eine Komponente sollte nicht die Abhängigkeiten für sich selbst managen, sondern diese übergeben bekommen (Inversion of Control, IoC). Beispiel: Verschiedene MwSt Berechnungen je nach Land. `@Injectable` markiert eine Klasse als fähig, Abhängigkeiten injeziert zu bekommen. Abhängigkeiten können anschleißen über den Konstruktor festgelegt werden. 

Dependency Injection kann u.a. auch nur in bestimmten Modulen stattfinden oder global (root).

```TypeScript
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    public httpClient: HttpClient
  ) { }
}
```

Obige Klasse bekommt demnach den HttpClient injeziert. Dies ist möglich da mit `@Injectable` markiert wurde.

### InjectionTokens

Konstante Singletons.

```TypeScript
export const APP_NAME = new InjectionToken<string>('app-name');

@NgModule({
  providers: [{ provide: APP_NAME, useValue: 'Mycool app' }]
})
export class TaxModule {
  constructor(@Inject(APP_NAME)appName: string) {}
}
```

## Strucutural Directives

Directives zum (konditionellen) Anzeigen von Informationen.

\*ngIf:

```HTML
<button (click)="toggle()">Toggle</button>
<div *ngIf="show">I’m visible!</div>
```

ng-container:

```HTML
<ng-container [ngSwitch]="user.language">
  <div *ngSwitchCase="DE">Hallo, {{ user.name}}!</div>
  <div *ngSwitchCase="ES">¡Hola, {{ user.name}}!</div>
  <div *ngSwitchDefault>Hello, {{ user.name}}!</div>
</ng-container>
```

\*ngFor:

```HTML
<li *ngFor="let todo of todos">{{ todo.title }}</li>
```

## Observables

Daten kommen über Zeit und selten synchron. Für ein flüssiges Ergebnis sollte alles über 16ms (=> 60 fps) asynchron verlaufen.

|             | Callback | Promise | Observable                                       |
| ----------- | -------- | ------- | ------------------------------------------------ |
| Execution   | Eager    | Eager   | Lazy (Code wird nur durch .subscribe ausgeführt) |
| Values      | Multiple | Single  | Multiple                                         |
| Cancellable | No       | No      | Yes                                              |
| Composable  | No       | Yes     | Yes                                              |

=> Datentypen sind jetzt Observables-Templates (aus rxjs):

```TypeScript
getAll(): Observable<Todo[]> {
  console.log('Get all');
  return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
}
```

Chaining (bsp. nach anlegen wieder Datensätze holen):

```TypeScript
onSubmit() {
  this.todos$ = this.todoService.create(new Todo(this.title)).pipe(
    switchMap(() => this.todoService.getAll())
  );
}
```

So würde der Code jedoch nicht funktionieren, da wird nicht das Observable subscriben (Lazy Execution)! Abhilfe schafft die async-Pipe:

```HTML
<li *ngFor="let todo of todos$ | async">{{ todo.title }}</li>
```
