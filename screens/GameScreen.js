import { View, Text, StyleSheet } from "react-native";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import PrimaryTitle from "../components/ui/PrimaryTitle";
import Colors from "../constant/colors";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import { Alert } from "react-native";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import { Ionicons } from "@expo/vector-icons";

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
      <Card>
        <Instruction style={styles.instructionText}>Higher or lower?</Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButtons>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButtons>
          </View>
        </View>
      </Card>
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
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
