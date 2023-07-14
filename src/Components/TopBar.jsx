import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const TopBar = ({
    input,
    setInput,
    agregarTarea
}) => {
  return (
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
  )
}

export default TopBar

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "azure",  
        width: '100%',
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
})