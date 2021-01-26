import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'


declare global {
  interface Console {
    tron: any
  }
}

// AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
let reactotron: any = { log: () => {} } // for release builds

if (__DEV__) {
  reactotron = Reactotron
    .configure({ name: 'nike' })
    .use(reactotronRedux())
    .useReactNative()
    .connect()

  Reactotron.clear?.()
}
console.tron = Reactotron

export default reactotron
