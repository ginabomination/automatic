import pymongo
import time 
import board
import busio
import adafruit_ads1x15.ads1115 as ADS
from adafruit_ads1x15.analog_in as AnalogIn

client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

i2c = busio.I2C(board.SCL, board.SDA)
ads = ADS.ADS1115(i2c)
chan = AnalogIn(ads, ADS.P0)

for PlaceholderPump in col.find():
  print ('pump:')
  pump = (PlaceholderPump['pump'])
  print (pump)

for PlaceholderSoil in col.find():
  print ('soil:')
  soil = (PlaceholderSoil['soil'])
  print (soil)

print ("{:>5}\t{:>5}".format("raw", "v"))

while True
def forever():
  if chan.voltage > soil
    print ('*pump runs a cycle*')
    time.sleep(18000)
  else:
    time.sleep(18000) #sleep for 5 hrs
