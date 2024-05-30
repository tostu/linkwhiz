/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5wukrvvsnwtvj0c",
    "created": "2024-05-29 22:57:35.914Z",
    "updated": "2024-05-29 22:57:35.914Z",
    "name": "link",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mgptoqtb",
        "name": "destination",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "\\b(?:https?://|www\\.)\\S+\\b"
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5wukrvvsnwtvj0c");

  return dao.deleteCollection(collection);
})
