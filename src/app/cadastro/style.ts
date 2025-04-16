import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingInline: 35,
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
  button: {
    flexDirection: 'row',
    gap: 7,
    width: '100%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#896CFE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default styles