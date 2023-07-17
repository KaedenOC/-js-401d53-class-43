import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, message]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.chatContainer}>
          <FlatList
            data={chatMessages}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
            style={styles.chatList}
            contentContainerStyle={styles.chatListContent}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={(text) => setMessage(text)}
              placeholder="Type your message"
            />
            <Button title="Send" onPress={handleSendMessage} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  chatList: {
    flex: 1,
  },
  chatListContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default ChatScreen;