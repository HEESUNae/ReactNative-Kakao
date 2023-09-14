import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FriendSection = ({ friendProfileLen, onPressArrow, isOpened }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: 'gray' }}>친구 {friendProfileLen}</Text>
      <TouchableOpacity onPress={onPressArrow}>
        <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="lightgray" />
      </TouchableOpacity>
    </View>
  );
};

export default FriendSection;
