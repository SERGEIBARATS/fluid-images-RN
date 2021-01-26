import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constans/constans';

const LoginPage = () => {
  const renderOnePasswordScope = () => {
    return (
      <View
        style={{
          borderBottomColor: '#69728f',
          borderBottomWidth: 1.5,
          width: 46,
          marginHorizontal: 7,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        <Text style={styles.AsteriskStyle}>*</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.headerStyle}>
        <View>
          <Text style={styles.firstText}>MY</Text>
        </View>
        <View>
          <Text style={styles.secondText}>
            login
          </Text>
        </View>
        <View>
          <Text style={styles.thirdText}>password</Text>
        </View>
      </View>
      <View style={styles.passwordField}>
        {renderOnePasswordScope()}
        {renderOnePasswordScope()}
        {renderOnePasswordScope()}
        {renderOnePasswordScope()}

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: { height: SCREEN_HEIGHT / 5,
    backgroundColor: 'rgb(103,114,142)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white'
  },
  secondText: {
    fontSize: 16,
    color: 'white'
  },
  thirdText: {
    fontSize: 12,
    color: 'white'

  },
  passwordField: {
    width: SCREEN_WIDTH,
    height: 99,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 12
  },
  AsteriskStyle: {
    fontWeight: '300',
    fontSize: 65,
    color: '#69728f'
  }


});


export default LoginPage;
