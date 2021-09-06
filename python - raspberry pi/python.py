import pymongo
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

cursor = col.find()
print('Type of cursor:',type(cursor))
list_cur = list(cursor)
json_data = dumps(list_cur, indent = 2)
print (json_data)
