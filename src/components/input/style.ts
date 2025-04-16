import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      },
      iconInput: {
        position: "absolute",
        left: 10,
        color: "#676767",
      },
      input: {
        width: "100%",
        height: 48,
        backgroundColor: "#282828",
        color: "#676767",
        borderRadius: 5,
        fontWeight: "regular",
        fontSize: 16,
        paddingLeft: 40,
        paddingRight: 11,
        outlineStyle: 'none',
      },
      inputFocused: {
        borderWidth: 1,
        borderColor: '#896CFE',
      },
});

export default styles