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
import { FlatList } from "react-native";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, onRoundChange }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onRoundChange(guessRounds.length);
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessRounds) => [newRndNum, ...prevGuessRounds]);
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
      <View style={styles.listContainer}>
        <FlatList data={guessRounds} renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>#{guessRounds.length - itemData.index}</Text>
            <Text style={styles.listText}>{itemData.item}</Text>
          </View>
        )}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 36,
    alignItems: "center",
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
  listContainer: {
    flex: 1,
    padding: 8,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    scrollViewProps: {
      showsVerticalScrollIndicator: false,
    },
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    maxWidth: "80%",
    width: 300,
  },
  listContent: {
    paddingBottom: 24,
  },  
  listText: {
    fontFamily: "open-sans",
    fontSize: 24,
  },
});
