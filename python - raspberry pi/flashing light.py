import RPi.GPIO as GPIO
import time 

ledpin = 24
GPIO.setmode(GPIO.BOARD)
print ("pin setup")
GPIO.setup(ledpin, GPIO.OUT)
GPIO.setwarnings(False)

var = 1

print ("loop started")

while var==1 :
  GPIO.output(ledpin, False)
  time.sleep(.5)
  GPIO.output(ledpin, True)
  time.sleep(.5)
