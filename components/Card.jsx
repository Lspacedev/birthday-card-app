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
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";
export default function Card({ name, message, image, font }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <Text
            style={[font === "Poppins" ? styles.cardTitle : styles.cardTitle2]}
          >
            Happy Birthday
          </Text>

          <Text style={styles.formTitle}>{name}</Text>

          <View style={styles.imageBorder}>
            {image !== "" && (
              <Image source={{ uri: image }} style={styles.image} />
            )}
          </View>
          <Text style={styles.messageText}>{message}</Text>
        </View>
        <View style={styles.bottomDecoration}>
          <Image
            style={styles.decoration}
            source={require("@/assets/images/balloon.png")}
          />
          <Image
            style={styles.decoration}
            source={require("@/assets/images/balloon.png")}
          />

          <Image
            style={styles.decoration}
            source={require("@/assets/images/balloon.png")}
          />
        </View>

        {/* <Pressable
        onPress={() => {
          closeForm();
        }}
      >
        <Text style={styles.formTitle}>x</Text>
      </Pressable> */}
        {/* 
      <CustomInput name={"Name"} onChange={setName} />
      <CustomInput name={"Message"} onChange={setMessage} /> */}

        {/* <Pressable
        style={styles.button}
        onPress={() => {
          handleOnPress();
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#02111B",
    height: 500,
    paddingHorizontal: 20,
  },
  scrollView: {
    gap: 15,
    paddingVertical: 20,
  },
  border: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 15,
    padding: 5,
    border: "1px solid white",
  },
  cardTitle: {
    fontSize: 42,
    fontFamily: "Poppins_700Bold_Italic",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 5,
    color: "#2A4849",
  },
  cardTitle2: {
    fontSize: 42,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 5,
    color: "#2A4849",
  },
  formTitle: {
    fontSize: 30,
    marginVertical: 0,
    color: "#BDBDBD",
    textAlign: "center",
    padding: 5,
  },

  messageText: {
    fontSize: 21,
    fontFamily: "Poppins_400Regular",
    fontStyle: "italic",
    marginVertical: 5,
    color: "#BDBDBD",
    textAlign: "center",
    padding: 10,
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
  image: {
    width: 150,
    height: 150,
    marginHorizontal: "auto",
    borderRadius: 100,
  },
  decoration: {
    width: 66,
    height: 80,
  },
  imageBorder: {},
  bottomDecoration: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
