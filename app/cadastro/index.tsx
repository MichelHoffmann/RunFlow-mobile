import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "./style";
import { AtSign, Eye, Lock, UserRound } from "lucide-react-native";

export default function Cadastro() {
  return (
    <View style={style.container}>
      <ImageBackground
        style={style.background}
        source={require("../../assets/images/bg-form.png")}
      >
        <Text style={style.title}>RunFlow</Text>
        <Text style={style.subTitle}>Crie a sua conta</Text>
        <View style={style.inputContainer}>
          <UserRound size={24} style={style.iconInput} />
          <TextInput placeholder="Nome" style={style.input} />
        </View>

        <View style={style.inputContainer}>
          <AtSign size={24} style={style.iconInput} />
          <TextInput placeholder="Email" style={style.input} />
        </View>

        <View style={style.inputContainer}>
          <Lock size={24} style={style.iconInput} />
          <TextInput placeholder="Senha" style={style.input} />
          <Eye size={24} style={style.iconPassword} />
        </View>

        <View style={style.inputContainer}>
          <Lock size={24} style={style.iconInput} />
          <TextInput placeholder="Confirme a senha" style={style.input} />
          <Eye size={24} style={style.iconPassword} />
        </View>
        <Text></Text>
        <TouchableOpacity>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <View>
          <View></View>
          <Text>Ou continue com</Text>
          <View></View>
        </View>
        <TouchableOpacity>
          <Text>Google</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
