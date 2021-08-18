import React from "react";

import {
    View,
    Text,
    StyleSheet
} from 'react-native';
const ListaItem = (props) => {
    const { itemList } = props
    return(
        <View>
            {itemList.map(item => <View style={styles.itemList}><Text>{item.value}</Text></View>)}
        </View>
    )
};

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: '#ccc',
        padding: 10,
        margin: 5,
    },
});

export default ListaItem;