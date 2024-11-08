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
  ToastAndroid,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import CustomInput from "./CustomInput";

export default function Form({
  setName,
  setMessage,
  handleOnPress,
  closeForm,
  pickImage,
  handleColorSelect,
  changeFont,
}) {
  return (
    <View style={styles.modal}>
      <View style={styles.form}>
        <Pressable
          style={styles.closeBtn}
          onPress={() => {
            closeForm();
          }}
        >
          <Text style={styles.close}>x</Text>
        </Pressable>

        <Text style={styles.formTitle}>Enter card information </Text>

        <CustomInput name={"Name"} onChange={setName} />
        <CustomInput name={"Message"} onChange={setMessage} />
        <Pressable style={styles.imageUploadBtn} onPress={pickImage}>
          <Text style={styles.imageUpload}>Pick an image from camera roll</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            changeFont("Poppins");
          }}
        >
          <Text style={styles.buttonText}>Poppins</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            changeFont("Sans");
          }}
        >
          <Text style={styles.buttonText}>Sans serif</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010709",
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollView: {
    gap: 15,
    paddingVertical: 20,
  },
  formTitle: {
    fontSize: 22,
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
    backgroundColor: "#ECEBE4",
    padding: 5,
    paddingHorizontal: 50,
    marginTop: 20,
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
  modal: {
    flex: 1,

    backgroundColor: "rgba(0, 0, 0, 0.5)",

    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  form: {
    margin: 20,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },
  imageUploadBtn: {
    padding: 0,
    marginLeft: 0,
  },
  imageUpload: {
    fontSize: 20,
    marginVertical: 10,
    color: "#BDBDBD",
  },
  closeBtn: {
    alignSelf: "flex-end",
  },
  close: {
    color: "#BDBDBD",
    fontSize: 25,
    margin: 0,
    padding: 0,
  },
});
