import pymongo
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

x = db.col.find( {}, { "soil": 1, "pump": 1 } )
print(x)

query = { "pump": "" };
p = db.collection("Moisture").find(query).toArray()

print(p)
