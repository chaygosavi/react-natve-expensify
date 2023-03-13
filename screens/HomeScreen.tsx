import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';

const items = [
  {
    id: 1,
    place: 'Gujrat',
    country: 'INDIA',
  },
  {
    id: 2,
    place: 'Gujrat',
    country: 'INDIA',
  },
  {
    id: 3,
    place: 'Gujrat',
    country: 'INDIA',
  },
  {
    id: 4,
    place: 'Gujrat',
    country: 'INDIA',
  },
];

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View className="flex-1 ">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center ">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigate('AddTrip')}
            className="p-2 px-3 bg-white border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 430,
          }}>
          <FlatList
            ListEmptyComponent={
              <EmptyList message="You haven't recorded any trips yet" />
            }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            className="mx-1"
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            data={items}
            renderItem={({item}) => (
              <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                <View>
                  <Image source={randomImage()} className="w-36 h-36 mb-2" />
                  <Text className={`${colors.heading} font-bold`}>
                    {item.place}
                  </Text>
                  <Text className={`${colors.heading} text-xs`}>
                    {item.country}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
