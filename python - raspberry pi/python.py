import pymongo
from bson.json_util import dumps, loads
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

for PlaceholderPump in col.find():
  print ('pump:')
  pump = (PlaceholderPump['pump'])
  print (pump)

for PlaceholderSoil in col.find():
  print ('soil:')
  soil = (PlaceholderSoil['soil'])
  print (soil)
