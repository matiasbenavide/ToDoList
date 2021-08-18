import React from "react";

import {
    Button,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

const AddItem = (props) => {
    const { onChange, onAddItem, value } = props;

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Item de Lista"
                onChangeText={onChange}
                value={value}
        />
        <Button title="ADD" onPress={onAddItem} style={styles.button}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 15,
        marginRight: 15
    },
});

export default AddItem;