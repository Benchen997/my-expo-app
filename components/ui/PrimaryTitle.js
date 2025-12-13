import { Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors";
function PrimaryTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default PrimaryTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});