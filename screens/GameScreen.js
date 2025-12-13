import { View, Text, StyleSheet } from "react-native";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryTitle from "../components/ui/PrimaryTitle";
import Colors from "../constant/colors";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import { Alert } from "react-native";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  /**
   * This function is used to generate a new random number between 1 and 100, excluding the current guess,also will
   * not give previous guess as the new guess.
   * @param {*} direction
   */
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
  }
  return (
    // safe area view is used to ensure that the content is not covered by the status bar
    <View style={styles.screen}>
      <PrimaryTitle> Opponent's Guess</PrimaryTitle>
      <NumberContainer>{currentGuess.toString()}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButtons onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButtons>
          <PrimaryButtons onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButtons>
        </View>
      </View>
      <Text>Logs Rounds</Text>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 36,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
