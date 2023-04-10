import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ResetButton = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onReset}>
      <AntDesign name="delete" size={26} color="white" />
    </TouchableOpacity>
  );
};

export default ResetButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    zIndex: 1000,
  },
});
