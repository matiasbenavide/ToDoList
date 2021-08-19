import React from "react";

import {
    Button,
    StyleSheet,
    Text,
    Modal,
    View
} from "react-native";

const ModalItem = (props) => {
    const {
        visible,
        onDelete,
        item
    } = props;

    if(!visible) return null;

    return(
      <Modal
        animationType="slide"
        visible={visible}
      >
        <View style={styles.container}>
          <View style={styles.modalTitle}>
            <Text>Mi Modal</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>¿Está seguro que desea borrar?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{item.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button 
                onPress = { onDelete }
                title = "CONFIRM"
            />
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalTitle: {
        backgroundColor: '#ccc',
        color: 'white',
        fontSize: 18
    },
    modalMessage: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodalButton: {
        marginTop: 15
    },
    modalItem: {
        fontSize: 30
    }
})

export default ModalItem