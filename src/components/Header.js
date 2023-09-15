import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IconButton = ({ name }) => {
  return (
    <TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={{ paddingHorizontal: 6 }}>
      <Ionicons name={name} size={24} color="black" style={{ paddingHorizontal: 6 }} />
    </TouchableOpacity>
  );
};

const Header = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View>
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
    </View>
  );
};

export default Header;
