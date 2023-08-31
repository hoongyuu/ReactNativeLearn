import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const cancelHandler = () => {
    props.onCancel();
    setEnteredGoal("");
  };

  return (
    <>
      <Modal visible={props.isVisible} animationType="slide">
        <View style={styles.header}>
          <View>
            <Image style={styles.headerLogo} source={require("../assets/adaptive-icon.png")} />
          </View>
          <TextInput
            style={styles.headerInput}
            placeholder="Course Goal"
            value={enteredGoal}
            onChangeText={goalInputHandler}
          />
          <View style={styles.headerButtonGroup}>
            <View style={styles.headerButton}>
              <Button title="CANCEL" color="red" onPress={cancelHandler} />
            </View>
            <View style={styles.headerButton}>
              <Button title="ADD GOAL" onPress={addGoalHandler} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 16,
    backgroundColor: "#311b6b",
  },
  headerLogo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headerInput: {
    width: "80%",
    color: '#f5f5f5',
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  headerButtonGroup: {
    flexDirection: "row",
  },
  headerButton: {
    marginHorizontal: 10,
  },
});
