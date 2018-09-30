import React from "react";
import {FlatList, View, StyleSheet} from 'react-native'
import TableRow from "./TableRow";
import util from "./util/util";
import {observer} from "mobx-react";

@observer
class TableBody extends React.Component {

    renderItem(item, columns, index, options) {
        return <TableRow
            columns={columns}
            columnData={item}
            rowIndex={index}
            striped={options.striped}
            onRowPress={options.onRowPress}
        />
    }

    keyExtractor = (item, index) => {
        if (typeof this.props.keyExtractor === "function")
            return this.props.keyExtractor(item, index)

        return item[this.props.keyExtractor]
    }

    renderSeparator = () => {
        if (this.props.SeparatorComponent)
            return SeparatorComponent()
        return <View style={styles.separator}/>
    }

    render() {
        let {columns, striped, onRowPress} = this.props
        return (

            <View style={styles.container}>
                <FlatList
                    renderItem={({item, index}) => this.renderItem(item, columns, index, {onRowPress, striped})}
                    data={this.props.data}
                    keyExtractor={this.keyExtractor}
                    ItemSeparatorComponent={this.renderSeparator}
                /></View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#4DBCE9"
    },

    container: {
        marginTop: 3,
        height: util.calculateDimensionsRelativeToScreen(80, "height")
    }

})

export default TableBody