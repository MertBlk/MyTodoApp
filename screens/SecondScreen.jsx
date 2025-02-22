import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const SecondScreen = ({ route }) => {
  const { completedTasks } = route.params || { completedTasks: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Tamamlanan Görevler</Text>
      {completedTasks.length === 0 ? (
        <Text style={styles.emptyText}>Tamamlanmış görev bulunmamaktadır.</Text>
      ) : (
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item.text} ({item.category})</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#222831" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "white" },
  emptyText: { color: "white", textAlign: "center", fontSize: 16, marginTop: 20 },
  taskContainer: { padding: 15, backgroundColor: "#393E46", marginBottom: 10, borderRadius: 8 },
  taskText: { fontSize: 18, color: "white" },
});

export default SecondScreen;