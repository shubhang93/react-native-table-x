import React from "react";
import {TextInput, StyleSheet} from 'react-native'
import {observer} from "mobx-react";
import util from "./util/util";

const FilterInput = observer(props =>
    <TextInput
        placeholder={"Search"}
        style={styles.inputBox}
        onChangeText={text=>props.onTextChange(text)}
    />)

export default FilterInput

const styles = StyleSheet.create({
    inputBox:{
        borderBottomColor:"#4DBCE9",
        width:util.calculateDimensionsRelativeToScreen(100),
        height:40,
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})