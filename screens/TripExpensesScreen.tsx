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
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';

const items = [
  {
    id: 1,
    title: 'ate sandwitch',
    amount: 4,
    category: 'food',
  },
  {
    id: 2,
    title: 'ate sandwitch',
    amount: 4,
    category: 'food',
  },
  {
    id: 3,
    title: 'ate sandwitch',
    amount: 4,
    category: 'food',
  },
  {
    id: 4,
    title: 'ate sandwitch',
    amount: 4,
    category: 'food',
  },
];

const TripExpensesScreen = ({
  navigation: {navigate},
  route: {
    params: {place, country},
  },
}) => {
  return (
    <View className="flex-1 ">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-2 left-0">
            <BackButton />
          </View>
          <View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              {place}
            </Text>
            <Text className={`${colors.heading} text-xs  text-center`}>
              {country}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-center items-center  rounded-xl mb-4">
          <Image
            source={require('../assets/images/7.png')}
            className="w-80 h-80"
          />
        </View>
        <View className=" space-y-4">
          <View className="flex-row justify-between items-center ">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigate('AddExpense')}
              className="p-2 px-3 bg-white border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 430,
            }}>
            <FlatList
              ListEmptyComponent={
                <EmptyList message="You haven't recorded any expenses yet" />
              }
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              data={items}
              renderItem={({item}) => <ExpenseCard {...item} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TripExpensesScreen;

const styles = StyleSheet.create({});
