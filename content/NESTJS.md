# NestJS

* Framework für skalierbare Node.js server applikationen
* [Typescript](./TYPESCRIPT.md)
* Nutzt Express oder Fastify unter der Haube
* Commandline interface für schnelleres erstellen von modulen/services etc.
* Angulars Architektur ähnlich (controllers, pipes, etc)

Ich vermute von den folgenden Kapitel sind für die Prüfung nur wichtig zu wissen:
* Controller
* Service
* Module
* (ohne Gewehr! peng)

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

* sind normale Klassen mit @Injectable() dekorator
 * logik für controller (werden in diesen injected und von dort aus verwendet)

```TypeScript
    @Injectable()
    export class CatsService {
        private readonly cats: Cat[] = [];

        create(cat: Cat) {
            this.cats.push(cat);
        }

        findAll(): Cat[] {
            return this.cats;
        }
    }
```

## Modules

 [Zur Doku](https://docs.nestjs.com/modules)

* Klasse mit @Module() dekorator
* Metadaten für providers, controllers, imports, exports
* es muss EIN root module geben
* sind singletons
* durchreichen durch reexport
* häufig verwendete Module können global bereitgestellt werden

```TypeScript
    @Module({
        controllers: [CatsController],
        providers: [CatsService],
    })
    export class CatsModule {}
```

## Exception Filter

[Zur Doku](https://docs.nestjs.com/exception-filters)

* Vordefinierte Exceptions (custom möglich)
* @Catch() fängt jede unbehandelte Exception
* Können auf Controller oder einzelne methoden, oder sogar global sein

```TypeScript
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        throw new ForbiddenException();
    }
```

## Middleware

[Zur Doku](https://docs.nestjs.com/middleware)

* stehen zwischen request vom client und requestmapping vom server
* haben also zugriff auf request und response objekte
* sie können code ausführen, also änderungen an request oder response vornehmen
* next() übergibt an nächste middleware funktion weiter

```TypeScript
    @Injectable()
    export class LoggerMiddleware implements NestMiddleware {
        use(req: Request, res: Response, next: Function) {
            console.log('Request...');
            next();
        }
    }
```

## Pipes

[Zur Doku](https://docs.nestjs.com/pipes)

* Serverseitige verarbeitung
* Validierung von request
* vorgefertigte wie bei
```TypeScript
    // Im Controller
    @Post()
    speicherKatze(@Body(new ValidationPipe()) createCatDto: CreateCatDto): void {
        //wirft Fehler sobald eine der angaben in dem Objekt nicht konform sind
    }
    

    // In der CreateCatDto-Klasse:
    export class CreateCatDto {
        @IsString()
        readonly name: string;

        @IsInt()
        readonly age: number;

        @IsString()
        readonly breed: string;
    }
```
* eigene Pipe-Klassen brauchen eine transform() methode, welche value und metadata (optional) übergeben werden:
```TypeScript
    transform(value: any) {
        value = value.toUpperCase();
        if (!this.isBreedValid(value)) {
            throw new BadRequestException(`"${value}" is an invalid catbreed`);
        }
        return value;
    }
```

## Guards

[Zur Doku](https://docs.nestjs.com/guards)

## Interceptors

[Zur Doku](https://docs.nestjs.com/interceptors)

## Decorators

[Zur Doku](https://docs.nestjs.com/custom-decorators)

* die @dekorator zieht sich über nestjs und werden massiv eingesetzt
* eigene Dekorator können geschrieben werden:

```TypeScript
// Eigener Decorator um einen User aus dem Request-Objekt zu extrahieren
export const User = createParamDecorator((data, req) => {
    return req.user;
});


// Kann dann so verwendet werden um dies nicht jedes mal von Hand zu machen
@Get()
async findOne(@User() user: UserEntity) {
  console.log(user);
}
```

# Weiteres