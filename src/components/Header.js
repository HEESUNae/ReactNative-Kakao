import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IconButton = ({ name }) => {
  return <Ionicons name={name} size={24} color="black" style={{ paddingHorizontal: 6 }} />;
};

const Header = () => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height: top }} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          친구
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <IconButton name="search-outline" />
          <IconButton name="person-add-outline" />
          <IconButton name="md-musical-notes-outline" />
          <IconButton name="ios-settings-outline" />
        </View>
      </View>
    </>
  );
};

export default Header;
