/**
 * @format
 */

import { Navigation } from 'react-native-navigation'
import App from './App'
import SettingScreen from './src/screens/SettingScreen'

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#ffffff',
  },
  topBar: {
    title: {
      color: '#ea9e07',
    },
    backButton: {
      color: '#ea9e07',
    },
    background: {
      color: '#fff',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
})

Navigation.registerComponent('Home', () => App)

Navigation.registerComponent('Settings', () => SettingScreen)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  })
})
