# rn-starter

### Project Installation

```bash
npm install
npm run start
```
---
### Navigation Fix

React Navigation Fix
updated 2-9-2020
React Navigation has recently released a major update to v5 with breaking changes. We will not be using this version and will instead continue to use the current stable v4 release (As of now at v4.1.1)
Installation
1. Install React Navigation
```sh
npm install react-navigation
```
2. Install Dependencies
```sh
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
3. Install React Navigation Stack
```sh
npm install react-navigation-stack @react-native-community/masked-view
```
4. Start the app and clear cache with 
```sh
npm start -c
```
Errors?
If you are still seeing errors and complaints about packages, do the following:
```sh
rm -r node_modules
rm package-lock.json
expo upgrade
npm start -c
```
Update Imports
Our imports in the upcoming lecture will now look like this:
```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```
