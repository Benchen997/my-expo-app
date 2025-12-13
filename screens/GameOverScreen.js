import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryTitle from "../components/ui/PrimaryTitle";
import Colors from "../constant/colors";
import PrimaryButtons from "../components/ui/PrimaryButtons";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <PrimaryTitle>GAME OVER!</PrimaryTitle>
      <View style={styles.ImageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed 
        <Text style={styles.highlight}> {roundsNumber} </Text> 
        rounds to guses the number 
        <Text style={styles.highlight}> {userNumber} .</Text>
      </Text>
      <PrimaryButtons onPress={onStartNewGame}>Start New Game</PrimaryButtons>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
});
