import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native';

const Header = () => {
  const headerHeight = Platform.OS === 'android' ? 80 : 120;
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <SafeAreaView>
      <View style={[styles.headerContainer, { height: headerHeight + statusBarHeight }]}>
        <StatusBar backgroundColor="#6495ED" barStyle="light-content" />
        <Text style={styles.logo}>Chat App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;