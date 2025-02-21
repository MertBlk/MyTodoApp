import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>İkinci Sayfa</Text>
      <Text style={styles.description}>Bu, ikinci sayfanın içeriğidir.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831",
    
    
  },
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00ADB5",
  },
  description: {
    color: "#EEEEEE",
    fontSize: 18,
    marginTop: 10,
  },
});

export default SecondScreen;