import RPi.GPIO as GPIO 
GPIO.setmode(GPIO.BOARD) 
GPIO.setwarnings(False) 

LED = 7

GPIO.setup(LED, GPIO.OUT) 

state = GPIO.input(LED)
if state 
    GPIO.output(LED, GPIO.LOW)
else
    GPIO.output(LED, GPIO.HIGH)