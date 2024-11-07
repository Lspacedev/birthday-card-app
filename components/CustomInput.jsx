import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomInput = ({ name, onChange, error, onBlur }) => {
  return (
    <View style={styles.inputContainer}>
      {/* <Text style={styles.label}>
        {name}
        {"\n"}
      </Text> */}

      <TextInput
        style={[styles.input, error && { borderColor: "#B9382C" }]}
        placeholder={name}
        placeholderTextColor={"#717171"}
        onChangeText={(text) => onChange(text)}
        //onBlur={onBlur}
      />
      {error && typeof error === "string" && (
        <Text style={styles.error}>{error}</Text>
      )}
      {error &&
        typeof error === "object" &&
        error.map((error, i) => {
          return (
            <Text key={i} style={styles.error}>
              {error}
            </Text>
          );
        })}
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 5,
  },
  label: {
    color: "#BDBDBD",
  },
  input: {
    borderRadius: 5,
    borderColor: "#BDBDBD",
    flex: 60,
    color: "#BDBDBD",
    borderWidth: 0.8,
    marginTop: 15,
    padding: 5,
  },
  error: {
    color: "#B9382C",
    marginVertical: -5,
  },
});
