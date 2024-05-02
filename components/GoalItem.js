import { StyleSheet, View, Text, Pressable} from "react-native"

function GoalItem(itemData, OnDaleteItem){
    return(
        <Pressable>
            <View style={StyleSheet.goalsItem}>
                <Text style={style.goalsItem}>{itemData.item}</Text>
            </View>
        </Pressable>
    )
}
export default GoalItem

const style = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'salmon',
        color: 'red'
    },
    goalText: {
        color: 'white'
    }
})