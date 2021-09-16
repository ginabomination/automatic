import pymongo
from bson.json_util import dumps, loads
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

for x in col.find():
  print(x['pump'])

for y in col.find():
  print(y['soil'])
  soil = (y['soil'])
  print (soil)
