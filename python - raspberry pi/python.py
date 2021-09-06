import pymongo
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

cursor = db.col.find()

def f(x):
    return x['pump']

t1 = soil()
blackset = set(map(f, cursor))
print(soil() - t1)
