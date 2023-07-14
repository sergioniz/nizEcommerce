import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/Listas'
import ModalTask from '../Components/Modal'



const MainScreen = ({taskList}) => {

  const[list, setList] = useState(taskList)
  const[input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [taskActive, setTaskActive] = useState({})

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

  const onPressTask = (task) => {
        console.log(task)
        setTaskActive(task)
        setModalVisible(!modalVisible)
  }

  return (
    <View style = {styles.container}>
        <TopBar
            input={input}
            agregarTarea={agregarTarea}
            setInput={setInput}
        />
        <TaskList 
            list = {list}
            onPressTask = {onPressTask}
        />
        <ModalTask 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            taskActive={taskActive}
        />
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
 
})