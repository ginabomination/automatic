import time 
import board
import busio
import adafruit_ads1x15.ads1115 as ADS
from adafruit_ads1x15.analog_in as AnalogIn

i2c = busio.I2C(board.SCL, board.SDA)
ads = ADS.ADS1115(i2c)
chan = AnalogIn(ads, ADS.P0)

print ("{:>5}\t{:>5}".format("raw", "v"))

while True

def on_forever():
if chan.voltage > 1.600
  print ("met") #replace/insert function for pump to run here
  time.sleep(18000) #sleep for 5 hrs
else:
  time.sleep(18000)
