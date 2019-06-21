# Eigenentwicklungen

## Components

* app-Component (angepasst): Zeigt jedes Todo mit `*ngFor` gepipet mit `async` (automatisches subscriben des Observable) an, hat Eingabefeld zum Hinzufügen neuer Todo und behandelt sowie unten genannte Event-Emitter und das Hinzufügen neuer Todos mittels unten beschriebenen Service (als Singleton im Konstruktor hergeholt).
* todo-Component (`ng g component todo`): Zeigt Titel, Checkbox (done-Event-Emitter gibt geändertes Todo hoch), Delete Button (deleted-Event-Emitter gibt `id` des zu löschenden Todo hoch).

## Services

* todo-Service (`ng g service todo`): Hat als Singleton den HttpClient, welcher zur Implementierung der einzelnen CRUD-Methoden dient. HttpClient in Angular zwingend über Observable!

## Directives

* space-top-Directive (`ng g directive spaceTop`): Über das HostBinding `margin-top` auf `20px` gesetzt. Anwendungsbeispiel: Eingabefeld für neues Todo um Abstand zu der Todo-List zu bekommen.
* done-listener-Directive (`ng g directive doneListener`): Über HostListener wird auf das Event `done` (z.B. aus todo-Component) gelauscht und dessen hochgegebener Wert `$event`(hier ein Todo) in die Konsole geloggt. Eher ein 'change-listener', da er auch beim unchecken der Box loggt ;)

## Pipes

* done-Pipe (`ng g pipe done`): Transformiert ein String (+ ✔) abhängig vom Parameter. Anwendungsbeispiel: `{{ todo.title | done: todo.done }}`. Falls done, dann setze ✔ hinten dran.