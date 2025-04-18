import { TextInput, TextInputProps, View } from "react-native";
import styles from "./style";
import { AtSign, Eye, EyeOff, Lock, UserRound } from "lucide-react-native";
import { forwardRef, useEffect, useState } from "react";
import { Controller, UseControllerProps } from "react-hook-form";

type Props = {
  icon: "name" | "email" | "password";
  formProps: UseControllerProps;
  inputProps: TextInputProps;
};

const Input = forwardRef<TextInput, Props>(
  ({ icon, formProps, inputProps }, ref) => {
    const [onFocus, setOnFocus] = useState(false);
    const [showPassword, setShowPassword] = useState<boolean | null>(null);

    function handleShowPassword() {
      setShowPassword(!showPassword)
    }

    useEffect(() =>{
      if(icon === 'password') {
        setShowPassword(false)
      }
    }, [])
    return (
      <Controller
        render={({ field }) => (
          <View style={onFocus ? styles.containerFocused : styles.container}>
            <View style={styles.inputInfo}>
              {icon === "name" && <UserRound size={24} color={"#676767"} />}
              {icon === "email" && <AtSign size={24} color={"#676767"} />}
              {icon === "password" && <Lock size={24} color={"#676767"} />}
              <TextInput
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                placeholder={inputProps.placeholder}
                placeholderTextColor={"#676767"}
                cursorColor={"#896CFE"}
                style={styles.input}
                {...(!showPassword && { secureTextEntry: true })}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                {...inputProps}
              />
            </View>

            {showPassword !== null &&
              (!showPassword ? (
                <EyeOff
                  size={24}
                  color={"#676767"}
                  onPress={() => handleShowPassword()}
                />
              ) : (
                <Eye
                  size={24}
                  color={"#676767"}
                  onPress={() => handleShowPassword()}
                />
              ))}
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export { Input };
