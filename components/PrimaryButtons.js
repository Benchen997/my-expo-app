import { View, Text, StyleSheet } from 'react-native';
function PrimaryButtons({ children }) {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>
    )
}

export default PrimaryButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ddb52f",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 24,
    marginHorizontal: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});