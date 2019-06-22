# Death-List

## Install

Im root-verzeichnis:

```
npm install
```

Inhalt:
* Pipes
* Module
* Service
* Controller

## Testen

Importiere deathList.postman_collection.json ins Postman

## Api

* GetAll:

  GET localhost:3000/

* Get:

  GET localhost:3000/0

* Add:

  POST localhost:3000/
  
  BODY:
  ```JSON
  {
    "name": "{Name}",
    "reason": "{Grund}",
    "isDeath": false
  }
  ```
* Update:

  PUT localhost:3000/
  
  BODY:
  ```JSON
  {
    "id": 0,
    "isDeath": true
  }
  ```

* Delete:

  DELETE localhost:3000/0
  