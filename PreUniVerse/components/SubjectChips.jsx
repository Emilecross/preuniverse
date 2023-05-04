import React, { useState } from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

const subjects = ['Math', 'Science', 'English', 'History']; // array of subjects

function SubjectChips() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handlePress = (subject) => {
    setSelectedSubject(subject === selectedSubject ? null : subject);
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 16 }}>
      {subjects.map((subject) => (
        <Chip
          key={subject}
          mode={selectedSubject === subject ? 'outlined' : 'flat'}
          onPress={() => handlePress(subject)}
          style={{ marginRight: 8, marginBottom: 8 }}
        >
          {subject}
        </Chip>
      ))}
    </View>
  );
}

export default SubjectChips;
