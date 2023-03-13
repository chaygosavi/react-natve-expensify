import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChevronLeftIcon as SparklesIconOutline} from 'react-native-heroicons/outline';
import {colors} from '../theme';

const BackButton = () => {
  return (
    <TouchableOpacity className="bg-blue-500">
      <SparklesIconOutline color={colors.heading} fill="black" size={42} />
    </TouchableOpacity>
  );
};

export default BackButton;
