import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { friendProfiles, myProfile } from './src/data';
import Header from './src/components/Header';
import Profile from './src/components/Profile';
import Margin from './src/components/Margin';
import Division from './src/components/Division';
import FriendSection from './src/components/FriendSection';
import FriendList from './src/components/FriendList';
import TabBar from './src/components/TabBar';

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSeletedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['right', 'left']} style={styles.container}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Header />
          <Margin height={10} />
          <Profile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
          <Margin height={15} />
          <Division />
          <Margin height={12} />
          <FriendSection friendProfileLen={friendProfiles.length} onPressArrow={onPressArrow} isOpened={isOpened} />
          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>
        <TabBar selectedTabIdx={selectedTabIdx} setSeletedTabIdx={setSeletedTabIdx} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
