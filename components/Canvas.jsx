import { Stack } from "expo-router";
import {
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  Pressable,
  Alert,
  Modal,
  ToastAndroid,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useState, useEffect } from "react";
import Form from "./Form";
import CustomButton from "./CustomButton";
import Card from "./Card";
import * as ImagePicker from "expo-image-picker";

export default function Canvas() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const [errors, setErrors] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#020709");
    NavigationBar.setBorderColorAsync("#717171");
    console.log(name, message);
  }, []);

  const handleOnPress = () => {
    Alert.alert("Alert", "Button was pressed", [
      {
        text: "Okay",
        onPress: () => console.log("Okay was pressed"),
      },
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => console.log("Cancel was pressed"),
      },
      {
        text: "Delete",
        style: "destructive",

        onPress: () => console.log("Delete was pressed"),
      },
    ]);
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openForm}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <Form
            setName={setName}
            setMessage={setMessage}
            handleOnPress={handleOnPress}
            closeForm={() => setOpenForm(false)}
            pickImage={pickImage}
          />
        </Modal>
        {openForm === false && (
          <CustomButton name={"Edit"} handleOnPress={() => setOpenForm(true)} />
        )}
        {name !== "" && message !== "" ? (
          <Card name={name} message={message} image={image} />
        ) : (
          <Text>No card created</Text>
        )}
      </ScrollView>
      <StatusBar backgroundColor="#010709" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollView: {
    gap: 15,
    paddingVertical: 20,
  },
  formTitle: {
    fontSize: 36,
    marginVertical: 10,
    color: "#BDBDBD",
  },
  inputContainer: {
    gap: 5,
  },
  label: {
    color: "#BDBDBD",
  },
  input: {
    borderRadius: 5,
    borderColor: "#BDBDBD",
    padding: 5,
    paddingHorizontal: 10,
    color: "#BDBDBD",
    borderWidth: 0.8,
  },
  button: {
    backgroundColor: "#306A68",
    padding: 15,

    borderRadius: 5,
  },
  buttonText: {
    color: "#BDBDBD",
    textAlign: "center",
    textTransform: "uppercase",
  },
  signInSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
