import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.mainItem}>
      <Pressable
        onPress={() => props.onDeleteGoal(props.item.key)}
        android_ripple={{ color: "blue" }}
        style={({ pressed }) => (pressed && styles.pressedItem)}
      >
        <Text style={styles.mainItemText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  mainItem: {
    backgroundColor: "#5bcac5",
    marginBottom: 10,
    borderRadius: 6,
    overflow: "hidden",
  },
  mainItemText: {
    padding: 10,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#ccc",
  },
});
