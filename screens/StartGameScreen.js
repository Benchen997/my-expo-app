import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import { useState } from "react";
import { Alert } from "react-native";
import { Keyboard } from "react-native";
import Colors from "../constant/colors";
import PrimaryTitle from "../components/ui/PrimaryTitle";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
    Keyboard.dismiss();
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <View style={styles.rootContainer}>
        <PrimaryTitle>Guess My Number</PrimaryTitle>
        <Card>
          <Instruction>Enter a Number</Instruction>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButtons onPress={resetInputHandler}>Reset</PrimaryButtons>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButtons onPress={confirmInputHandler}>
                Confirm
              </PrimaryButtons>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
