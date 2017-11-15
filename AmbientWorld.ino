Servo myservo;
Servo myservo1;

void setup() {
Particle.function("tweet", led);
myservo.attach(D0);
myservo1.attach(D1);
}

void loop() {

}

int led(String command)
{
 // look for the matching argument "coffee" <-- max of 64 characters long
 if(command == "America")
 {
   // some example functions you might have
   //activateWaterHeater();
   //activateWaterPump();
   Serial.print("America");
   myservo.write(140);
    delay(1000);
    myservo.write(50);
    
 }
 else if(command == "India"){
     Serial.print("India");
     myservo1.write(140);
    delay(1000);
    myservo1.write(50);
 }
 else return -1;
}