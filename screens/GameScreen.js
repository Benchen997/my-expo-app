import { View, Text, StyleSheet } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryTitle from "../components/PrimaryTitle";

function GameScreen() {
  return (
    // safe area view is used to ensure that the content is not covered by the status bar
    <SafeAreaView style={styles.screen}>
      <PrimaryTitle> Opponent's Guess</PrimaryTitle>
      <Text style={styles.subtitle}>Guess a number</Text>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButtons onPress={() => {}}>+</PrimaryButtons>
          <PrimaryButtons onPress={() => {}}>-</PrimaryButtons>
        </View>
      </View>
      <Text>Logs Rounds</Text>
    </SafeAreaView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
