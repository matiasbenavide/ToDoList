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
            {itemList.map((item, i) => <View style={styles.itemList} key={i}><Text>{item.value}</Text></View>)}
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