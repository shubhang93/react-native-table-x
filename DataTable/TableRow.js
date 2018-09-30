import React, {Component} from "react";
import {Col, Row} from "react-native-easy-grid";
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

class TableRow extends Component {

    onRowPress = ({rowData, rowIndex}) => () => {
        if (this.props.onRowPress)
            this.props.onRowPress({rowIndex, rowData})
    }

    onChangeText = (autoBindProp, row) => value => {
        this.props.changeDataOnTextInput(value, autoBindProp)
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.onRowPress({rowData: this.props.columnData, rowIndex: this.props.rowIndex})}>
                <Row
                    style={[styles.dataRowContainer, {backgroundColor: isRowEven(this.props.rowIndex) ? "#EDEDF4" : "#FFFFFF"}]}>
                    {this.props.columns.map(
                        ({name, width, alignColItem, render, type, autoBindProp}, colIndex) =>
                            <Col size={width} style={[styles.colStyle, {alignItems: alignColItem}]}
                                 key={`__colKey${name}${this.props.rowIndex}${colIndex}`}>
                                {renderCell({
                                    data: this.props.columnData,
                                    name,
                                    alignColItem,
                                    render,
                                    rowIndex: this.props.rowIndex,
                                    type,
                                    onChangeText: this.onChangeText,
                                    autoBindProp
                                })}
                            </Col>
                    )}
                </Row></TouchableOpacity>
        )
    }
}


const isRowEven = index => index % 2 === 0

const renderCell = function ({data, name, alignColItem, render, rowIndex, onChangeText, autoBindProp}) {

    if (type) {
        switch (type) {
            case "textInput":
                return <TextInput onChangeText={onChangeText(autoBindProp,data)}/>
        }
    }


    if (render)
        return render(data, rowIndex)

    return <Text>{data[name]}</Text>
}


const styles = StyleSheet.create({
    colStyle: {
        justifyContent: "center",
        alignItems: "center",
        height: 40
    },
    dataRowContainer: {
        padding: 10
    }
})


export default TableRow