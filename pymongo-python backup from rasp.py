from pymongo import MongoClient
client = MongoClient('mongodb=srv://ginags:2tripleX@database.bt4bd.mongodb.net/test)
print("Connection Successful")
client.close()
