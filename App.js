import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle, textInput) => {
        if (goalTitle.trim().length !== 0) {
            setCourseGoals((currentGoals) => [
                ...currentGoals,
                {
                    id: Math.random().toString(),
                    value: goalTitle,
                },
            ]);
        }

        textInput.clear();
        setIsAddMode(false);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    const cancelModalHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput
                visible={isAddMode}
                addGoalHandler={addGoalHandler}
                cancelModal={cancelModalHandler}
                placeholder="Course Goal"
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={(itemData) => (
                    <GoalItem
                        title={itemData.item.value}
                        id={itemData.item.id}
                        onDelete={removeGoalHandler}
                    />
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 80,
    },
});
