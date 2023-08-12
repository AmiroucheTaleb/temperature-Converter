import { StyleSheet } from "react-native";

const S = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignSelf: "stretch",
    borderRadius: 40,
    justifyContent: "center",
  },
  input: { height: 50, paddingLeft: 30, fontSize: 18 },
  unit: { position: "absolute", alignSelf: "flex-end", paddingRight: 30, fontSize: 25 },
});

export { S };
