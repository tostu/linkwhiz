/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wukrvvsnwtvj0c")

  // update
  collection.schema.addField(new SchemaField({
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
      "pattern": "\\b(?:https?://)?(?:www\\.)?\\S+\\.\\S+\\b"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wukrvvsnwtvj0c")

  // update
  collection.schema.addField(new SchemaField({
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
      "pattern": "\\bhttps?://(?:www\\.)?\\S+\\.\\S+\\b"
    }
  }))

  return dao.saveCollection(collection)
})
