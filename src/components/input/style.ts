import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#282828",
    borderRadius: 5,
    paddingInline: 11,
    gap: 11,
  },
  containerFocused: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#282828",
    borderRadius: 5,
    paddingInline: 11,
    borderWidth: 1,
    borderColor: "#896CFE",
  },
  inputInfo: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 11,
  },
  input: {
    flex: 1,
    height: 48,
    color: "#676767",
    fontWeight: "regular",
    fontSize: 16,
  },
});

export default styles;
