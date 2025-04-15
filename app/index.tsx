import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Start() {
  const router = useRouter();
  return (
    <View style={style.container}>
      <ImageBackground
        style={style.image}
        source={require("../assets/images/bg-start.png")}
      >
        <Text style={style.title}>RunFlow</Text>
        <Text style={style.text}>
          Seu progresso começa com o primeiro passo. Corra e evolua!
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/cadastro");
          }}
          style={style.button}
        >
          <Text style={style.buttonText}>Começar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#232323",
  },

  image: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: "semibold",
    color: "#fff",
  },

  text: {
    fontSize: 15,
    fontWeight: "regular",
    color: "#AEA8B2",
    maxWidth: 247,
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    width: 280,
    height: 54,
    marginBottom: 90,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#896CFE",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "semibold",
    fontSize: 18,
  },
});
