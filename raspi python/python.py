import pymongo


import RPi.GPIO as GPIO
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


ledpin = 24
GPIO.setmode(GPIO.BOARD)
print ("pin setup")
GPIO.setup(ledpin, GPIO.OUT)
GPIO.setwarnings(False)


for PlaceholderPump in col.find():
  pump = (PlaceholderPump['pump'])
  print (pump)

for PlaceholderSoil in col.find():
  soil = (PlaceholderSoil['soil'])
  print (soil)
  

print ("{:>5}\t{:>5}".format("raw", "v"))

while True

def on_forever():
if chan.voltage > 1.600
  GPIO.output(ledpin, True)
  print ("pump on")
  time.sleep(pump)
  GPIO.output(ledpin, False)
  print ("pump off")
  time.sleep(18000) #sleep for 5 hrs
else:
  time.sleep(7200) #sleep for 2 hrs
