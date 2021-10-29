import pymongo
import RPi.GPIO as GPIO
import time
import board
import busio
import adafruit_ads1x15.ads1015 as ADS
from adafruit_ads1x15.analog_in import AnalogIn

client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test')
dblist = client.list_database_names()
db = client["Sustain"]
collist = db.list_collection_names()
col = db["Moisture"]

i2c = busio.I2C(board.SCL, board.SDA)
ads = ADS.ADS1015(i2c)
chan = AnalogIn(ads, ADS.P0)
ledpin = 24

print ("pin setup")
GPIO.setup(ledpin, GPIO.OUT)
GPIO.setwarnings(False)

for PlaceholderPump in col.find():
    pump = (PlaceholderPump['pump'])
    print (pump)
    
for PlaceholderSoil in col.find():
    soil = (PlaceholderPump['soil'])
    print (soil)

soilF = float(soil)
print ('Soil =', soilF)

print ("{:>5}\t{:>5}".format ("raw", "v"))

print("{:>5}\t{:>5.3f}".format(chan.value, chan.voltage))

count = 0

b = 3

while count <= 10:
    if b > 2:
        print ("pump off")
        time.sleep(2000)
    else:
        print('rest')
        time.sleep(200)
    


