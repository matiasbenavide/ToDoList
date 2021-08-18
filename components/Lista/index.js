import React from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ListaItem from "./ListaItem";

const index = (props) => {
    const { itemList, onModal } = props;
    return(
        <FlatList
            data={itemList}
        renderItem={data => (
            <TouchableOpacity onPress={onModal.bind(this, data.item.id)}>
            <View style={styles.itemList}>
                <Text>Borrar</Text>
            </View>
            </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        />
    )
};

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: '#ccc',
        padding: 10,
        margin: 5,
    },
});

export default index;