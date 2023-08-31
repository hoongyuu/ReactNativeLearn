import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (text) => {
    if (!text) {
      alert("Please enter a goal");
      return;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text, key: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (key) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== key)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Add New Goal" onPress={() => setModalIsVisible(true)} />
        <GoalInput isVisible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={() => setModalIsVisible(false)} />
      </View>
      <View style={styles.main}>
        <FlatList
          data={courseGoals}
          renderItem={(goal) => (
            <GoalItem item={goal.item} onDeleteGoal={deleteGoalHandler} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 24,
  },
  main: {
    flex: 1,
  },
});
