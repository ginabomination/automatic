import pymongo
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]
query = { 'pump': "" };
x = db.col.find(query)
print(query)
print(x)

cur = col.find()  
cur (x)
for doc in cur:
    print(doc)

