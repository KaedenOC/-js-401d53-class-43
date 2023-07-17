import React from 'react';
import { View } from 'react-native';
import ChatScreen from './screens/ChatScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ChatScreen />
    </View>
  );
};

export default App;











// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Chat App</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
