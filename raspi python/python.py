import pymongo # import pymongo, distribution containing tools for working with mongodb
import RPi.GPIO as GPIO # import resources for GPIO pins
import time # to use time.sleep
import board
import busio
import adafruit_ads1x15.ads1015 as ADS
from adafruit_ads1x15.analog_in import AnalogIn # importing soil moisture sensor

client = pymongo.MongoClient('mongodb+srv://ginags:2tripleX@database.bt4bd.mongodb.net/test') # connecting to the database
dblist = client.list_database_names()
db = client["Sustain"] # connecting to the cluster
collist = db.list_collection_names()
col = db["Moisture"] # connectining to the collection


i2c = busio.I2C(board.SCL, board.SDA) # connecting to i2c
ads = ADS.ADS1015(i2c)
chan = AnalogIn(ads, ADS.P0) # soil moisture readings
pin = 23 # pin used to control pump

print ("pin setup")
GPIO.setup(pin, GPIO.OUT)
GPIO.setwarnings(False)

count = 0

while count <= 10:   
    for PlaceholderPump in col.find():
        pump = (PlaceholderPump['pump'])
        print ('pump acquired =', pump)
        # isolating pump value 
        
    for PlaceholderSoil in col.find():
        soil = (PlaceholderPump['soil'])
        print ('soil acquired =', soil)
         # isolating soil value
    
    time.sleep(1800) # 30 min allows a wait period between submitting data to allow for the user to make changes encase mistakes have occured
    
    soilF = float(soil)
    print ('soil as float =', soilF)
    # turning str to float
    
    pumpI = int(pump)
    print ('pump as integer =', pumpI)
    # turning str to int
    
    if chan.voltage < soilF: # if soil moisture voltage reading is less than soil value
        GPIO.output(pin, GPIO.HIGH) # gpio voltage on
        print ("pump on")
        time.sleep(pumpI) # time pump is on, corresponding with pump value
        GPIO.output(pin, GPIO.LOW) # gpio voltage off
        print ("pump off")
        time.sleep(16200) # 4.5 hrs wait period till next soil moisture check
        print('looping')
        
    else:
        print('rest')
        time.sleep(16200) # 4.5 hrs wait period till next soil moisture check
        print('looping')
