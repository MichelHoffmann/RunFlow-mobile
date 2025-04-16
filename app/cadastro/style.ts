import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#232323",
  },
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#896CFE",
  },
  subTitle: {
    fontWeight: "semibold",
    fontSize: 20,
    color: "#fff",
  },
  inputContainer: {
    width: "80%",
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
  iconPassword: {
    position: "absolute",
    right: 10,
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
    paddingInline: 40,
  },
});
