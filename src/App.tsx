import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import storeFactory from './Store';
import MainRoot from './Router';

const store = storeFactory();


const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.body}>
        <Provider store={store}>
          <MainRoot />
        </Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});

export default App;
