import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabButton = ({ isSelected, onPress, activeIconName, inactiveIconName, isIconFontisto, isIconIonIcons }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{ flex: 1, justifyContent: 'cetner', alignItems: 'center', paddingVertical: 10 }}
    >
      {isIconFontisto && <Fontisto name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
      {isIconIonIcons && <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
    </TouchableOpacity>
  );
};

const TabBar = ({ selectedTabIdx, setSeletedTabIdx }) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingBottom: bottom,
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
      }}
    >
      <TabButton
        isSelected={selectedTabIdx === 0}
        onPress={() => setSeletedTabIdx(0)}
        activeIconName={'person'}
        inactiveIconName={'persons'}
        isIconFontisto
      />
      <TabButton
        isSelected={selectedTabIdx === 1}
        onPress={() => setSeletedTabIdx(1)}
        activeIconName={'chatbubble'}
        inactiveIconName={'chatbubble-outline'}
        isIconIonIcons
      />
      <TabButton
        isSelected={selectedTabIdx === 2}
        onPress={() => setSeletedTabIdx(2)}
        activeIconName={'pricetag'}
        inactiveIconName={'pricetag-outline'}
        isIconIonIcons
      />
      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => setSeletedTabIdx(3)}
        activeIconName={'add-circle'}
        inactiveIconName={'add-circle-outline'}
        isIconIonIcons
      />
    </View>
  );
};

export default TabBar;
