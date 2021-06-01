import pymongo
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
if "Sustain" in dblist:
  print("Sustain exists.")

db = client["Sustain"]
print(db.list_collection_names())
