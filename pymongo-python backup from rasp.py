from pymongo import MongoClient
client = MongoClient('mongob=srv://ginags:2tripleX@database.bt4bd.mongodb.net/test)
print("Connection Successful")
client.close()
