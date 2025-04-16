import { TextInput, TextInputProps, View } from "react-native"
import styles from "./style"
import { AtSign, Lock, UserRound } from "lucide-react-native"
import { forwardRef, useState } from "react"
import { Controller, UseControllerProps } from 'react-hook-form'

type Props = {
  icon: 'name' | 'email' | 'password',
  formProps: UseControllerProps,
  inputProps: TextInputProps
}

const Input = forwardRef<TextInput, Props> (({ icon, formProps, inputProps }, ref) => {
  const [onFocus, setOnFocus] = useState(false)
  return (
    <Controller
      render={({ field}) => (
        <View style={styles.container}>
          {icon === 'name' && <UserRound size={24} style={styles.iconInput} />}
          {icon === 'email' && <AtSign size={24} style={styles.iconInput} />}
          {icon === 'password' && <Lock size={24} style={styles.iconInput} />}
          <TextInput
            ref={ref}
            value={field.value}
            onChangeText={field.onChange}
            placeholder={inputProps.placeholder}
            placeholderTextColor={"#676767"}
            style={onFocus ? styles.inputFocused && styles.input : styles.input}
            secureTextEntry={icon === 'password' ? true : false}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            {...inputProps}
          />
        </View>
      )}
      {...formProps}
    />
  )
})

export { Input }