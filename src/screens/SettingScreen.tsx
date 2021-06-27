import React from 'react'
import { Text, View } from 'react-native'

const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SettingScreen</Text>
    </View>
  )
}

SettingScreen.options = {
  topBar: {
    title: {
      text: 'setting origin',
      color: '#e20f0f',
    },
  },
  // background: {
  //   color: '#ffffff',
  // },
  bottomTab: {
    text: 'Settings',
  },
}

export default SettingScreen
