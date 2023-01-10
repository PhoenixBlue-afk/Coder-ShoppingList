import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
} from "react-native"

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisble, setModalVisible] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>
      <Button title="Edit" onPress={() => setModalVisible(true)} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Write your product"
            style={styles.addItemInput}
            onChangeText={onHandleChangeItem}
            value={textItem}
          />
          <Button title="ADD" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisble}>
        <View style={styles.modalStyle}>
          <Text>{itemSelected}</Text>
          <Button
            title="Delete"
            onPress={() => console.log("borrar elemento")}
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAF2",
  },
  titleContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    width: "80%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#1E283C",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
