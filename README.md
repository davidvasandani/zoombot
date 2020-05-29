# Teamsbot
Smarter clone of [Matt Reed's Zoombot](https://github.com/mcreed/zoombot) ;) Have your virtual avatar attend Teams meetings for you by responding with answers from [QnA-maker](https://www.qnamaker.ai/). It uses Artyom.js under the covers which is pretty cool. Check out the blog post https://blog.somecreativity.com.


## Setup
- Clone this repo or download/extract files on your computer.
- Replace the images in /img with your pics.
- Put all these files on a server running https:// otherwise Chrome throws security errors and can't access your microphone.
- Visit your Teamsbot https:// URL in Chrome
- Turn on Teamsbot with the button in the top left and it will start listening for all those key phrases
- Create a virtual webcam with Chrome as the source. I used ManyCam to do this.
- Set your Teams camera to "ManyCam Virtual Webcam"
- Turn up your speakers
- Talk to your Teamsbot <3

### Creating a website in IIS and hosting Teamsbot
Enable IIS in Computer Management in Windows
![Enable IIS](/setup/Windows_EnableIIS.png)

Create website in IIS
![Create website](/setup/NewWebsite1.png)

Point the website to your local clone of repo
![Point to local clone](/setup/NewWebsite2.png)

Change the permission on your repo to allow reads from everyone
![Point to local clone](/setup/NewWebsite3.png)

## Credits
- Thank you, Matt Reed for building Zoombot 🤜🤛
- Special thanks to Carlos Delgado for making [Artyom.js](https://github.com/sdkcarlos/artyom.js/) 🙏
