import * as React from 'react';
import { Button, Input } from 'react-and-react-native-demo-ui-library';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={() => console.log('onClick')}>Button</Button>
      <Input placeholder="type here" />
    </View>
  );
}
