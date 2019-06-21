# NestJS

* Framework für skalierbare Node.js server applikationen
* [Typescript](./TYPESCRIPT.md)
* Nutzt Express oder Fastify unter der Haube
* Commandline interface für schnelleres erstellen von modulen/services etc.
* Angulars Architektur ähnlich (controllers, pipes, etc)

## Controller

[Zur Doku](https://docs.nestjs.com/controllers)

* Empfangen requests und senden response an Client

```TypeScript
    @Controller('cats')             //Decorator
    export class CatsController {
        @Get()                      //Dekorator für HTTP Verb
        findAll(): string {
            // gibt alle Katzen aus
        }
    }
```

Parameter der Dekoratoren @Controller('cats') gibt Pfad an für den Controller.
In diesem Beispiel gilt er für GET: localhost:3000/cats

* @Get('/langhaar') gilt in diesem Beispiel dann für GET localhost:3000/cats/langhaar
* @Get('/:typ') gilt für localhost:3000/cats/*variablerwert*
* Um so einen variablen Wert in der funktion zu verwenden:
    ```TypeScript
        @Get('/:typ')
        findAll(@Param('typ') typ: string): string {
            console.log(typ);
        }
    ```
* Es gibt neben @Param() noch @Body() für werte aus dem request-body und @Req() für das gesamte request-objekt

 ## Providers

 [Zur Doku](https://docs.nestjs.com/providers)