/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Navigation } from 'react-native-navigation'

// 注意点 1: 使用 rn 的 statusBar, iOS会报错

const App = props => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
              // options: {
              //   topBar: {
              //     title: {
              //       text: 'Settings',
              //     },
              //   },
              // },
            },
          })
        }
      />
    </SafeAreaView>
  )
}

App.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#328124',
    },
  },
  bottomTab: {
    text: 'Home',
  },
}

const styles = StyleSheet.create({})

export default App
