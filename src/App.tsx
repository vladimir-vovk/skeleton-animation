import { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Contacts } from 'src/Contacts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Contacts />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
