import { View, StyleSheet } from "react-native";
import Colors from "../../constant/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // for Android
    elevation: 4,
    // for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});