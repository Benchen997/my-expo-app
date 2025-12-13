import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors";
function NumberContainer({ children, style }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
