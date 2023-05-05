import React, { useState } from 'react';
import { View } from 'react-native';
import { Chip, Text } from 'react-native-paper';

const subjects = ['Math', 'Science', 'English', 'History']; // array of subjects

function SubjectChips() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handlePress = (subject) => {
    setSelectedSubject(subject === selectedSubject ? null : subject);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', marginHorizontal: 16, width: '100%'}}>
      {subjects.map((subject) => (
        <Chip
          key={subject}
          mode={selectedSubject === subject ? 'outlined' : 'flat'}
          onPress={() => handlePress(subject)}
          style={{ marginRight: 8, marginBottom: 8, flex: 1, width: '100%', height: '100%' }}
        >
          <Text>{subject}</Text>
        </Chip>
      ))}
    </View>
  );
}

export default SubjectChips;
