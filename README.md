# calme
Calculate for Me
mock screen https://mockingbot.in/app/1FNObxC2vz0Re0inRfu9
ionic create https://creator.ionic.io/share/3f9614ea0aff

### Build instruction on OSX
### System requirement
* Java SDK (>=1.7)
* NodeJS
* Android SDK (API 22 and set ANDROID_HOME correctly)
* Bower (npm install -g bower) 

 
### Step
```
1. npm install -g cordova ionic
2. git clone https://github.com/dst-hackathon/calme.git
3. cd callme
4. bower update
5. ionic platform add android
6. ionic build
```

### Binary download (Nov 7,2015)
https://drive.google.com/file/d/0B1-QqU-DaQr_UDhXSWo1U3BTSjA/view?usp=sharing

### Run on iOS Device
1. ```ionic platform add ios```
2. ```ionic build ios```
3. ```ionic run ios```
4. Go to your installed directory ```${base_dir}/calme/platforms/ios```
5. Open Xcode project (CalMe.xcodeproj)
6. On Terminal, run ```cordova prepare```
7. Xcode > General
    7. *Bundle Identifier*: Make sure you have unique value
    7. *Team*: Select your Apple ID account
    7. Click Fix Issue
8. Connect your iOS device to your computer
9. Xcode > Top Left > Select Your Device > Press Play button

