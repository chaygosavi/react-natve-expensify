import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

type ScreenWrapperProps = {children: JSX.Element};

const ScreenWrapper = ({children}: ScreenWrapperProps) => {
  let statusBarHeight =
    Platform.OS === 'android'
      ? 0
      : StatusBar.currentHeight
      ? StatusBar.currentHeight
      : 30;
  return (
    <View
      style={{
        paddingTop: statusBarHeight,
      }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
