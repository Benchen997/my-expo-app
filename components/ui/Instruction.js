import { Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors";

/**
 * This component is used to display an instruction text, and accepts a style prop to apply additional styles.
 * @param {Object} props - The props of the component
 * @param {React.ReactNode} props.children - The children of the instruction text
 * @param {Object} props.style - The style of the instruction text
 * @returns {React.ReactNode} The instruction text
 */
export default function Instruction({ children, style = {} }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    fontFamily: "open-sans",
  },
});
