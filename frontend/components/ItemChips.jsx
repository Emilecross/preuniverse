import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { Chip, Text } from 'react-native-paper';

function ItemChips({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <ScrollView
      horizontal={true}
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 16,
      }}>
      {data.map((item) => (
        <Chip
          key={item}
          mode={selectedItem === item ? 'outlined' : 'flat'}
          onPress={() => handlePress(item)}
          style={{
            marginHorizontal: 4,
            marginVertical: 4,
            textAlign: 'center',
          }}
        >
          <Text style={{ textAlign: 'center', textAlignVertical: 'top' }}>
            {item}
          </Text>
        </Chip>
      ))}
    </ScrollView>
  );
}

export default ItemChips;
