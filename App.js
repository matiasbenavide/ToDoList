import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { View } from 'react-native';

import ModalItem from './components/Modal';
import AddItem from'./components/AddItem';
import ListaItem from'./components/Lista/ListaItem';
import Index from'./components/Lista/index';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (t) => setTextItem(t)

  const addItem = () => {
    console.log('ADD NEW ITEM');
    setItemList(currentItems => [
      ...currentItems,
      {id: Math.random().toString(), value:textItem}
    ])
    setTextItem('')
  }

  const onHandlerDelete = id => {
    console.log('DELETE ITEM');
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  return (
    <View>
      <ModalItem 
        visible = {modalVisible}
        onDelete = {onHandlerDelete.bind(this, itemSelected.id)}
        item = {itemSelected}
      />
      <AddItem
        onChange = {onHandlerChangeItem}
        onAddItem = {addItem}
        value = {textItem}
      />
      <ListaItem
        itemList = {itemList}
      />
      <Index
        itemList = {itemList}
        onModal = {onHandlerModal}
      />
    </View>
  );
}