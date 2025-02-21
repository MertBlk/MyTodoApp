import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker"; 

const HomeScreen = ({ navigation }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState("Genel"); 

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false, category }]);
    setTask("");
    setCategory("Genel"); 
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Görev ekle..."
          placeholderTextColor="white"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <AntDesign name="pluscircle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Günlük İşler" value="Genel" color="white" />
        <Picker.Item label="İş" value="İş" color="white" />
        <Picker.Item label="Kişisel" value="Kişisel" color="white" />
        <Picker.Item label="Alışveriş-Market" value="Alışveriş" color="white" />
        <Picker.Item label="Okul" value="Okul" color="white" />
        <Picker.Item label="Spor" value="Spor" color="white" />
        <Picker.Item label="Araba" value="Araba" color="white" />
      </Picker>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <Text style={[styles.taskText, item.completed && styles.completedText]}>
                {item.text} ({item.category})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <AntDesign name="delete" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate("Second")}
      >
        <Text style={styles.navigateText}>İkinci Sayfaya Git</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#222831" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "white" },
  inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, backgroundColor: "#393E46", color: "white" },
  addButton: { marginLeft: 10, backgroundColor: "#00ADB5", padding: 10, borderRadius: 50 },
  taskContainer: { flexDirection: "row", justifyContent: "space-between", padding: 15, backgroundColor: "#393E46", marginBottom: 10, borderRadius: 8, elevation: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 },
  taskText: { fontSize: 18, color: "white" },
  completedText: { textDecorationLine: "line-through", color: "white" },
  picker: { backgroundColor: "#393E46", color: "white", marginBottom: 10 },
  navigateButton: { marginTop: 10, marginBottom: 20, backgroundColor: "#00ADB5", padding: 10, borderRadius: 80, alignItems: "center" },
  navigateText: { color: "white", fontSize: 18 },
});

export default HomeScreen;