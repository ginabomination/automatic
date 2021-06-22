import pymongo
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
if "Sustain" in dblist:
  print("Sustain exists.")

db = client["Sustain"]
collist = db.list_collection_names()
if "Moisture" in collist:
  print("Moisture exists.")
print (collist)

col = db["Moisture"]
x = col.find_one()
print(x)

