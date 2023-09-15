import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
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

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile uri={item.uri} name={item.name} introduction={item.introduction} isMe={false} />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Header />
        <Margin height={10} />
        <Profile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} isMe={true} />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection friendProfileLen={friendProfiles.length} onPressArrow={onPressArrow} isOpened={isOpened} />
      </View>
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['right', 'left']} style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={isOpened ? friendProfiles : []}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            keyExtractor={(_, index) => index}
            ItemSeparatorComponent={ItemSeparatorComponent}
            renderItem={renderItem}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ListFooterComponent}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
          />
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
