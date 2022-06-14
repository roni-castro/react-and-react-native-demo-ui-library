import * as React from 'react';
import { Button } from 'react-and-react-native-demo-ui-library';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button text="Button" onClick={() => console.log('onClick')} />
    </View>
  );
}
