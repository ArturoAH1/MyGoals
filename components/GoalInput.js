import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput({onAddGoal}){
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <view style={StyleSheet.inputConteiner}>
            <TextInput
                style={StyleSheet.TextInput}
                placeholder="Your Goal!"
                onChangeText={handleInputGoal}
                value={enteredGoalText0}
            />
            <Button
                title="Add Goal"
                color={'salmon'}
                onPress={addGoalHandler}
            />
        </view>
    )
}