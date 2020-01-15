# React-Native-Demo

# Dependencies
React-Native application requires following items with recommended versions:
- Node - 10.0.0
- Watchman - 4.9.0
- react-native-cli - 2.0.1
- Android:
	- Java - 1.8.0
	- SDK (installed via Android Studio) - version 28 is mandatory
- iOS:
	- Cocoapods - 1.5.3

# Running app
- After project is fetched from repozitory, run 'npm install' to install node modules
- Start bundler: run in terminal 'react-native start'
Android:
	- Open emulator or connect a device. If device, activate developer mode in it and enable USB debugging 
	- Run in separate terminal window 'react-native run-android'
iOS:
	- If via device, add a provisioning profile in XCode project
	- Run in separate terminal window 'react-native run-ios' OR open XCode, select target device/simulator, and hit 'Run' button