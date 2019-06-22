# REST API

Keine Ahnung ob er so danach fragt, da wir uns mehr um NestJS und Angular gekümmert haben

## HTTP-Server - Hello World

```JavaScript
    const { createServer } = require('http');
    const server = createServer();

    server.on('request', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello world!');
        res.end();
    });

    server.listen(8080);
```

localhost:8080 wirft Hallo Welt aus

## Infos

* SPA Architecture (SPA = **S**ingle-**P**age-Web**A**nwendung)
* SPA auf Clientseite sendet calls an Server (das was wir in Angular gemacht haben)
* Server verarbeitet calls und sendet response (das was wir mit NestJS gemacht haben)


## REST

* **Re**presentational **S**tate **T**ransfer
* Repräsentation in JSON (oder XML, HTML) = Ressources
* Genutzt für Client-Server Kommunikation
* HTTP Verbs definieren Zugriffsart

## URL

|https|://|astrid|@|passwort|:|www.example.com|:|8080|/|search.html|?|q=test&page=2|#|description|
|-----|---|------|-|--------|-|---------------|-|----|-|-----------|-|-------------|-|-----------|
|Scheme||User||Passwort||Hostname||Port||Path||Querystring||Fragment|

## HTTP Verbs

* idempotent(i.e. can be called several times without different outcomes)
* safe (i.e. don’t modify resources)

|Verb|Aktion|Idempotent|Safe|
|----|------|----------|----|
|GET|readonly zugriff|&#10003;|&#10003;|
|POST|erschafft ressource|&#10007;|&#10007;|
|PUT|updates bestimmte ressource|&#10003;|&#10007;|
|DELETE|löscht ressource|&#10003;|&#10007;|
|HEAD|prüft nach existenz einer ressource|&#10003;|&#10003;|
|OPTIONS|welche Verbs können benutzt werden auf ressource|&#10003;|&#10003;|

## Error Handling

|Code|Typ|Info|
|----|---|----|
|1xx|Information|Werden vom Browser ignoriert aber macht mit der verarbeitung weiter|
|2xx|Successful|Erfolgreiche Requests, Standard 200 OK|
|3xx|Redirect|Weiterleitung, Browser führen diese durch. Super für Suchmaschinen optimierung, da diese auch die entgültige Adresse speichern|
|4xx|Client Error|User macht blödsinn oder Daten sind nicht mehr da wo sie sein sollten|
|5xx|Server Error|Programmierer hat mist gebaut|