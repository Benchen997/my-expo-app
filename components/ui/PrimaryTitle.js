import { Text, StyleSheet } from "react-native";
import { Platform } from "react-native";

function PrimaryTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default PrimaryTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // no border for iso
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
  },
});
