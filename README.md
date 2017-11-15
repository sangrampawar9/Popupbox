# Popupbox# Ambient Popup Box using Particle Photon

The Ambient Popup Box is an Ambient display for your desk which tells you which country is being talked about (in this case USA and India) frequently in twitter during that time. This is a working prototype which is very easy to make and customizable.

![main3](https://cloud.githubusercontent.com/assets/6739924/21127760/740a0baa-c0c3-11e6-8d72-ed1c0dd3e53d.jpg)
![main1](https://cloud.githubusercontent.com/assets/6739924/21127761/74153584-c0c3-11e6-8e72-3288c33f3949.jpg)
![main2](https://cloud.githubusercontent.com/assets/6739924/21127762/74171b92-c0c3-11e6-9f4f-d8a72998a60f.jpg)

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes. See instructable for detailed step by step process of how to make it and notes on how to deploy the project on your system.

### Prerequisites

Things you will need to get this to work:

1. Particle Photon Micro-controller
2. Servo-motors (2)
3. Wires, Acrylic Glue, and a Glue Gun
4. Wood and Acrylic for laser cutting
5. Spandex or some sort of stretchable fabric
6. Illustrator files included with this project for laser cutting.

### Circuit

![5](https://cloud.githubusercontent.com/assets/6739924/21127715/1b2d3642-c0c3-11e6-9019-07ab615fad38.jpg)
![6](https://cloud.githubusercontent.com/assets/6739924/21127716/1b2d6edc-c0c3-11e6-9cca-d6630cb3ffe2.jpg)

### Installing

#### Step 1: Flashing code to the photon

1. Download the project folder from the github repository.
2. Copy the code from the AmbientWorld.ino file.
3. Go to the build.particle.io website and create a new project and paste the code. Compile it and flash it to your photon.
4. Now your photon has the code to make the popup box work.

#### Step 2: Laser Cutting the Case and assembling
2.1 - Laser cut the files “Case Top - circles.ai” and “Case.ai” on wood and as shown in figures 2.1 and 2.2 below.

![0](https://cloud.githubusercontent.com/assets/6739924/21127708/1b1b5e9a-c0c3-11e6-92e9-837c5ccfa2c8.jpg)
Figure 2.1

![2 2](https://cloud.githubusercontent.com/assets/6739924/21127711/1b1cfe9e-c0c3-11e6-86cd-361d1396044c.jpg)
Figure 2.2

2.2 - Cut circles out of an acrylic as well as shown below in figures 2.3 and 2.4. Stick it to the fabric stuck below the case top as shown in fig 2.3. Stick the wooden circles on the top of the case top as shown in figures 2.1 and 2.4. 

![2](https://cloud.githubusercontent.com/assets/6739924/21127710/1b1d0060-c0c3-11e6-9e21-5b767dd26784.jpg)
Figure 2.3

![2 1](https://cloud.githubusercontent.com/assets/6739924/21127712/1b1d3990-c0c3-11e6-85c9-04bce45e8836.jpg)
Figure 2.4

2.3 - Assemble the laser cut wooden case as shown in figures 2.5, 2.6 and 2.7 below.

![4](https://cloud.githubusercontent.com/assets/6739924/21127714/1b2d2d82-c0c3-11e6-926b-a47cfd3f118c.jpg)
Figure 2.5

![3](https://cloud.githubusercontent.com/assets/6739924/21127713/1b1f7070-c0c3-11e6-9190-4ce904a7b769.jpg)
Figure 2.6

![1](https://cloud.githubusercontent.com/assets/6739924/21127709/1b1bf63e-c0c3-11e6-80f7-863909df62d3.jpg)
Figure 2.7

2.4 - Laser cut the “MotorSupport.ai” and “GearRack.ai” files on an acrylic. Assemble and glue the motor support to the back side inside the box (Figure 2.5 and 2.6).

2.5 - The gear and rack are to be attached to the motor to move rack and it hits the popup red and blue circles to make it move up and down. Cut the rack into small pieces and attach the appropriate length to the motor to have adequate movement to push the popup circles at the top of the box.

#### Step 3: Assembling the circuit

3.1 - Connect the circuit diagram as shown in the below figures 2.8 and 2.9. 

![5](https://cloud.githubusercontent.com/assets/6739924/21127715/1b2d3642-c0c3-11e6-9019-07ab615fad38.jpg)
Figure 2.8

![6](https://cloud.githubusercontent.com/assets/6739924/21127716/1b2d6edc-c0c3-11e6-9cca-d6630cb3ffe2.jpg)
Figure 2.9

3.2 - Connect the data (Orange) wire from the motors to D0 and D1 pins of photon. Connect the ground wires (brown) to the ground pin of the photon and the supply (Red wire) to the Vin pin of photon.



## Debugging and making it work

1.	Copy the app2.js and index.html files from the downloaded github repository into a new folder.
2.	Open the index.html file in any web browser and open the console window and check if the words “America” or “India” is showing up.
3.	Next open the terminal and type “particle serial monitor” and check if the words “America” or “India” is being printed out. There will be delays as it would only print out the words whenever a new tweet contains it. So, delays are okay.
4.	The words should be printed out irrespective of the delays. If they are being printed out your popup box should work fine.
5.	Despite the words being printed out and the popup box is not working, check the circuit wiring again.
6.	Connect the photon to a power source and check if the popup box is working. If the rack attached to the motors are not pushing the popup wooden circles on the top of the box then you may want to do minor adjustments to the attachment of the rack to the motor to make the movement push the popup wooden circles up.


### Break down into end to end tests

The above tests are used to make sure that the input and output are working fine in collaboration with casing it inside the wooden box.

## Deployment

No additional requirements are necessary except that you should flash the code from "AmbientWorld.ino" to the photon and then open the "index.html" file to view the visualization.

## Built With

* Particle Photon Maker Kit - [https://store.particle.io/]
* Laser Cutter
* Pubnub

## Images

![1](https://cloud.githubusercontent.com/assets/6739924/21127709/1b1bf63e-c0c3-11e6-80f7-863909df62d3.jpg)
![main3](https://cloud.githubusercontent.com/assets/6739924/21127760/740a0baa-c0c3-11e6-8d72-ed1c0dd3e53d.jpg)

## Authors

* Saish Menon - RIT
* Sangram Pawar - RIT

## License

Open Licence

## Acknowledgments

* Pubnub.com, particle.io
* Chandan Mahapatra
* Valerie Okpoko
* Eric Wang
