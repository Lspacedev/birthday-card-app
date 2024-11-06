import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ name, handleOnPress }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        handleOnPress();
      }}
    >
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#1C1C1C",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
