import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const renderItemTask = ({item})=>{
    return(
        <View style={styles.task} key={item.id}>
            <Text>{item.task}</Text>
        </View>
    )
}

const MainScreen = ({taskList}) => {

  const[list, setList] = useState(taskList)
  const[input, setInput] = useState("")

  const agregarTarea = () =>{
    setList([
        ...list,
        {
            id: list.length + 1,
            task: input,
            completed: false,
        }
    ])
  }

  return (
    <View style = {styles.container}>
        <View style={styles.view1}>
            <TextInput 
                placeholder='Escribir tarea'
                style={styles.input} 
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={agregarTarea}
            >
                <Text>Agregar Tarea</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.view2}>
            <FlatList
                data = {list}
                keyExtractor={item =>item.id}
                renderItem={renderItemTask}
            />


 
        </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "azure",  
        width: '100%',
    },
    view2: {
        flex: 8,
        backgroundColor: "blue",  
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
    },
    input: {
        borderBottomColor: 'indigo',
        borderBottomWidth: 3,
        width: 150,
        marginBottom: 8,
    },
    button: {
        paddingHorizontal: 10,
        width: 150,
        backgroundColor: 'grey',
    },
    task: {
        width: 200,
        backgroundColor: 'azure',
        padding: 10,
        margin: 10,
    }
})