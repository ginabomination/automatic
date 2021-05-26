from pymongo import MongoClient
client = MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')

for db in client.list_databases():
    print(db)
