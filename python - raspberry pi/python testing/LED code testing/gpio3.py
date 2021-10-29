import RpPi.GPIO as GPIO
import time
 
ledPin = 11     # GPIO 17
 
delay = 1   # 1s
loopCnt = 100
 
def main():
    for i in range(LoopCnt):
        GPIO.output(ledPin, GPIO.HIGH) 
        time.sleep(delay)  
        GPIO.output(ledPin , GPIO.LOW)  
        time.sleep(delay)   
 
def setup():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(ledPin, GPIO.OUT)    
    GPIO.output(ledPin, GPIO.LOW)
     
if __name__ == '__main__':
    setup()
    main()
    GPIO.cleanup() 