import pymongo
from bson.json_util import dumps, loads
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

for service in col.find({},{ "_id": 0,"pump": 1}):
  print(service['pump'])

# from {'pump': 6666} -----> just 6666 as a result
