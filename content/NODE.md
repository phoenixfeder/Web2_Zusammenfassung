# NodeJS

## Infos

* Server-Seitige Runtime Plattform für JavaScript Applications
* Performant (event-gesteuert)
* Basiert auf Googles JavaScript engine V8
* Kann Native Interfaces ansprechen (filesystem, geräte)

## Architecture

* API- calls an den node.js container
* event loop fängt calls ab und nutzt async opterationen um die REST (oder SOAP) anzusprechen

=> API

## npm (Node Package Manager)

* dependency hinzufügen (package.json):

    * npm install --save *package-name* (für dependencies)
    * npm install --save-dev *package-name* (für devDependencies)
    * npx cowsay Muh! (führt command aus und fügt es, falls noch nicht vorhanden, den dependencies hinzu)

* Dependency Typen

    * dependencies: benötigt
    * devDependencies: nicht für Prod verwendet, zB Test-libraries
    * peerDependencies: benötigt für ein anderes abhängiges package
    * optionalDependencies: brauch man nicht notwendigerweise

## Versionierung

* Major.Minor.Patch
* Major bei breaking changes
* Minor bei rückwärtskompabilität und neue Features !!
* Patch rückwärtscompatible bugfixes

Floating Patch

* ~1.2.3  = 1.2.x

Floating Minor

* ^1.2.3 = 1.x

Complex Range

* \>=2.1.3 (dies und alles drüber)
* 3.0.0 || 3.1.0 (entweder oder), kombinierbar mit obigen

Version Pinning

* 1.2.3 GENAU diese version

## package-lock.json

* beinhaltet die exakten Versionen der gerade installierten Packages --> gut für versionierung

## sonstige Befehle

* npm outdated (check nach outdated packages)
* npm update (update packages, mit der beachtung von eingestellter Versionierung)
* npm update --dev (auch devDependencies)
* npm update -g (globale updaten)
* npm publish (eigenes package veröffentlichen, benötigt vorher npm login)
* npm run script-name (startet script das in package.json eingestellt wurde)
* npm start (startet default script)
* npm test (startet testlauf)
