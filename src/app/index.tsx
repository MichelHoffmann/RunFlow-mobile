import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./cadastro/style";
import { AtSign, Lock, LogIn, UserRound } from "lucide-react-native";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function Cadastro() {
  const { control, handleSubmit } = useForm()
  const nameRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const confirmPasswordRef = useRef<TextInput>(null)

  function handleValidateForm(data: any) {
    console.log(data)
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/bg-form.png")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>RunFlow</Text>
        <Text style={styles.subTitle}>Crie a sua conta</Text>

        <Input
        ref={nameRef}
          icon="name"
          inputProps={{placeholder: 'Nome', onSubmitEditing: () => emailRef.current?.focus(), returnKeyType: 'next'}}
          formProps={{control, name: 'name'}}
        />
        <Input
        ref={emailRef}
          icon="email"
          inputProps={{placeholder: 'Email', onSubmitEditing: () => passwordRef.current?.focus(), returnKeyType: 'next'}}
          formProps={{control, name: 'email'}}
        />
        <Input
        ref={passwordRef}
          icon="password"
          inputProps={{placeholder: 'Senha', onSubmitEditing: () => confirmPasswordRef.current?.focus(), returnKeyType: 'next'}}
          formProps={{control, name: 'password'}}
        />
        <Input
          ref={confirmPasswordRef}
          icon="password"
          inputProps={{placeholder: 'Confirme a senha', onSubmitEditing: () => handleSubmit(handleValidateForm)}}
          formProps={{control, name: 'confirmPassword'}}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit(handleValidateForm)}>
          <LogIn color={'#fff'}/>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

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
      </View>
    </ImageBackground>
  );
}
