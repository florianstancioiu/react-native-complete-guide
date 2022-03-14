import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalItem = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    let textInput = '';

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const goalInputRef = (input) => {
        textInput = input;
    };

    return (
        <Modal
            style={styles.modal}
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.textInputWrapper}>
                <TextInput
                    style={styles.textInput}
                    placeholder={props.placeholder}
                    onChangeText={goalInputHandler}
                    ref={goalInputRef}
                />
                <View style={styles.buttonsWrapper}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={props.cancelModal}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={() =>
                                props.addGoalHandler(enteredGoal, textInput)
                            }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {},
    textInputWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
    },
    buttonsWrapper: {
        marginTop: 20,
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '40%',
    },
});

export default GoalItem;
