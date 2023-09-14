import React from 'react';
import { ScrollView, View } from 'react-native';
import Profile from './Profile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Margin from './Margin';

const FriendList = ({ data, isOpened }) => {
  const { bottom } = useSafeAreaInsets();

  if (!isOpened) return null;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item, i) => (
        <View key={i}>
          <Profile uri={item.uri} name={item.name} introduction={item.introduction} />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};

export default FriendList;
