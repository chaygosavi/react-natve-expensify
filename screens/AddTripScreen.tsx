import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackButton from '../components/BackButton';
import {colors} from '../theme';

const AddTripScreen = () => {
  return (
    <View className="flex-1 bg-red-500">
      {/* <View className="flex justify-between h-full">
        <View> */}
      <BackButton />
      {/* <Text className={`${colors.heading} text-xl font-bold text-center`}>
            Add Trip
          </Text>
        </View>
        <View></View>
      </View> */}
    </View>
  );
};

export default AddTripScreen;

const styles = StyleSheet.create({});
