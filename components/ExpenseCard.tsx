import {View, Text} from 'react-native';
import React from 'react';
import {categoryBg, colors} from '../theme';

const ExpenseCard = ({amount, title, category}) => {
  return (
    <View
      style={{backgroundColor: categoryBg[category]}}
      className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl">
      <View>
        <Text className={`${colors.heading} font-bold`}>{title}</Text>
        <Text className={`${colors.heading} text-xs`}>{category}</Text>
      </View>
      <View>
        <Text>Rs. {amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;
