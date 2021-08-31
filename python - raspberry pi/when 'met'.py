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
  if chan.voltage < 1.640:
    print ("{:>5\t{:>5.3f".format(chan.value, chan.voltage)
    time.sleep(0.5)
  else:
    print ("dfsgwrgwieujsfjikwheriutfhw4iue4hrt")
