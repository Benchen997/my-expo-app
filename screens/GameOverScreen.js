import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
    </View>
  );
}

export default GameOverScreen;  

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});