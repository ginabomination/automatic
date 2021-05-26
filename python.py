import pymongo
client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
mydb = client["database"]
mycol = mydb["Sustain"]
myquery = { "pump": { "$gt": "1" } }

mydoc = mycol.find(myquery)

for x in mydoc:
  print(vhgvhgvhjgv) 

print ('finished program run')


